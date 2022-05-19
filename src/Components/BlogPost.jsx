import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBlogPost = styled.div`
    border: 10px solid #101522;
    margin: 40px;
    text-align: center;
    width: 300px;
    overflow: hidden;
    background: #101522;
    border-radius: 15px;

    &:hover {
        background: #1a1522;
        border-color: #1a1522;
        transition: all 0.3s ease;
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