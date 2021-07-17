import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Card from "../../Components/Card";
import { blogPostData1 } from "./Data";

const StyledDisplay = styled.div`
   display: inline;
`;

const Blog = () => {
   return (
      <>
         <Helmet>
            <title>Blog</title>
         </Helmet>
         <StyledDisplay>
            <Card {...blogPostData1} />
         </StyledDisplay>
      </>
   );
};

export default Blog;
