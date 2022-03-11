import React from "react";
import { Helmet } from "react-helmet";
import { useAsync } from "react-async";
import styled from "styled-components";

import { fetchResume } from "../../Utilities/FetchResume";

const StyledResume = styled.div`
   margin: auto;
   width: 60%;
   max-width: 60rem;
   background: white;
   padding: 40px;
   border-radius: 15px;

   @media screen and (max-width: 960px) {
      width: 75%;
      padding: 0px;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`;

const Center = styled.div`
   text-align: center;
   padding-top: 30px;
   font-size: 24px;
`;

const Background = styled.div`
   background: #101522;
   color: #fff;
   width: 100%;
   margin: auto;
   display: block;
   background-image: linear-gradient(#101522, #164d69);
   top: 0;
   bottom: 0;
   padding-top: 40px;
   padding-bottom: 40px;

   @media screen and (max-width: 768px) {
      background-image: None;
      background: None;
      color: None;
   }
`;

const Resume = () => {
   const { data } = useAsync({
      promiseFn: fetchResume,
   });
   return (
      <>
         <Helmet>
            <title>Resume</title>
         </Helmet>
         <Background>
            {data?.resume ? (
               <StyledResume
                  dangerouslySetInnerHTML={{ __html: data?.resume }}
                  tabIndex={0}
               />
            ) : (
               <Center>loading...</Center>
            )}
         </Background>
      </>
   );
};

export default Resume;
