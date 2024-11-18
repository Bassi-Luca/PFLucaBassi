import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../data/db/db.js";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [ebook, setEbooks] = useState(null); // Usa null inizialmente per riconoscere il caricamento
  const { idEbook } = useParams(); // Estrarre l'ID dell'ebook dall'URL

  useEffect(() => {
    const getEbookById = async () => {
      if (!idEbook) return; // Se non c'è un idEbook, non fare nulla

      try {
        const docRef = doc(db, "Ebook", idEbook);
        const ebookDb = await getDoc(docRef);
        
        if (ebookDb.exists()) {
          setEbooks({ id: ebookDb.id, ...ebookDb.data() });
        } else {
          console.log("Nessun ebook trovato!");
        }
      } catch (error) {
        console.error("Errore nel recupero dell'ebook:", error);
      }
    };

    getEbookById(); // Carica l'ebook quando idEbook cambia
  }, [idEbook]);

  // Caricamento in corso
  if (!ebook) {
    return <div>Loading...</div>;
  }

  return <ItemDetail ebook={ebook} />;
};

export default ItemDetailContainer;
