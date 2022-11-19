import React from 'react'
import styled from 'styled-components'
import { Description } from '../../globalStyles'


    export const AboutContainer = styled.div`
        display: flex; 
        background-color: #966844;
        color: #f5f6f1;
        align-items: center;
        text-align: center;
        border-top: 4px solid #c2c8c6;
        border-bottom: 4px solid #c2c8c6;
        p{
            font-size: 1.4rem;
            line-height:2rem;
        }
        @media screen and (max-width: 800px) {
            flex-direction: column-reverse;
            font-size:1rem;
            & p{
                font-size:.8rem;
                padding:0.2rem 0.1rem;
                line-height:1.2rem;
            }
            
        }
    `
    export const Photos = styled.img`
        clip-path: circle(75.2% at 25% 51%);
        flex:1;
        max-width:100%;
        aspect-ratio:1.5/1;
     
        @media screen and (max-width: 800px) {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            max-width:100%;
            max-height:40vh;
        }
    
        `
    export const UsDescription = styled(Description)`
        ${Description}
        line-height:1.25rem;
        flex:1;
     
        `
 


