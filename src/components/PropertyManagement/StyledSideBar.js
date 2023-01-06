import styled from 'styled-components'


export const SideBarContainer=styled.div`
    display:flex; 
    min-height:25px;
    @media screen and (max-width: 370px) {
        flex-direction: column;
    }
`
export const SideButton = styled.button`
    width:100%;
    color: #966844;
    font-size:1rem;
    font-family: 'tommyregular';
    background-color: #dcd7c9;
    border: 2px solid #966844;
    padding: 1rem 0.5rem;
  
    @media screen and (max-width: 370px) {
        padding:0.1rem;
        font-size:1.2rem;
    }
    :hover{
        cursor: pointer; 
        background-color: #966844;
        color:white;
    }
  
`