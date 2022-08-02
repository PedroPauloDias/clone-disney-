import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from "react"
import axios from "axios"
import * as s from "../Categories/style"

export const Categories = () => {




  const [categoriesMovies, setCategoriesMovies] = useState([{}])


  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll:5,

  };


  const api = "http://localhost:3005/data"

  useEffect(() => {
    axios.get(`${api}`)
      .then((response) => {
        setCategoriesMovies(response.data.movies)
      }).catch((error) => {
        console.log(error)
      })
  }, [])


  const categ = "1aba57cf-2149-4ce1-866c-ca2a5d7ab868"


  return (
    

    <s.ContainerMovie >

      <s.ContainerTitle>Recomendado para Você</s.ContainerTitle>
      <Slider {...settings}>
      {
        categoriesMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <s.ContainerImage src={movie.imageCover} alt={movie.title}
              />               
            </div>
          )
        })
      }
    
      </Slider>
      <s.ContainerTitle>Novidades no Disney+</s.ContainerTitle>
      <Slider {...settings}>
      {
        categoriesMovies.map((movie) => {
          return (
            <div key={movie.id}>
                  <s.ContainerImage src={movie.imageCover} alt="" />               
            </div>
          )
        })
      }
    
      </Slider>
      <s.ContainerTitle>Continue Assistindo</s.ContainerTitle>
      <Slider {...settings}>
      {
        categoriesMovies.map((movie) => {
          return (
            <div key={movie.id}>
                  <s.ContainerImage src={movie.imageCover} alt="" />               
            </div>
          )
        })
      }
    
      </Slider>
    </s.ContainerMovie>
    
  )
}

