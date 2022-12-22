import styled from 'styled-components'
import {Button, Container} from '../../globalStyles'


export const FormContainer = styled.div`
    background-color:#3f4e4f;
    color:#dcd7c9;
    ${Container}
`
export const StyledForm = styled.form`
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const FormInput = styled.input`
    padding: 0.5rem;
    margin: 0.75rem;
    width:75%;
    text-align:left;
    padding-left: 0.5rem;
    border: solid 4px #966844;
    `

export const TextArea = styled.textarea`
    height:4rem;
    width:75%;
    margin-top: 0.5rem;
    text-align:left;
    border: solid 4px #966844;
    padding: 0.5rem 0 0 0.5rem;
 `


export const FormButton = styled(Button)`
    font-size:1rem;
    min-height:0.8rem;
    border:2px solid #966844;
    background-color: #966844;
    color: #fff;
    min-width:25%;
    @media screen and (max-width: 480px) {
        font-size:0.7rem;
        
    }
    &:hover{
    background-color: #fff;
    color: black;
    transform: translateY(0px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }
    margin: 2em;

    ${Button}
   
        `

export const FormErrors = styled.div`
    font-size: 1.2rem;
    color: red;
    width:70%;
    text-align: left;
    `

export const ThankyouForm = styled.div`
    background-color:#3f4e4f;
    font-size: 2rem;
    padding-top:2rem;
    color:#dcd7c9;
    height:30vh;
`