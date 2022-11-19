import styled from 'styled-components'


export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    background-color: #3f4e4f;
    text-align: center;
    border-bottom: 4px solid #c2c8c6;

`
export const ServiceTitle = styled.h1`
    color: #dcd7c9; 
    font-weight: bolder; 
    font-size: 2rem;
    padding-bottom:1rem;
    flex:1;
    margin: 1rem 0rem;
    border-bottom: 2px solid yellowgreen;
    @media screen and (min-width: 520px){
        font-size:2rem;
    }
`
export const CardDisplay = styled.div`
    color: #f5f6f1;
    font-size:2.5rem;
    text-align: left;
    `
export const Cards = styled.div`
    display: grid;
    gap: 2rem;
    margin:2rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @media screen and (max-width: 900px) and (min-width: 420px){
        margin: 1rem;
    }
    
`
export const Card = styled.div`
    border-radius: 20px;
    height:100%;
    box-shadow: 0 0 30px rgba(0,0,0,0.18);
    background-color: #070d0d;
    position: relative
`
export const HoverCard = styled.div` 
    height:100%; 
    width: 100%; 
    position: absolute; 
    top: 0; 
    left: 0; 
    z-index: 1;
    background-color:#2c3639; 
    background: rgba(0,0,0,0.7);
    opacity: 0;
    transition: opacity 0.3s;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding:2rem 0rem;
    text-align: center;
    h2{
        font-size:2rem;
        color: yellowgreen;
    }
    p{
        line-height:1.5rem;

    }
    button{
 
        width:60%;
        border-radius: 20px;
        background-color: #3f4e4f;
        color: yellowgreen;
        border: 2px solid yellowgreen;
        height:15%;
        font-size:1.25rem;
    }
    &:hover{
        opacity:1;
     }
     @media screen and (max-width:600px){
        padding: 1rem 0.5rem;
        p{
            font-size:0.7rem;
          
        };
    }
`
export const CardContainer = styled.div`
;
    clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 95%);
        &:hover{
           
        }
 `
export const CardImg = styled.img`
    width:100%;
    aspect-ratio: 1/1; 
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    border:2px solid black;
    align-items: left;
        
    `
export const CardDetails = styled.div`
    background-color: #070d0d;
    padding: 0 1rem;
    h3{
        font-size:1.2rem;
        padding-bottom: 1rem;
        color:#dcd7c9;
    }

`
