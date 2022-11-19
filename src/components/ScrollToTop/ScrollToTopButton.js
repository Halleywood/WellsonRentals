import React, { useState, useEffect } from 'react'
import { ScrollButton } from './StyledScroll'
import uparrow from '../../images/uparrow.png'

const ScrollToTopButton = () => {

    const [toTopButtonVisible, setToTopButtonVisible] = useState(false)

    const changeVisibility = () => {
        if (window.scrollY > 100) {
            setToTopButtonVisible(true)
        }
        else {
            setToTopButtonVisible(false)
        }
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", changeVisibility)

        return () => {
            window.removeEventListener("scroll", changeVisibility)
        }
    }, [])

    
    return (
        <ScrollButton onClick={scrollUp} toTopButtonVisible={toTopButtonVisible}><img src={uparrow} alt="arrow up icon"/></ScrollButton>
    )
}

export default ScrollToTopButton