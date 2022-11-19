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
    border: solid 4px #966844;
    box-shadow: 2px 4px;
    margin-bottom:40px;
    background-color: #dcd7c9;
    font-weight: bolder;
    min-width:20%;
    font-size:1.25rem;
    height: 2.5rem;
        `

export const FormErrors = styled.div`
    font-size: 20px;
    color: red;
    width:70%;
    text-align: left;
    display:none;
    `

