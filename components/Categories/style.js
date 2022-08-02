import style from "styled-components"

export const ContainerMovie = style.div`

max-width: 1280px;
color: #fff;
display:flex;
flex-direction: column;
justify-content: center;
`
export const ContainerImage = style.img`

height: 140px;
width: 220px;
object-fit: center/cover;
border-radius : 5px;
margin-left: 20px;
transition: transform 0.3s;

&:hover {
  transform: scale(1.01);
  border: 2px solid white;
  cursor: pointer
}
`
export const ContainerTitle = style.h3`
font-size:15px;
margin:25px 0px 10px 20px 

`
