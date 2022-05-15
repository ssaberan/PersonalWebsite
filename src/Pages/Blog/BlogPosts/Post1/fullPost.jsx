import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import rawPost from "./rawPost";

const StyledPage = styled.div`
   margin: auto;
   max-width: 60rem;
   padding: 40px 60px;
   background: white;
   border-radius: 20px;

   @media screen and (max-width: 960px) {
      padding: 40px 30px;
   }

   @media screen and (max-width: 425px) {
      padding: 40px 10px;
   }
`;

const StyledTitle = styled.div`
   color: white;
   margin: auto;
   max-width: 60rem;
   padding: 40px 60px;

   @media screen and (max-width: 960px) {
      padding: 40px 30px;
   }

   @media screen and (max-width: 425px) {
      padding: 40px 10px;
   }
`;

const Post1 = () => {
   return (
      <>
         <Helmet>
            <title>Blog Post 1</title>
         </Helmet>
         <StyledTitle>
            <h1>A bizarre way of evaluating infinite series</h1>
            <br />
            <h3>Posted on July 4th, 2021 by Soroush Saberan</h3>
         </StyledTitle>
         <StyledPage>{rawPost()}</StyledPage>
      </>
   );
};

export default Post1;
