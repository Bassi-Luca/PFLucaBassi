import { useState, useEffect } from "react";
import { getEbooks } from "../../data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [ebook, setEbooks] = useState({});

  useEffect(() => {
    getEbooks().then((dataEbooks) => {
      const findEbook = dataEbooks.find((ebook) => ebook.id === 1);
      setEbooks(findEbook);
    });
  }, []);
  return (
   <ItemDetail ebook={ebook}/>
  );
};

export default ItemDetailContainer;
