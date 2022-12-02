import styled from "styled-components"


export const RentContainer =styled.div` 
    margin:0 auto;
    margin-top:4rem;
    width:75%;
    justify-content: center;
    background-color: #966844;
    background-size: cover;
    background-position: bottom;
    border-bottom: 4px solid #c2c8c6;
    min-height:70vh;
    display: flex; 
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1{
        font-size:2rem;
        padding:2rem;
        color: #f5f6f1;
    }
    h6{
        padding: 2rem;
        color: #2c3639;
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 1rem;
           
        }
        h6{
            font-size: 0.7rem;
            padding:1rem;
        }
    }

    `