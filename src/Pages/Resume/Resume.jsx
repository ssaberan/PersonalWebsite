import React from "react";
import { Helmet } from "react-helmet";
import { useAsync } from "react-async";
import styled from "styled-components";

import { fetchResume } from "../../Utilities/FetchResume";

const StyledResume = styled.div`
   margin: auto;
   width: 60%;
   max-width: 60rem;
   padding-top: 30px;
   padding-bottom: 50px;
   background: white;

   @media screen and (max-width: 960px) {
      width: 75%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
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
         <StyledResume
            dangerouslySetInnerHTML={{ __html: data?.resume }}
            tabIndex={0}
         />
      </>
   );
};

export default Resume;
