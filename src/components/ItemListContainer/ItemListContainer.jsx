import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../data/db/db"

const ItemListContainer = ({ saludo }) => {
  const [ebooks, setEbooks] = useState([]);
  const { idGenero } = useParams();

  const getEbooks = () => {
    const ebooksRef = collection(db, "Ebook");
    getDocs(ebooksRef).then((dataDb) => {
      //formateamos correctamente nuestros productos
      const ebooksDb = dataDb.docs.map((ebookDb) => {
        return { id: ebookDb.id, ...ebookDb.data() };
      });

      setEbooks(ebooksDb);
    });
  };

  const getEbooksByCategory = () => {
    const ebooksRef = collection(db, "Ebook");
    const queryCategories = query(
      ebooksRef,
      where("genero", "==", idGenero)
    );
    getDocs(queryCategories).then((dataDb) => {
      const ebooksDb = dataDb.docs.map((ebookDb) => {
        return { id: ebookDb.id, ...ebookDb.data() };
      });

      setEbooks(ebooksDb);
    });
  };

  useEffect(() => {
    if (idGenero) {
      getEbooksByCategory();
    } else {
      getEbooks();
    }
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
