import React from "react";
import { Helmet } from "react-helmet";

import Section from "../../Components/Section";
import { blogPostData1 } from "./Data";

const Blog = () => {
   return (
      <>
         <Helmet>
            <title>Blog</title>
         </Helmet>
         <Section {...blogPostData1} />
      </>
   );
};

export default Blog;
