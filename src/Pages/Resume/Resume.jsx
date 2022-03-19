import React from "react";
import { Helmet } from "react-helmet";
import { useAsync } from "react-async";
import styled from "styled-components";
import { Bars } from "react-loading-icons";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

import { fetchResume } from "../../Utilities/FetchResume";
import profileImage from "../../../images/profile.svg";

const StyledResume = styled.div`
   margin: auto;
   width: 60%;
   max-width: 60rem;
   background: white;
   padding: 40px 60px;
   border-radius: 15px;
   margin-top: 20px;

   @media screen and (max-width: 960px) {
      width: 75%;
      padding: 10px;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
      padding: 5px;
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
`;

const StyledImage = styled.img`
   margin: 30px;
   cursor: pointer;
   max-width: 200px;
`;

const AboveResumeContainer = styled.div`
   margin: auto;
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;

   @media screen and (max-width: 960px) {
      width: 75%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`;

const StyledLinkedIn = styled(GrLinkedin)`
   font-size: 5rem;
   margin: 20px;
   cursor: pointer;
`;

const StyledGitHub = styled(GrGithub)`
   font-size: 5rem;
   margin: 20px;
   cursor: pointer;
`;

const StyledLogos = styled.div`
   flex-wrap: nowrap;
`;

const linkedInOnClick = () => {
   window.open("https://www.linkedin.com/in/ssaberan/", "_blank").focus();
};

const gitHubOnClick = () => {
   window.open("https://github.com/ssaberan", "_blank").focus();
};

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
            <AboveResumeContainer>
               <StyledImage src={profileImage} />
               <StyledLogos>
                  <StyledLinkedIn onClick={linkedInOnClick} />
                  <StyledGitHub onClick={gitHubOnClick} />
               </StyledLogos>
            </AboveResumeContainer>
            {data?.resume ? (
               <StyledResume
                  dangerouslySetInnerHTML={{ __html: data?.resume }}
                  tabIndex={0}
               />
            ) : (
               <Center>
                  <Bars />
               </Center>
            )}
         </Background>
      </>
   );
};

export default Resume;
