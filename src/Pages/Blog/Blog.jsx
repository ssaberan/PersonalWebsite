import React from "react";
import { Helmet } from "react-helmet";

import BlogPosts from "../../Components/BlogPosts";
import { blogPostData1 } from "./Data";

const Blog = () => {
   return (
      <>
         <Helmet>
            <title>Blog</title>
         </Helmet>
         <BlogPosts blogs={[blogPostData1]} />
      </>
   );
};

export default Blog;
