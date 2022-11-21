import styled from 'styled-components';
import { Button } from '../../globalStyles'
import treegradient100 from '../../images/treegradient100.jpg'
import hero5 from '../../images/hero5.jpg'



export const HomeContainer = styled.div`
    display: flex; 
    min-height:85vh;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow-y: hidden;
    background-image:url(${hero5});
    background-position: center center;
    background-size:cover;
    @media screen and (max-width: 600px) {
        margin-top: 0px
    }

    h1{
        margin-top:20px;
        font-size: 1rem;
        padding: 0 30px;
    }

   .buttonBox{
        top:50%;
        @media screen and (max-width: 720px) {
            top:68%;
            display:flex;
            flex-direction: column;
        
        }
        @media screen and (max-width: 468px) {
            top:58%%;
            display:flex;
            flex-direction: column;
        }
   }
    
`
export const HomeFlexBox = styled.div`
    display:flex;
    flex-direction: column;
    max-width:75%;
    `
export const HomeTagLine = styled.div`
    font-size:2.25rem;
    flex:1;
    padding:0.75rem;
    margin: .5rem 0rem;
    text-align: center;
    p{
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }
    @media screen and (max-width: 1100px) {
        text-align: left;
        font-size:1.5rem;
    }
    
`

export const HomeButton = styled(Button)`
    text-align: center;
    font-size: 1rem;
    padding:0.5rem 1rem;
    margin:1rem;
    min-height:4rem;
    align-items: center;
    font-size:1.2rem;
    color:#black;
    background-color: #f5f6f1 ;
    @media screen and (max-width: 920px) {
        font-size:.8rem;
        font-weight: bolder;
    }
    &:hover{
        background-color: #3f4e4f;
        color: #f5f6f1;
    
    }
    ${Button}
  
`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    @media screen and (max-width: 550px) {
        flex-direction: column;
      
    }
   
`