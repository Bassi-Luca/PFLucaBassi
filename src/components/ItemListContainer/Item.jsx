import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StyleItem.css";

const Item = ({ ebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => setIsOpen(true);
  const closeOffcanvas = () => {
    const offcanvasElement = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
      offcanvas.hide(); // Chiudi l'offcanvas usando Bootstrap
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const offcanvasElementList = document.querySelectorAll(".offcanvas");
      const offcanvasList = [...offcanvasElementList].map(
        (offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl)
      );

      offcanvasList.forEach((offcanvas) => offcanvas.show());

      const handleOverlayClick = (event) => {
        if (event.target.classList.contains("offcanvas")) {
          event.stopPropagation(); // Impedisci la chiusura al clic sull'overlay
        }
      };

      offcanvasElementList.forEach((offcanvasEl) => {
        offcanvasEl.addEventListener("click", handleOverlayClick);
      });

      return () => {
        offcanvasElementList.forEach((offcanvasEl) => {
          offcanvasEl.removeEventListener("click", handleOverlayClick);
        });
      };
    }
  }, [isOpen]);

  return (
    <div className="col bg-white overflow-hidden rounded-3 justify-content-between shadow text-secondary mt-5 object-fit-fill border rounded margin-top">
      <img src={ebook.image} alt={ebook.titulo} className="imgCard img-fluid mb-4 border rounded object-fit-fill" />
      <div className="bg-light pb-5 ps-4 position-relative pe-4 pt-4 h-100">
        <h4 className="fw-bold h3 mt-2 mb-3 text-dark text-uppercase text-truncate">
          {ebook.titulo}
        </h4>
        <div className="bodyCard align-items-center d-flex fw-light h5 justify-content-center mb-4">
          <span className="align-self-start currency">$</span>
          <span className="fw-bold h1 text-dark">{ebook.precio}</span>
        </div>
        <Link to="#" className="btn btn-light btn-outline-danger col-12 mx-auto" onClick={openOffcanvas}>
          DETAILS
        </Link>

        {isOpen && (
          <div
            className="offcanvas offcanvas-start show w-50"
            tabIndex="-1"
            style={{ visibility: "visible", transform: "translateX(0%)" }}
          >
            <div className="offcanvas-header">
              <h2 className="m-4 fw-bold offcanvas-title">{ebook.titulo}</h2>
              <button
                type="button"
                className="btn-close"
                onClick={closeOffcanvas}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <div className="d-flex mx-5">
                <img
                  src={ebook.image}
                  alt={ebook.titulo}
                  className="col-5 w-50"
                />
                <ul className="list-unstyled mx-5">
                  <li className="pb-1 pt-1 fs-3 fw-bold">
                    Genero: <span className="fw-normal">{ebook.genero}</span>
                  </li>
                  <li className="pb-1 pt-1 fs-3 fw-bold">
                    Paginas: <span className="fw-normal">{ebook.paginas}</span>
                  </li>
                  <li className="pb-1 pt-1 fs-3 fw-bold">
                    Dimension: <span className="fw-normal">{ebook.tamaño}</span>
                  </li>
                  <li className="pb-1 pt-1 fs-3 fw-bold mt-5">
                    Descripcion:
                    <div>
                      <span className="fw-normal">{ebook.descripcion}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
