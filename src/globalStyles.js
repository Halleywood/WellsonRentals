import styled from "styled-components";
import { createGlobalStyle} from "styled-components";
import treewallpaper from './images/treewallpaper.jpg'
import './App.css'


export const Container = styled.div`
    box-sizing: border-box; 
`;

const GlobalStyle = createGlobalStyle`

*{
    font-family: 'tommylight';
    box-sizing: border-box; 
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    body{
        background-color: #dcd7c9;
        background-image: url(${treewallpaper});
        background-size: cover;
    }
}
`

export const Button = styled.button`
text-transform: uppercase;
font-weight: 500;
border: none;
border-radius: 45px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;
text-align: center;
padding:0.5rem 0.8rem;
margin: 0.5rem;
min-height: 1rem;
align-items: center;
font-size:.8rem;
color:#black;
background-color: #f5f6f1;
&:hover{
    background-color: #3f4e4f;
    color: #f5f6f1;
    box-shadow: 0px 15px 20px rgba(46, 300, 157, 0.5);
    color: #fff;
    transform: translateY(-7px);
}
`
export const Description = styled.div`
        padding:1rem;
        font-size:1rem;
        line-height:1.5rem;
        flex:1;
        `
 
export default GlobalStyle;
