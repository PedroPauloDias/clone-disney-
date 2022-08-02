import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from "react"
import axios from "axios"
import * as s from "./style"




export const Destaques = () => {

  const [destPhotos, setDestPhotos] = useState([{}])


  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1

  };


  const api = "http://localhost:3005/data"

  useEffect(() => {
    axios.get(`${api}`)
      .then((response) => {
        setDestPhotos(response.data.banners)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (

    <s.container >
      <Slider {...settings}>
        {
          destPhotos.map((destPhoto) => {
            console.log(destPhoto)
            return (
              <div key={destPhoto.id}>
                <s.containerImg src={destPhoto.imageCover} alt={destPhoto.title} />
              </div>
            )
          })
        }
      </Slider>
    </s.container>
  )
}

