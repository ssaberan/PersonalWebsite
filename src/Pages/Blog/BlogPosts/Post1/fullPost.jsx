import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const Post1 = () => {
   const [state, setState] = useState({ terms: null });

   useEffect(() => {
      fetch("/src/Pages/Blog/BlogPosts/Post1/markdownPost.md")
         .then((response) => response.text())
         .then((text) => {
            setState({ terms: text });
         });
   }, []);

   return (
      <>
         <ReactMarkdown
            remarkPlugins={[gfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
         >
            {state.terms}
         </ReactMarkdown>
      </>
   );
};

export default Post1;
