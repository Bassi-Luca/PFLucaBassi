import { useState, useEffect } from "react";
import { getEbooks } from "../../data/data.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [ebooks, setEbooks] = useState([]);
  const { idGenero } = useParams();

  useEffect(() => {
    getEbooks()
      .then((dataEbooks) => {
        if (idGenero) {
          //filtramos la data por esa categoria
          const filterEbooks = dataEbooks.filter(
            (ebook) => ebook.genero === idGenero
          );
          setEbooks(filterEbooks);
        } else {
          //guardamos todos los productos
          setEbooks(dataEbooks);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, [idGenero]);

  return (
    <div className="container-fluid mt-3 mx-auto bg-light pb-5 pt-5">
      <div className="pb-4 pt-4 text-center">
        {/*<h2 className="fw-bold h2 mb-3">Tipo</h2>
        <p className="fw-light mb-4">Subtítulo</p>
        {/* Aggiungi una riga per il layout responsivo */}
        <div className="row justify-content-center">
          <div className="col-12">
            
            <ItemList ebooks={ebooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
