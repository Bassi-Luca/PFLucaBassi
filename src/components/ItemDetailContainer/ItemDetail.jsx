import React from 'react'

const ItemDetail = ({ebook}) => {
  return (
    <div>
      <button
        className="margin-top btn btn-primary ps-5 pe-5 rounded-pill text-uppercase"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        data-pg-collapsed
      >
        Details
      </button>
      <div
        className="offcanvas offcanvas-end w-50"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-pg-collapsed
      >
        <div className="flex-column-reverse offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasRightLabel">
            {ebook.titulo}
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/*<h5 className=''>Description:</h5>*/}
        <div className="align-items-center d-flex float-start offcanvas-body">
          <img src={ebook.image} className="w-50 border "/>
          <p className='class="ms-auto ps-4 text-start'>{ebook.descripcion}</p>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail;