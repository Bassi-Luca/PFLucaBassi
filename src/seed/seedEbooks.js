import db from "../data/db/db.js";
import { addDoc, collection } from "firebase/firestore"



const ebooks = [
    {
      id: 1,
      titulo: "La historia interminable",
      image: "/img/historia.webp",
      genero: "Fantasía",
      paginas: 500,
      tamaño: "5MB",
      descripcion:
        "Una aventura épica en un mundo mágico, lleno de criaturas fantásticas y misterios.",
      precio: 9,
      dias: 3
    },
    {
      id: 2,
      titulo: "El Código Da Vinci",
      image: "/img/daVinci.webp",
      genero: "Thriller",
      paginas: 450,
      tamaño: "4.2MB",
      descripcion:
        "Un emocionante thriller que combina historia, arte y misterio en un viaje adrenalínico.",
      precio: 8,
      dias: 3
    },
    {
      id: 3,
      titulo: "1984",
      image: "/img/1984.jpg",
      genero: "Distópico",
      paginas: 328,
      tamaño: "3.1MB",
      descripcion:
        "Un clásico literario que explora una sociedad totalitaria y la vigilancia masiva.",
      precio: 7,
      dias: 3
    },
    {
      id: 4,
      titulo: "Orgullo y Prejuicio",
      image: "/img/Orgullo y Prejuicio.webp",
      genero: "Romántico",
      paginas: 432,
      tamaño: "3.5MB",
      descripcion:
        "Una historia de amor clásica que explora las dinámicas sociales y los prejuicios de la época.",
      precio: 6,
      dias: 3
    },
    {
      id: 5,
      titulo: "Harry Potter y la piedra filosofal",
      image: "/img/potter.webp",
      genero: "Fantasía",
      paginas: 320,
      tamaño: "2.9MB",
      descripcion:
        "El primer capítulo de la saga de Harry Potter, un joven mago que descubre su destino.",
      precio: 10,
      dias: 3
    },
    {
      id: 6,
      titulo: "El Señor de los Anillos",
      image: "/img/anillos.jpg",
      genero: "Fantasía",
      paginas: 1178,
      tamaño: "9.5MB",
      descripcion:
        "Una épica aventura a través de la Tierra Media para destruir el Anillo Único.",
      precio: 12,
      dias: 3
    },
    {
      id: 7,
      titulo: "La Biblia",
      image: "/img/Biblia.webp",
      genero: "Religioso",
      paginas: 1500,
      tamaño: "12MB",
      descripcion:
        "El texto sagrado del cristianismo, una colección de escritos espirituales e históricos.",
      precio: 0,
      dias: 3
    },
    {
      id: 8,
      titulo: "El arte de la guerra",
      image: "/img/arte de la guerra.webp",
      genero: "Estrategia",
      paginas: 150,
      tamaño: "1.2MB",
      descripcion:
        "Un clásico tratado de estrategia militar con enseñanzas aplicables a la vida moderna.",
      precio: 4,
      dias: 3
    },
    {
      id: 9,
      titulo: "El Principito",
      image: "/img/Principito.webp",
      genero: "Fábula",
      paginas: 96,
      tamaño: "0.8MB",
      descripcion:
        "Un conmovedor relato filosófico que explora la inocencia y lecciones de vida.",
      precio: 5,
      dias: 3
    },
    {
      id: 10,
      titulo: "Sapiens: De animales a dioses",
      image: "/img/Sapiens.webp",
      genero: "No ficción",
      paginas: 512,
      tamaño: "4.8MB",
      descripcion:
        "Un análisis de la historia de la humanidad, desde sus orígenes hasta la era moderna.",
      precio: 11,
      dias: 3
    },
    {
      id: 11,
      titulo: "Don Quijote de la Mancha",
      image: "/img/Don Quijote.webp",
      genero: "Clásico",
      paginas: 1056,
      tamaño: "8.5MB",
      descripcion:
        "La historia de un caballero idealista y sus aventuras por restablecer la justicia.",
      precio: 7,
      dias: 3
    },
    {
      id: 12,
      titulo: "La Divina Comedia",
      image: "/img/Divina Comedia.webp",
      genero: "Poético",
      paginas: 798,
      tamaño: "6.2MB",
      descripcion:
        "El viaje alegórico de Dante a través del Infierno, el Purgatorio y el Paraíso.",
      precio: 8,
      dias: 3
    },
    {
      id: 13,
      titulo: "Guerra y Paz",
      image: "/img/guerraPAz.webp",
      genero: "Histórico",
      paginas: 1225,
      tamaño: "9.8MB",
      descripcion:
        "Una epopeya histórica ambientada durante las guerras napoleónicas en Rusia.",
      precio: 10,
      dias: 3
    },
    {
      id: 14,
      titulo: "El Gran Gatsby",
      image: "/img/Gatsby.webp",
      genero: "Narrativa",
      paginas: 218,
      tamaño: "2MB",
      descripcion:
        "Una reflexión sobre la sociedad estadounidense y el sueño americano en los años 20.",
      precio: 6,
      dias: 3
    },
    {
      id: 15,
      titulo: "Moby Dick",
      image: "/img/Moby Dick.webp",
      genero: "Aventura",
      paginas: 635,
      tamaño: "5.4MB",
      descripcion:
        "La historia del capitán Ahab y su obsesión por cazar a la ballena blanca, Moby Dick.",
      precio: 7,
      dias: 3
    },
  ]

const seedEbooks = () => {
  const ebooksRef = collection(db, "Ebook")
  ebooks.map(( { id, ...dataEbook } )=> {
    addDoc(ebooksRef, dataEbook)
  })

  console.log("Ebooks subidos")
  return
}

seedEbooks()