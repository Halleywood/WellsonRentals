import styled from 'styled-components'


export const Nav = styled.div`
    display:flex;
    justify-content: center;
    font-weight: bolder;
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:88vw;
    border-bottom: 6px solid #3f4e4f;
    box-sizing: border-box; 
    margin-top:25px;
    @media screen and (max-width: 600px) {
        justify-content: space-between;
        padding-top:20px;
        margin-top:0;
        border: none;
        border-radius: none;
        width:95vw;
    }
`

export const NavFlexBox1 = styled.div`
    display:flex; 
    flex:1;
    justify-content: space-around; 
    @media screen and (max-width: 600px) {
        display: none
    }

`
export const NavFlexBox2= styled.div`
    display:flex; 
    flex:1;
    justify-content: space-around; 
    @media screen and (max-width: 600px) {
        justify-content: end;
        margin-left:4rem;
    }
`
export const Link = styled.a`
        font-size: 1.4rem;
        padding: 0rem 1rem;
        cursor: pointer;
        line-height:4rem;
        font-family: 'tommyblack';
        @media screen and (max-width: 600px) {
            display: none
        }
        &:hover{
            color: yellowgreen;
        
      
        }
    `

export const NavLogo = styled.img`
    width: 5rem;
    height:5rem;
    padding: 0.2rem;
    @media screen and (max-width: 600px) {
        display: none
    }
    `

export const MobileIcon = styled.img`
        display: none; 
         z-index: 50;
        @media screen and (max-width: 600px){
        display: block;
        height: 2rem;
        cursor: pointer;
        }
    `
export const NavCompanyName=styled.div`
        font-size:2.25rem; 
        font-family: 'tommyregular';
        margin-left:0.5em;
        @media screen and (min-width: 601px){
            display: none;
            }
    
        @media screen and (max-width: 360px){
                font-size: 1.5rem;
        }
`
export const NavMenu = styled.ul`
    display: none;
    z-index: 20;
    color: #3f4e4f;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 100%;
    padding:50px;
    backdrop-filter: blur(20px);
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        opacity: ${({ menu}) => (menu ? 1 : 1)};
        visibility: ${({ menu}) => (menu? 'visible' : 'hidden')};
        transform: translateY(${({ menu}) => (menu ? '0' : '-10px')});
        transition: opacity 0.5s ease;
    }
    
`
export const NavMenuItem = styled.li`
    cursor: pointer;
    list-style: none;
    padding: 20px 2px;
    line-height:2rem;
    position: relative;
    font-size: 1.5rem;
    &:hover{
        border-bottom: 5px solid #c2c8c6;
        color: white;
        width:100%;
    }
`

    ;