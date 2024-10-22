import Item from "./Item";

const ItemList = ({ ebooks }) => {
  return (
    <div className="row">  {/* Aggiungi una riga per allineare correttamente le colonne */}
      {ebooks.map((ebook) => (
        <div className="col-12 col-sm-6 col-md-4 mb-4" key={ebook.id}>
          {/* Colonna per ogni card */}
          <Item ebook={ebook} key={ebook.id}/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
