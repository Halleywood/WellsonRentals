import styled from 'styled-components'
import {Description} from '../../globalStyles'


export const ContactContainer = styled.div`
    border: 10px solid #966844;
    text-align: center;
    margin:30px;
`
export const ContactTitle = styled.div`
    background-color:#3f4e4f;
    color:#f6f5f1;
    
    h1{
        font-size: 2.5rem;
        padding-top:2rem;
        font-family: 'tommyblack';
    }
    p{
        font-size: 1.2rem;
        line-height:2rem;
        font-family: 'tommyregular';
    }
    a{
        color:#f6f5f1;
        text-decoration: none;
        font-size: 1.5rem;
        line-height: 2rem;
    }
    `
export const ContactDescription = styled(Description)`
    color: #dcd7c9; 
    background-color:#3f4e4f;
    color:#dcd7c9;
    ${Description}
`