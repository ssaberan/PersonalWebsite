import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBlogPost = styled.div`
    border: 10px solid #00141e;
    margin: 40px;
    text-align: center;
    width: 300px;
    overflow: hidden;
    background: #00141e;
    border-radius: 15px;

    @media screen and (max-width: 1440px) {
        margin: 20px;
    }

    @media screen and (max-width: 768px) {
        margin: 0px;
        margin-bottom: 20px;
    }

    &:hover {
        background: #001428;
        border-color: #001428;
        transition: all 0.4s ease;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledTitle = styled.div`
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 20px;
    width: 100%;
    height: 100%;
    color: white;
`;

const StyledDescription = styled.div`
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    width: 100%;
    height: 100%;
    color: white;
`;

const BlogPost = ({ image, title, description, url }) => {
    return (
        <>
            <StyledBlogPost>
                <Link to={url} style={{ textDecoration: "none" }}>
                    <StyledImage src={image} />
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDescription>{description}</StyledDescription>
                </Link>
            </StyledBlogPost>
        </>
    );
};

BlogPost.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
};

export default BlogPost;
