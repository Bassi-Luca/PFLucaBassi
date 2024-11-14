import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../data/db/db.js";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetailContainer = () => {
  const [ebook, setEbooks] = useState({});
  const { idEbook } = useParams();

  const getEbookById = () => {
    const docRef = doc(db, "Ebook", idEbook);
    getDoc(docRef)
      .then((ebookDb) => {
        const ebooksDb = { id: ebookDb.id, ...ebookDb.data() };
        setEbooks(ebooksDb);
      });
  };

  useEffect(() => {
    getEbookById();
  }, [idEbook]);

  return (
    <>
      <ItemDetail ebook={ebook} />
      {/* Non è necessario renderizzare ItemCount separatamente qui, poiché è già incluso in ItemDetail */}
    </>
  );
};

export default ItemDetailContainer;
