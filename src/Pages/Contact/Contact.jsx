import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Formik, Form } from "formik";
import { Helmet } from "react-helmet";

import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import TextArea from "../../Components/TextArea";
import { validate, isValid } from "./Validation";
import Sent from "./Sent";
import Error from "./Error";

const StyledForm = styled(Form)`
   display: block;
   text-align: center;
   width: 40%;
   margin: auto;
   padding-top: 2rem;
   padding-bottom: 5rem;
   color: #fff;

   @media screen and (max-width: 768px) {
      width: 60%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
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
            "user_L5iDeh6WPPpM7T9mHslFG"
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

   if (show === "sent") {
      return Sent();
   }

   if (show === "error") {
      return Error();
   }

   return (
      <>
         <Helmet>
            <title>Contact Form</title>
         </Helmet>
         <Formik
            initialValues={{ name: "", subject: "", message: "" }}
            validate={validate}
         >
            {({ values }) => (
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
            )}
         </Formik>
      </>
   );
};

export default Contact;
