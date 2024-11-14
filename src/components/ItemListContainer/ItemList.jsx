import Item from "./Item";

const ItemList = ({ ebooks }) => {
  return (
    <div className="row justify-content-center">  {/* Aggiungi una riga per allineare correttamente le colonne */}
      {ebooks.map((ebook) => (
        <div className="col-2 mb-4" key={ebook.id}>
          {/* Colonna per ogni card */}
          <Item ebook={ebook} key={ebook.id}/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
