import styled from 'styled-components'

export const LoginContainer=styled.div`
    background-color: #3f4e4f;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    @media screen and (max-width: 600px){
        justify-content: right;
    }

`
export const LoginLogo = styled.div`
    color: white;
    font-size: 1.85rem;
    margin-left: 0.5rem;
    @media screen and (max-width: 600px){
        display: none;
    }
`

export const LoginLinks=styled.div`
    align-items: center;
   a{
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
   }
   @media screen and (max-width: 430px) {
    & a {
        font-size:0.9rem;
    }
}

`