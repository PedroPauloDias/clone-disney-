import styled from "styled-components"

export const container = styled.div`
height: 95px;
width: 1345px ;
display: flex ;
justify-content: left ;
align-items: center ;
padding: 20px;
background: linear-gradient(to bottom , #2b2b36, #1c2c25);
margin: 0 auto;




ul {
  display: flex;
  align-items: center ;
  justify-content: center ;
  gap: 25px;
  margin-left:30px;
}

li{
list-style: none;
color: #fff;
transition: .3s;

&:hover{
  cursor: pointer;
  transform: scale(1.05);


}
}

`
export const navbar = styled.div`
width:100% ;
display: flex;
align-items : center ;
justify-content : space-between ;

`
export const userContainer = styled.div`
display: flex ;
align-items : center;
justify-content : flex-end;
gap: 15px;
color : #fff;

&:hover{
  cursor: pointer;
  transform: scale(1.05);


}


`

