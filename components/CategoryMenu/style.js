import styled from "styled-components";

export const Categories = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1280px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

export const CategoryMenu = styled.div`
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoContainer = styled.div`
  background: linear-gradient(to bottom, #2b2b36, #1c2c25);
  border-radius: 1rem;
  border: 0.3rem solid #404048;
  display: block;
  box-shadow: #0f1119 0rem 2rem 2rem -1rem ;
  position: relative;
  transition: all 0.5s;

  &:hover {
    background: none;
    border-color: rgb(235, 235, 235);
    
  }
`;
export const VideoMenu = styled.video`
  width: 100%;
  border-radius: 1rem;
  position: absolute;
`;
