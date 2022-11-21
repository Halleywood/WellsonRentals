import styled from "styled-components";

export const ScrollButton = styled.button`
position: fixed; 
bottom: 15px; 
right:30px; 
height:50px; 
width:50px; 
z-index: 2;
border-radius: 50%; 
border: 2px solid #dcd7c9;
background-color: #c2c8c6;
display: flex; 
align-items: center; 
justify-content: center; 
font-size: 28px; 
text-decoration: none; 
opacity: ${({toTopButtonVisible}) => (toTopButtonVisible ? '1' : '0')};
transition: all 0.4s; 
bottom: 32px; 
pointer-events: auto; 


`