import styled from "styled-components";
import { createGlobalStyle} from "styled-components";
import scape3 from './images/scape3.png'


export const Container = styled.div`
    box-sizing: border-box; 
    
`;

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box; 
    padding: 0;
    margin: 0;
    font-size:20px;
    //font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    max-width:100%;
    body{
        background-color: #dcd7c9;
    }


 
}
`

export const Button = styled.button`
    height:2rem;
    // width:6rem;
    // margin:10px;
    border-radius:6px;
`
export const Description = styled.div`
        padding:1rem;
        font-size:1rem;
        line-height:1.5rem;
        flex:1;
        `
 
export default GlobalStyle;
