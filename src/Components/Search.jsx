import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import Fuse from "fuse.js";

const StyledSearch = styled.input`
    margin: 20px auto;
    width: 50%;
    height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: inline;
    border: none;

    @media screen and (max-width: 960px) {
        width: 80%;
    }
`;

const StyledButton = styled.button`
    border: none;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 20px;
    background-color: #a3ffb7;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: inline;
    cursor: pointer;
`;

const StyledBar = styled.div`
    text-align: center;
`;

const Search = ({ allItems, setResults }) => {
    const options = {
        keys: ["title", "description", "tags"],
    };
    const fuse = new Fuse(allItems, options);

    return (
        <>
            <StyledBar>
                <StyledSearch type="text" placeholder="Search" id="search" />
                <StyledButton
                    type="button"
                    onClick={() => {
                        setResults(
                            fuse
                                .search(document.getElementById("search").value)
                                .map((result) => result.item)
                        );
                    }}
                >
                    <ImSearch />
                </StyledButton>
            </StyledBar>
        </>
    );
};

Search.propTypes = {
    setResults: PropTypes.func,
    allItems: PropTypes.array,
};

export default Search;