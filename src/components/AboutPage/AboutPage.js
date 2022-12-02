import {React, forwardRef} from 'react'
import {AboutContainer, Photos, UsDescription} from './StyledAbout'
import aboutphoto8 from '../../images/aboutphoto8.jpg'


const AboutPage = forwardRef((props, ref) => {


  return (
    <AboutContainer ref={ref}>
      {/* <Photos src={aboutphoto8} alt={"photos display here"}/> */}
      <UsDescription>
        <p> This is a substantial paragraph about us. Why we got into property management, our company goals and words to live by. Why we're who you want to work with </p>
        <p>Cute photos can be slide show next door. Considering adding a title to this page section? </p>
      </UsDescription>
    </AboutContainer>
    )
})

export default AboutPage