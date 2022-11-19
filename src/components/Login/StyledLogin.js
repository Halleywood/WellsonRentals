import styled from 'styled-components'

export const LoginContainer=styled.div`
    background-color: #3f4e4f;
    width:100%;
    height:2rem;
    display:flex;
    align-items: center;
    justify-content: right;
    padding-right: 0.5rem;
    line-height:1.5rem;
    @media screen and (max-width: 450px) {
        line-height:1rem;
        height:1.5rem;
        & a {
            font-size:0.7rem;
        }
    }
`

export const LoginLinks=styled.div`
    align-items: center;
   a{
    font-size: 1rem;
    text-decoration: none;
    color: white;
    padding-left: 0.2rem;
   }

`