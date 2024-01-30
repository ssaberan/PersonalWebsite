import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import page1 from "../../../../../documents/blog_2/page1.jpg";
import page2 from "../../../../../documents/blog_2/page2.jpg";
import page3 from "../../../../../documents/blog_2/page3.jpg";
import page4 from "../../../../../documents/blog_2/page4.jpg";
import page5 from "../../../../../documents/blog_2/page5.jpg";

const StyledPage = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 20px;
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

const StyledTitle = styled.div`
    color: white;
    margin: auto;
    max-width: 60rem;
    padding: 40px 60px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`;

const Post2 = () => {
    return (
        <>
            <Helmet>
                <title>Blog Post 2</title>
            </Helmet>
            <StyledTitle>
                <h1>
                    Game Theory Meets Machine Learning: Interpreting Models with
                    Shapley Values
                </h1>
                <br />
                <h3>Posted on January 29th, 2024 by Soroush Saberan</h3>
            </StyledTitle>
            <StyledPage src={page1} title="Page 1" tabIndex={0} />
            <StyledPage src={page2} title="Page 2" tabIndex={0} />
            <StyledPage src={page3} title="Page 3" tabIndex={0} />
            <StyledPage src={page4} title="Page 4" tabIndex={0} />
            <StyledPage src={page5} title="Page 5" tabIndex={0} />
        </>
    );
};

export default Post2;
