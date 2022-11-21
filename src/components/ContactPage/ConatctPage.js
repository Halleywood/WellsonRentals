import {React, forwardRef} from 'react'
import Form from './Form'
import { ContactContainer, ContactTitle, ContactDescription} from './StyledContact'

const ConatctPage = forwardRef((props, ref) => {
  return (
    <ContactContainer ref={ref}>
      <ContactTitle>
        <h1>Get In Touch</h1>
        <ContactDescription><p> Send us an email with your questions or feel free to call us right now at </p><a href="(928) 380-5354">(928) ### - ####</a></ContactDescription>
      </ContactTitle>
      <Form/>
    </ContactContainer>
  )
})

export default ConatctPage