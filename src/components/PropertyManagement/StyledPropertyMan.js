import styled from 'styled-components'

export const PropertyContainer = styled.div`
height: 100vh;
background-color: #dcd7c9;
text-align: center;
display: flex;
flex-direction: column;

`
export const Title=styled.div`
    font-family: 'tommyregular';
    font-size:4rem;
    color: #966844;
    padding:1rem;
    @media screen and (max-width: 1000px) {
        font-size:3rem;
    }
    @media screen and (max-width: 700px) {
        font-size:2.0rem;
    }
    
`
export const SideBar=styled.div`
    border-right: 4px solid #966844;
`