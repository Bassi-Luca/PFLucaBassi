import { useState } from "react";
import { Minus, Plus } from 'phosphor-react'
import { Label, NumberInput, NumberInputBox, NumberInputButton } from 'keep-react'

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
    <div >
      <div
        className="btn-group btn-group-lg align-items-center pb-5 pt-5"
        role="group"
        aria-label="Basic mixed styles example"
      >
        Dias:
        <button onClick={handleClickRest} className="btn btn-warning ms-3">
          -
        </button>
        <button className="btn btn-danger">{count}</button>
        <button onClick={handleClickAdd} className="btn btn-success">
          +
        </button>
      </div>
      <div>
        <button onClick={() => addEbook(count)} className="btn btn-primary ">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
