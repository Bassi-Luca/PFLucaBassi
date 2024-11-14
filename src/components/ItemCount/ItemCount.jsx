import { useState } from "react";

const ItemCount = ({ dias, addEbook }) => {
  const [count, setCount] = useState(1);

  const handleClickRest = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickAdd = () => {
    if (count < dias) {
      setCount(count + 1);
    }
  };

  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
      data-pg-collapsed
      style={{ visibility: 'visible', display: 'block' }}
    >
      Qtà:
      <button onClick={handleClickRest} className="btn btn-warning">
        -
      </button>
      <p className="btn btn-danger">{count}</p>
      <button onClick={handleClickAdd} className="btn btn-success">
        +
      </button>
      <button onClick={() => addEbook(count)}>Agregar al carrito</button>
    </div>
  );
  
};
export default ItemCount;
