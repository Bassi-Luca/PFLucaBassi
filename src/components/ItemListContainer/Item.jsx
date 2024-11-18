import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Item = ({ ebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => setIsOpen(true);
  const closeOffcanvas = () => setIsOpen(false);

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
      <img
        src={ebook.image}
        alt={ebook.titulo}
        className="card-img-top"
        style={{ height: "300px", objectFit: "fill" }}
      />

      <div className="bg-light pb-5 ps-4 position-relative pe-4 pt-4 ">
        <h4 className="fw-bold h3 mt-2 mb-3 text-dark text-uppercase text-truncate">
          {ebook.titulo}
        </h4>
        <div className="align-items-center d-flex fw-light h5 justify-content-center mb-4">
          <span className="align-self-start currency">$</span>
          <span className="fw-bold h1 text-dark">{ebook.precio}</span>
        </div>

        {/* Link per navigare alla pagina dei dettagli */}
        <Link
          to={`/detail/${ebook.id}`} // Navigazione alla pagina di dettaglio
          className="btn btn-light btn-outline-danger col-12 mx-auto"
          onClick={openOffcanvas} // Apri l'offcanvas al click
        >
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
            <div className="offcanvas-body">
              {/* Dettagli del prodotto */}
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
                <li className="pt-1 fs-3 fw-bold">
                  Dias lectura: <span className="fw-normal">{ebook.dias}</span>
                  <br />
                  <span className="fw-lighter fst-italic fs-6">
                    {" "}
                    (dias de lectura maximo.)
                  </span>
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
        )}
      </div>
    </div>
  );
};

export default Item;
