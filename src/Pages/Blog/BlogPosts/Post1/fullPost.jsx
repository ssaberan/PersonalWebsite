import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import rawPost from "./rawPost";

const StyledPage = styled.div`
   margin: auto;
   width: 60%;
   padding-top: 30px;
   padding-bottom: 50px;
   background: white;

   @media screen and (max-width: 768px) {
      width: 75%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`;

const Post1 = () => {
   return (
      <>
         <Helmet>
            <title>Blog Post 1</title>
         </Helmet>
         <StyledPage>{rawPost()}</StyledPage>
      </>
   );
};

export default Post1;
