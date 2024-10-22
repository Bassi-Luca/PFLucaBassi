import React from 'react'

const Buscador = () => {
  return (
    <div className="container flex-column mt-5 w-25">
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Escribir aqui" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Busca tus libros</button>
        </form>
    </div>
  )
}

export default Buscador