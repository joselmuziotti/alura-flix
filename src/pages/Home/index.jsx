import categorias from "../../data/db.json"
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Categories from '../../components/Categories'
import { useState } from "react"

const Home = () => {

  const categorias =[
    {
      "id": "1",
      "nombre": "Front End",
      "descripcion": "Formación de front end de Alura Latam",
      "color": "#ff8800",
      "codigo": "1"
    },
    {
      "id": "2",
      "nombre": "Back End",
      "descripcion": "Formación de back end de Alura Latam",
      "color": "#ff0000",
      "codigo": "2"
    }
  ];

  const videos = [
    {
      "id": "3",
      "titulo": "La magia detrás de Java #aluramás",
      "link_video": "https://www.youtube.com/watch?v=GrEO8nZzyZM",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__3_.webp?updatedAt=1683420408396",
      "categoria": 2,
      "descripcion": "La magia detrás de Java #aluramás",
      "codigo": 12345678
    },
    {
      "id": "4",
      "titulo": "Banco de datos MySQL Contenidos de ONE",
      "link_video": "https://www.youtube.com/watch?v=8J0AoPZMVxA",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__2_.webp?updatedAt=1683420408360",
      "categoria": 2,
      "descripcion": "Banco de datos MySQL Contenidos de ONE",
      "codigo": 12345678
    },
    {
      "id": "5",
      "titulo": "Spring Framework. ¿Qué es ? #AluraMás",
      "link_video": "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__5_.webp?updatedAt=1683420408323",
      "categoria": 2,
      "descripcion": "Spring Framework. ¿Qué es ? #AluraMás",
      "codigo": 12345678
    },
    {
      "id": "6",
      "titulo": "Simplificando tu código en Java: Conoce los enum #AluraMás",
      "link_video": "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__4_.webp?updatedAt=1683420408357",
      "categoria": 2,
      "descripcion": "Simplificando tu código en Java: Conoce los enum #AluraMás",
      "codigo": 12345678
    },
    {
      "id": "7",
      "titulo": "Spring Framework. ¿Qué es ? #AluraMás",
      "link_video": "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__5_.webp?updatedAt=1683420408323",
      "categoria": 2,
      "descripcion": "Spring Framework. ¿Qué es ? #AluraMás",
      "codigo": 12345678
    },
    {
      "id": "9",
      "titulo": "Animando un texto en HTML y CSS #AluraMás",
      "link_video": "https://www.youtube.com/watch?v=j71g5TiMA-M",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__8_.webp?updatedAt=1683420539462",
      "categoria": 1,
      "descripcion": "Animando un texto en HTML y CSS #AluraMás",
      "codigo": 12345678
    },
    {
      "id": "10",
      "titulo": "¿Qué es JavaScript?",
      "link_video": "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__10_.webp?updatedAt=1683420539411",
      "categoria": 1,
      "descripcion": "¿Qué es JavaScript?",
      "codigo": 12345678
    },
    {
      "id": "11",
      "titulo": "Consejos de CSS FlexBox para comenzar #aluramás",
      "link_video": "https://www.youtube.com/watch?v=EB4vWLzfVcI",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__11_.webp?updatedAt=1683420539420",
      "categoria": 1,
      "descripcion": "Consejos de CSS FlexBox para comenzar #aluramás",
      "codigo": 12345678
    },
    {
      "id": "12",
      "titulo": "¿Por qué utilizar React?",
      "link_video": "https://www.youtube.com/watch?v=MnBNPA45NW8",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__9_.webp?updatedAt=1683420539407",
      "categoria": 1,
      "descripcion": "¿Por qué utilizar React?",
      "codigo": 12345678
    },
    {
      "id": "13",
      "titulo": "Box Model y Box sizing #AluraMás",
      "link_video": "https://www.youtube.com/watch?v=ts9qfCKamKg",
      "link_imagen": "https://ik.imagekit.io/noj6wnuqy/AluraFLix/hqdefault__7_.webp?updatedAt=1683420539290",
      "categoria": 1,
      "descripcion": "Box Model y Box sizing #AluraMás",
      "codigo": 12345678
    }
]


  return (<>
    <Header />
    <Banner />
    {
      categorias.map((categoria) => <Categories
        data={categoria}
        key={categoria.id}
        videos={videos}
        />)
    };
    <Footer />
  </>
  )
}

export default Home
