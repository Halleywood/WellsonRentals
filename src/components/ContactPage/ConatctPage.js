import {React, forwardRef, useState} from 'react'
import Form from './Form'
import Thankyou from './Thankyou'
import { ContactContainer, ContactTitle, ContactDescription} from './StyledContact'

const ConatctPage = forwardRef((props, ref) => {

  const [messageSent, setMessageSent] = useState(false)

  return (
    <ContactContainer ref={ref}>
      <ContactTitle>
        <h1>Get In Touch</h1>
        <ContactDescription><p> Send us your questions or feel free to call us right now at </p></ContactDescription>
        <a href="tel:+19283803536">(928) 380-3536</a>
      </ContactTitle>
      {messageSent ? <Thankyou/> : <Form setMessageSent={setMessageSent}/> }
      
  
    </ContactContainer>
  )
})

export default ConatctPage