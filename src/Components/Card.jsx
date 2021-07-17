import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
   border: 5px solid #101522;
   margin: 50px;
   text-align: center;
   width: 300px;
   overflow: hidden;
   background: #101522;

   &:hover {
      box-shadow: 10px 10px 10px 10px gray;
      margin-top: 45px;
      margin-left: 45px;
      transition: all 0.3s ease;
   }

   @media screen and (max-width: 768px) {
      margin: auto;
      margin: 0px;
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 10px groove gray;

      &:hover {
         box-shadow: none;
         margin: 0px;
      }
   }
`;

const StyledImage = styled.img`
   width: 100%;
`;

const StyledTitle = styled.div`
   margin: auto;
   padding: 5px;
   font-size: 20px;
   width: 100%;
   height: 100%;
   color: white;
`;

const StyledDescription = styled.div`
   margin: auto;
   padding: 5px;
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
