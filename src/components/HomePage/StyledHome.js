import styled from 'styled-components';
import { Button } from '../../globalStyles'
import hero5semifaded from '../../images/hero5semifaded.jpg'
import hero9 from '../../images/hero9.jpg'



export const HomeContainer = styled.div`
    display: flex; 
    min-height:70vh;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow-y: hidden;
    background-image:url(${hero9});
    background-position: center center;
    background-size:cover;
    @media screen and (max-width: 600px) {
        margin-top: 0px
    }

    h1{
        margin-top:20px;
        font-size: 1rem;
        padding: 0 10px;
    }

   .buttonBox{
        top:50%;
        @media screen and (max-width: 720px) {
            top:68%;
            display:flex;
            flex-direction: column;
        
        }
        @media screen and (max-width: 468px) {
            top:50%;
            display:flex;
            flex-direction: column;
        }
   }
    
`
export const HomeFlexBox = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0px 10px 100px 10px;
    backdrop-filter: blur(1.2px);
   
    `
export const HomeTagLine = styled.div`
    font-size:2.25rem;
    flex:1;
    padding:0.8rem;
    margin: .5rem 0rem;
    text-align: center;
    p{
        font-size: 1rem;
        margin-top: 1rem;
 
    }
    @media screen and (max-width: 1100px) {
        text-align: left;
        font-size:1.5rem;
    }
    
`

export const HomeButton = styled(Button)`
    ${Button}
  
`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:left;
    min-width:100%;    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
   
`