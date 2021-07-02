import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useField } from "formik";

const StyledInput = styled.input`
   margin: auto;
   display: block;
   width: 100%;
   height: 2.5rem;
   padding-left: 10px;
   padding-right: 10px;
`;

const StyledLabel = styled.label`
   margin: auto;
   display: block;
   width: 100%;
   margin-bottom: 5px;
   font-size: 22px;
`;

const StyledError = styled.label`
   margin: auto;
   display: block;
   width: 100%;
   color: red;
   margin-top: 5px;
`;

const TextInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);

   return (
      <>
         <StyledLabel>{label}</StyledLabel>
         <StyledInput
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
         />
         {meta.touched && meta.error ? (
            <StyledError>{meta.error}</StyledError>
         ) : null}
      </>
   );
};

TextInput.propTypes = {
   label: PropTypes.string,
};

export default TextInput;
