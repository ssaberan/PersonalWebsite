import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import Fuse from "fuse.js";

const StyledSearch = styled.input`
    margin-top: 40px;
    width: 50%;
    height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;
    max-width: 500px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin-top: 20px;
    }
`;

const StyledButton = styled.button`
    border: none;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 20px;
    background-color: #00ff84;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    transform: translate(0px, 3px);
`;

const StyledBar = styled.div`
    text-align: center;
`;

const Search = ({ allItems, setResults }) => {
    const options = {
        keys: [
            {
                name: "title",
                weight: 0.4,
            },
            {
                name: "tags",
                weight: 0.4,
            },
            {
                name: "description",
                weight: 0.2,
            },
        ],
    };
    const fuse = new Fuse([...allItems], options);

    return (
        <>
            <StyledBar>
                <StyledSearch
                    type="text"
                    placeholder="Search"
                    id="searchInput"
                    autoComplete="off"
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            document.getElementById("searchButton").click();
                            document.getElementById("searchInput").blur();
                        }
                    }}
                />
                <StyledButton
                    type="button"
                    id="searchButton"
                    onClick={() => {
                        setResults(
                            fuse
                                .search(
                                    document.getElementById("searchInput").value
                                )
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
