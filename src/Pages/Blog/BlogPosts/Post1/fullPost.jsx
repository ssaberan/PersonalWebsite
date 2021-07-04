import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

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
         <ReactMarkdown>{state.terms}</ReactMarkdown>
      </>
   );
};

export default Post1;
