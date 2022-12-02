import styled from "styled-components"
import orangewithtreecamo from '../../images/orangewithtreecamo.jpg'
import { Button } from '../../globalStyles'

export const RentContainer =styled.div`
    background-color: #966844;
    background-image: url(${orangewithtreecamo});
    background-size: cover;
    background-position: bottom;
    border-bottom: 4px solid #c2c8c6;
    min-height:80vh;
    padding:0.2rem;
    display: flex; 
    flex-direction: column;
    align-items: center;
    text-align: center;

    `
export const RentTitle=styled.div`
    margin-top:1rem;
    width:100%;
    font-size:2rem;
    line-height: 2rem;
    padding-bottom:1rem;
    color: #DCD7C9;
    font-weight:bold;
    border-bottom: 2px solid yellowgreen;
    @media screen and (max-width: 900px) {
       font-size:1.8rem;
    }
`
export const RentDisplay = styled.div`
    width:100%;
    display: flex; 
    justify-content: center;
    @media screen and (max-width: 320px) {
        font-size:1rem;
    }
    @media screen and (max-width: 920px) {
        font-size:1.5rem;
        flex-direction:column;
    }

`
export const ShortTerm = styled.div`
    padding:0.5rem 1.5rem;
    flex:1;
    text-align: left;
    p{
       
    }
    ul{
        padding:0.5rem;
    }
    a{
        text-decoration:none;
        color: #f1f5f6;
        font-weight:700;
        &:hover{
            color:yellowgreen;
         }
      
    }

    `

export const LongTerm = styled.div`
    padding: .5rem 4rem 8rem 1.5rem;
    flex:1;
    text-align: left;

    &button{
        margin-top: 2rem;
    }


    `
export const RentButton=styled(Button)`
     min-height:0.8rem;
     margin:0;
    ${Button}
   
`