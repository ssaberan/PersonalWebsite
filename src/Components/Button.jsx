import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   border: none;
   outline: none;
   border-radius: 4px;
   background: ${({ disabled }) => (disabled ? "#c9c9c9" : "#4b59f7")};
   white-space: nowrap;
   padding: 12px 64px;
   color: ${({ disabled }) => (disabled ? "#474747" : "#fff")};
   font-size: 20px;
   cursor: ${({ disabled }) => (disabled ? "" : "pointer")};

   &:hover {
      transition: all 0.3s east-out;
      background: ${({ disabled }) => (disabled ? "#c9c9c9" : "#0467fb")};
   }

   @media screen and (max-width: 768px) {
      height: 4rem;
   }
`;

const Button = ({ url, text, type, disabled, sameTab }) => {
   const onClick = () => {
      if (sameTab) {
         window.open(url, "_self");
      } else {
         window.open(url);
      }
   };

   return (
      <StyledButton
         type={type}
         onClick={url ? onClick : undefined}
         disabled={disabled}
      >
         {text}
      </StyledButton>
   );
};

Button.propTypes = {
   text: PropTypes.string,
   type: PropTypes.string,
   url: PropTypes.string,
   disabled: PropTypes.bool,
   sameTab: PropTypes.bool,
};

Button.defaultProps = {
   type: "button",
   sameTab: false,
};

export default Button;
