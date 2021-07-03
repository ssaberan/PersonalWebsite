import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Formik, Form } from "formik";

import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import TextArea from "../../Components/TextArea";
import { validate, isValid } from "./Validation";

const StyledForm = styled(Form)`
   display: block;
   text-align: center;
   width: 40%;
   margin: auto;
   padding-top: 2rem;
   padding-bottom: 5rem;

   @media screen and (max-width: 768px) {
      width: 60%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`;

const StyledFormWrapper = styled.div`
   background: #101522;
   color: #fff;
   width: 100%;
   margin: auto;
   display: block;
   background-image: linear-gradient(#164d69, #101522);
   top: 0;
   bottom: 0;
`;

const StyledInputWrapper = styled.div`
   margin: 50px 0px;
`;

const Contact = () => {
   const [show, setShow] = useState("form");

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_wuk7fha",
            "template_iwcxr0f",
            e.target,
            "user_L5iDeh6WPPpM7T9mHslFG" // ok to expose. can only be used to send emails to me
         )
         .then(
            (result) => {
               console.log(result.text);
               setShow("sent");
            },
            (error) => {
               console.log(error.text);
               setShow("error");
            }
         );
   };

   const form = (
      <>
         <Formik
            initialValues={{ name: "", subject: "", message: "" }}
            validate={validate}
         >
            {({ values }) => (
               <StyledFormWrapper>
                  <StyledForm onSubmit={sendEmail} autoComplete="off">
                     <h1>Contact Form</h1>
                     <h3>Send an email to Soroush</h3>
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
                        disabled={!isValid(values)}
                     />
                  </StyledForm>
               </StyledFormWrapper>
            )}
         </Formik>
      </>
   );

   const sent = (
      <>
         <h1>Sent!</h1>
      </>
   );

   const error = (
      <>
         <h1>Error!</h1>
      </>
   );

   if (show === "sent") {
      return sent;
   }

   if (show === "error") {
      return error;
   }

   return form;
};

export default Contact;
