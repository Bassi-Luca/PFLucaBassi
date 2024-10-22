import React from "react";

const ItemDetail = ({ ebook }) => {
  return (
    <div className="align-items-center d-flex float-start offcanvas-body">
      <img src={ebook.image} className="w-25 border m-5" />
      <div>
        <h2>{ebook.titulo}</h2>
        <p className='class="ms-auto ps-4 text-start'>{ebook.descripcion}</p>
      </div>
    </div>
  );
};
export default ItemDetail;
