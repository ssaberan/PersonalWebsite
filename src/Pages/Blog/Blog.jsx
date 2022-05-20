import React, { useState } from "react";
import { Helmet } from "react-helmet";

import BlogPosts from "../../Components/BlogPosts";
import Search from "../../Components/Search";
import { blogPostData1 } from "./Data";

const Blog = () => {
    const allBlogs = [blogPostData1, blogPostData1, blogPostData1];
    const [results, setResults] = useState(allBlogs);

    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Search allItems={allBlogs} setResults={setResults} />
            <BlogPosts blogs={results} />
        </>
    );
};

export default Blog;
