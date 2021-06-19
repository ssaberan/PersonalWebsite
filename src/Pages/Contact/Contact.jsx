import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Formik, Form } from "formik";

import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import TextArea from "../../Components/TextArea";

const StyledForm = styled(Form)`
   display: block;
   text-align: center;
   width: 60%;
   margin: auto;
   margin-top: 5rem;
   margin-bottom: 5rem;

   @media screen and (max-width: 768px) {
      width: 90%;
   }
`;

const StyledFormWrapper = styled.div`
   background: #101522;
   color: #fff;
   width: 60%;
   margin: auto;
   display: block;

   @media screen and (max-width: 768px) {
      width: 90%;
   }
`;

const StyledInputWrapper = styled.div`
   margin: 50px 0px;
`;

const Contact = () => {
   const sendEmail = (e) => {
      e.preventDefault();

      // emailjs
      //    .sendForm(
      //       "service_wuk7fha",
      //       "template_iwcxr0f",
      //       e.target,
      //       "user_L5iDeh6WPPpM7T9mHslFG"
      //    )
      //    .then(
      //       (result) => {
      //          console.log(result.text);
      //       },
      //       (error) => {
      //          console.log(error.text);
      //       }
      //    );
      console.log("******");
   };

   const validate = (values) => {
      const errors = {};
      if (!values.name) {
         errors.name = "A name is required to submit";
      }
      if (!values.subject) {
         errors.subject = "A subject is required to submit";
      }
      if (!values.message) {
         errors.message = "A message is required to submit";
      }
      return errors;
   };

   return (
      <>
         <Formik
            initialValues={{ name: "", subject: "", message: "" }}
            validate={validate}
         >
            {({ values }) => (
               <StyledFormWrapper>
                  <StyledForm onSubmit={sendEmail}>
                     <h1>Email Contact Form</h1>
                     <StyledInputWrapper>
                        <TextInput name="name" label="Name" />
                     </StyledInputWrapper>
                     <StyledInputWrapper>
                        <TextInput name="subject" label="Subject" />
                     </StyledInputWrapper>
                     <StyledInputWrapper>
                        <TextArea name="message" label="Message" />
                     </StyledInputWrapper>
                     <Button
                        type="submit"
                        text="Send"
                        disabled={
                           !(values.name && values.subject && values.message)
                        }
                     />
                  </StyledForm>
               </StyledFormWrapper>
            )}
         </Formik>
      </>
   );
};

export default Contact;
