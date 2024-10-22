import { useState, useEffect } from "react";
import { getEbooks } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [ebook, setEbooks] = useState({});
  const { idEbook } = useParams()

  useEffect(() => {
    getEbooks().then((dataEbooks) => {
      const findEbook = dataEbooks.find((ebook) => ebook.id === parseIntidEbook);
      setEbooks(findEbook);
    });
  }, [idEbook]);
  return (
   <ItemDetail ebook={ebook}/>
  );
};

export default ItemDetailContainer;
