import { React, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormContainer, StyledForm, TextArea, FormInput, FormErrors, FormButton } from './StyledForm'
import axios from 'axios'

const Form = ({ setMessageSent }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleAllInputs = (e) => {
    // e.preventDefault();

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/wellsonrentals@gmail.com', {
      name: name,
      email: email,
      _subject: subject,
      message: ["phone: " + phone, "subject: " + subject, "message: " + message]
    })
      .then(response => console.log("***", response))
      .catch(error => console.log("%%%%", error));

    setMessageSent(true)

    setName("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
  }

  return (
    <FormContainer>

      <StyledForm onSubmit={handleSubmit(handleAllInputs)} method="POST">
        <input type="hidden" name="_template" value="table" />
        <FormInput type="text" {...register("name", { required: true, minLength: 2, maxLength: 20 })} onChange={(e) => setName(e.target.value)} placeholder="Preferred Name" value={name} />
        <FormErrors>{errors.name && <p>Please enter a valid name</p>}</FormErrors>
        <FormInput type="email" {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} />
        <FormErrors>{errors.email && <p>Please enter a valid email</p>}</FormErrors>
        <FormInput type="phone" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" value={phone} />
        <FormInput type="text" {...register("subject", {required:true, minLength: 4, maxLength: 40})} name="subject" onChange={(e) => setSubject(e.target.value)} placeholder="Subject" value={subject} />
        <FormErrors>{errors.subject && <p>Please enter a valid subject between 4 and 40 characters</p>}</FormErrors>
        <TextArea name="message" {...register("message", {required: true, minLength: 10, maxLength:600})} onChange={(e) => setMessage(e.target.value)} placeholder="Message" value={message} />
        <FormErrors>{errors.message && <p>Please enter a little more information, max length 600 characters</p>}</FormErrors>
        <FormInput type="hidden" name="_subject" value={subject} />
        <FormButton type="submit">Submit</FormButton>
      </StyledForm>

    </FormContainer>

  )
}

export default Form