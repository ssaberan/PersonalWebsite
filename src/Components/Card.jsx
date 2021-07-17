import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
   border: 10px solid #101522;
   margin: 40px;
   text-align: center;
   width: 300px;
   overflow: hidden;
   background: #101522;
   border-radius: 15px;

   &:hover {
      box-shadow: 10px 10px 10px 10px gray;
      margin-top: 35px;
      margin-left: 35px;
      transition: all 0.3s ease;
   }

   @media screen and (max-width: 480px) {
      margin: auto;
      width: 80%;
      margin-top: 35px;
      padding: 10px;
      border: 5px solid #101522;

      &:hover {
         box-shadow: none;
         margin: auto;
         margin-top: 35px;
      }
   }
`;

const StyledImage = styled.img`
   width: 100%;
`;

const StyledTitle = styled.div`
   margin: auto;
   padding-top: 5px;
   padding-bottom: 5px;
   font-size: 20px;
   width: 100%;
   height: 100%;
   color: white;
`;

const StyledDescription = styled.div`
   margin: auto;
   padding-top: 5px;
   padding-bottom: 5px;
   font-size: 14px;
   width: 100%;
   height: 100%;
   color: white;
`;

const Card = ({ image, title, description, url }) => {
   return (
      <>
         <StyledCard>
            <Link to={url} style={{ textDecoration: "none" }}>
               <StyledImage src={image} />
               <StyledTitle>{title}</StyledTitle>
               <StyledDescription>{description}</StyledDescription>
            </Link>
         </StyledCard>
      </>
   );
};

Card.propTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   url: PropTypes.string,
};

export default Card;
