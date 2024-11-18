import React, { useState, useEffect } from "react";

const Buscador = ({ ebooks, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Effetto per gestire il debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // Aspetta 500ms dopo l'ultima digitazione

    return () => clearTimeout(timer); // Pulizia al cambio di `searchTerm`
  }, [searchTerm]);

  // Funzione che gestisce il cambiamento dell'input
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Quando il termine debounced cambia, esegui la ricerca
  useEffect(() => {
    onSearch(debouncedTerm); // Passa il termine debounced al genitore
  }, [debouncedTerm, onSearch]);

  return (
    <div className="container flex-column mt-5 w-50">
      <input
        className="form-control mb-3 fs-4"
        type="search"
        placeholder="Escribir aqui "
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;
