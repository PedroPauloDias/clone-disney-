import React from 'react'
import Image from "next/image"
import * as s from "./style"

export const CategoryMenu = () => {
  return (
      <s.Categories>     
    <s.Container>      
        <s.CategoryMenu>     
          
        <s.VideoMenu src="./categories/category-disney.mp4" autoPlay loop muted></s.VideoMenu>
          
      <s.LogoContainer>
        <Image src="/categories/disney.png" height="150" width="280" alt=" logo disney" />
      </s.LogoContainer>          
        </s.CategoryMenu>
        
        <s.CategoryMenu>
      <s.VideoMenu src="./categories/category-pixar.mp4"autoPlay loop muted ></s.VideoMenu>
      <s.LogoContainer>
          <Image src="/categories/pixar.png" height="150" width="280" alt=" logo pixar" />
        </s.LogoContainer>
        </s.CategoryMenu>

        <s.CategoryMenu>
      <s.VideoMenu src="./categories/category-marvel.mp4" autoPlay loop muted></s.VideoMenu>
      <s.LogoContainer>
          <Image src="/categories/marvel.png" height="150" width="280" alt=" logo marvel" />
        </s.LogoContainer>
        </s.CategoryMenu>

        
        <s.CategoryMenu>
      <s.VideoMenu src="./categories/category-star-wars.mp4"autoPlay loop muted ></s.VideoMenu>
      <s.LogoContainer>
          <Image src="/categories/star-wars.png" height="150"width="280" alt=" logo star-wars" />
        </s.LogoContainer>
        </s.CategoryMenu>

        
        <s.CategoryMenu>
      <s.VideoMenu src="./categories/category-national-geographic.mp4" autoPlay loop muted></s.VideoMenu>
      <s.LogoContainer>
          <Image src="/categories/national-geographic.png" height="150" width="280" alt=" logo national-geographic" />
        </s.LogoContainer>
        </s.CategoryMenu>
    </s.Container>
        </s.Categories>

  )
}
