import React from "react";
import { Link } from "react-router-dom";
import "./StyleItem.css";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Item = ({ ebook }) => {
  return (
    <div className="col-sm-auto bg-white overflow-hidden pt-4 rounded-3 shadow text-secondary mx-auto mt-5 h-100">
      <img src={ebook.image} className="img-fluid mb-n4 h-50" />
      <div className="bg-light pb-5 ps-4 position-relative pe-4 pt-4 h-100">
        <h4 className="fw-bold h3 mt-2 mb-3 text-dark text-uppercase">
          {ebook.titulo}
        </h4>
        <div className="margin-top">
          <ul className="list-unstyled ">
            <li className="pb-1 pt-1 fs-3 fw-bold">
              Genero: <span className="fw-normal"> {ebook.genero}</span>
            </li>
            <li className="pb-1 pt-1 fs-3 fw-bold">
              Paginas: <span className="fw-normal"> {ebook.paginas}</span>
            </li>
            <li className="pb-1 pt-1 fs-3 fw-bold">
              Dimension: <span className="fw-normal"> {ebook.tamaño}</span>
            </li>
          </ul>
          <div class="align-items-center d-flex fw-light h5 justify-content-center mb-4">
            {" "}
            <span className="align-self-start currency">$</span>{" "}
            <span className="fw-bold h1 text-dark ">{ebook.precio}</span>{" "}
          </div>

          <Link to={"/detail/" + ebook.id}>
            <ItemDetailContainer />
          </Link>
          
        </div>
      </div>
    </div>
  );
};
export default Item;
