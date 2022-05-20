import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BlogPost from "./BlogPost";

const StyledTable = styled.table`
    margin: 2rem auto;
`;

const BlogPosts = ({ blogs }) => {
    let numberOfColumns = 3;
    if (window.screen.width <= 1024) {
        numberOfColumns = 2;
    }
    if (window.screen.width <= 768) {
        numberOfColumns = 1;
    }

    let numberOfRows = Math.ceil(blogs.length / numberOfColumns);

    return (
        <StyledTable>
            {[...Array(numberOfRows).keys()].map(() => {
                return (
                    <tr>
                        {[...Array(numberOfColumns).keys()].map(() => {
                            if (blogs.length !== 0) {
                                let blog = blogs.shift();
                                return (
                                    <td>
                                        <BlogPost {...blog} />
                                    </td>
                                );
                            }
                        })}
                    </tr>
                );
            })}
        </StyledTable>
    );
};

BlogPosts.propTypes = {
    blogs: PropTypes.array,
};

BlogPosts.defaultProps = {
    blogs: [],
};

export default BlogPosts;
