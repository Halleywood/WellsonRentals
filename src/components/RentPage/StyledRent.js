import styled from "styled-components"
import orangewithtreecamo from '../../images/orangewithtreecamo.jpg'

export const RentContainer =styled.div`
    background-color: #966844;
    background-image: url(${orangewithtreecamo});
    background-size: cover;
    background-position: bottom;
    border-bottom: 4px solid #c2c8c6;
    min-height:70vh;
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
    @media screen and (max-width: 900px) {
        flex-direction:column;
    }
`
export const ShortTerm = styled.div`
    padding:0.5rem 1.5rem;
    flex:1;
    text-align: left;
    p{
        font-size:1.5rem;
        font-weight:bold;
       
    }
    ul{
        padding:0.5rem;
    }
    a{
        text-decoration:none;
        color: #ffff;
        font-size:1.5rem;
      
    }
    @media screen and (max-width: 900px) {
        p{
            font-size:1rem;
        }
        a{
          font-size: 1rem;
        }
     }
  
    `

export const LongTerm = styled.div`
    padding: 0.5rem 1.5rem;
    flex:1;
    text-align: left;
    & p{
        font-size:1.5rem;
        font-weight: bold;
    }
    & button{
        margin-top:2rem;
        text-align: center;
        font-size: 1rem;
        padding:0.5rem;
        height:3.25rem;
        width:60%;
        border: solid 3px #3f4e4f;
        align-items: center;
        font-size:1.5rem;
        color:#black;
        background-color: #f5f6f1 ;
    }
    @media screen and (max-width: 720px) {
        p{
            font-size:1rem;
        }
        button{
          font-size: 1rem;
          margin-top: 0.5rem;
        }
     }

    `
