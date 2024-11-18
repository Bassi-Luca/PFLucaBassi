import { useState, useEffect, useCallback } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../data/db/db";
import Buscador from "../Buscador/Buscador";
import CustomToast from "../Buscador/CustomToast";

const ItemListContainer = () => {
  const [ebooks, setEbooks] = useState([]); // Lista completa di ebook
  const [filteredEbooks, setFilteredEbooks] = useState([]); // Lista filtrata di ebook
  const [showToast, setShowToast] = useState(false); // Stato per il toast
  const [toastMessage, setToastMessage] = useState(""); // Stato per il messaggio del toast
  const { idGenero } = useParams();

  // Recupera tutti gli ebook dal database
  const getEbooks = async () => {
    try {
      const ebooksRef = collection(db, "Ebook");
      const dataDb = await getDocs(ebooksRef);
      const ebooksDb = dataDb.docs.map((ebookDb) => ({
        id: ebookDb.id,
        ...ebookDb.data(),
      }));
      setEbooks(ebooksDb);
      setFilteredEbooks(ebooksDb); // Inizialmente mostra tutti gli ebook
    } catch (error) {
      console.error("Errore nel caricamento degli ebook:", error);
    }
  };

  // Recupera gli ebook in base alla categoria
  const getEbooksByCategory = async () => {
    try {
      const ebooksRef = collection(db, "Ebook");
      const queryCategories = query(ebooksRef, where("genero", "==", idGenero));
      const dataDb = await getDocs(queryCategories);
      const ebooksDb = dataDb.docs.map((ebookDb) => ({
        id: ebookDb.id,
        ...ebookDb.data(),
      }));
      setEbooks(ebooksDb);
      setFilteredEbooks(ebooksDb); // Inizialmente mostra tutti gli ebook
    } catch (error) {
      console.error("Errore nel caricamento per categoria:", error);
    }
  };

  // Funzione per filtrare gli ebook
  const handleSearch = useCallback((searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = ebooks.filter((ebook) => {
      const titulo = ebook.titulo?.toLowerCase(); // Usa optional chaining per evitare errori
      return titulo && titulo.includes(lowerCaseSearchTerm);
    });
    setFilteredEbooks(filtered);

    // Se non ci sono risultati, mostra il Toast
    if (filtered.length === 0 && searchTerm.trim() !== "") {
      setShowToast(true);
      setToastMessage("No titles found with this name");
    } else {
      setShowToast(false); // Nascondi il Toast se ci sono risultati
    }
  }, [ebooks]);

  // Effetto per caricare i dati
  useEffect(() => {
    if (idGenero) {
      getEbooksByCategory();
    } else {
      getEbooks();
    }
  }, [idGenero]);

  // Effetto per resettare il toast quando cambiano i risultati filtrati
  useEffect(() => {
    if (filteredEbooks.length > 0) {
      setShowToast(false); // Nascondi il Toast se ci sono risultati
    }
  }, [filteredEbooks]);

  return (
    <div className="container-fluid mt-3 mx-auto bg-light pb-5 pt-5">
      {/* Componente Buscador */}
      <Buscador ebooks={ebooks} onSearch={handleSearch} />

      {/* Componente CustomToast per il messaggio di avviso */}
      <CustomToast show={showToast} message={toastMessage} />

      <div className="pb-4 pt-4 text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <ItemList ebooks={filteredEbooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
