import styled from 'styled-components'

export const LoginContainer=styled.div`
    background-color: #3f4e4f;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: right;
    padding: 0.5rem;
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