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

const Background = styled.div`
   background: #101522;
   background-image: linear-gradient(#101522, #164d69);
   top: 0;
   bottom: 0;
   margin: auto;
`;

const Post1 = () => {
   return (
      <>
         <Helmet>
            <title>Blog Post 1</title>
         </Helmet>
         <Background>
            <StyledPage>{rawPost()}</StyledPage>
         </Background>
      </>
   );
};

export default Post1;
