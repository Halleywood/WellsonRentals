import styled from 'styled-components'
import {Button} from '../../globalStyles'

export const LoginContainer = styled.div`
background-color: #3f4e4f;
height:100vh;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
a{
    color: #f5f6f1;
    text-decoration: none;
    font-size: 1.5rem;

   
}
p{
    display: inline-block;
    margin-left: 0.5rem;
    max-height:100%;
}
.arrow{
    width:2rem;
  
}
`
export const FormContainer = styled.div`
    height:50vh;
    width:90vw;
    display: flex; 
    padding: 1rem;
    box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    border-radius: 2rem;
    text-align: center;
    @media screen and (max-width: 760px) {
        flex-direction: column;
        height:70vh;
        width:80vw;
    }
`

export const FormFlex1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 50%;
    position: relative;
    @media screen and (min-width: 760px) {
        flex:60%;
        
     }
  
    
`
export const FormFlex2 = styled.div`
    flex: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        color: #f5f6f1;
        margin-bottom:0.5rem;
        max-height:100%;
    }
`
export const FormImage=styled.img`
    width:100%;
   
    @media screen and (max-width: 760px) {
        height:80%;
     }
`
export const FormText=styled.div`
    position: absolute;
    bottom: 0; 
    left: 50;
    color: white;
    font-size:2rem;
    @media screen and (min-width: 760px) {
        display: none;
      }
`
export const Form = styled.div`
   display: flex; 
   flex-direction: column; 
   align-items: center;
   input{
    margin: 0.75rem 0rem;
    height: 2.8rem;
    width:100%;
    text-align:left;
    padding-left: 0.5rem;
    border: 2px solid yellowgreen;
    border-radius: 0.5rem; 
    outline: none; 
    background: none;
    color: white;
    font-size: 1.3rem;
    ::placeholder{
        color: white;
        font-size: 1.3rem; 
    }
   }
   @media screen and (max-width: 760px) {
 }
`
export const FormButton=styled(Button)`
    width:100%;
    border-radius: 5px;
    font-size:1.2rem;
    :hover{
        background-color: #3f4e4f;
        color: yellowgreen;
        box-shadow: none;
        border: 2px solid yellowgreen;
        transform: translateY(0);
    }
    ${Button}
`