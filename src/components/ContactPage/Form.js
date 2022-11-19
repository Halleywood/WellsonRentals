import { ErrorResponse } from '@remix-run/router'
import React from 'react'
import {FormContainer, StyledForm, TextArea, FormInput, FormErrors, FormButton} from './StyledForm'

const Form = () => {
  return (
    <FormContainer>
      <StyledForm>
        <FormInput type="text" name="name" placeholder="Preferred Name"/>
        <FormErrors>Form Errors Here</FormErrors>
        <FormInput type="email" name="email" placeholder="Email"/>
        <FormErrors>Form Errors Here</FormErrors>
        <FormInput type="phone" name="phone" placeholder="Phone Number"/>
        <FormErrors>Form Errors Here</FormErrors>
        <FormInput type="subject" name="subject" placeholder="Subject"/>
        <FormErrors>Form Errors Here</FormErrors>
        <TextArea name="message" placeholder="Message"/>
        <FormErrors>Form Errors Here</FormErrors>
        <FormButton type="submit">Submit</FormButton>
      </StyledForm>
    </FormContainer>

  )
}

export default Form