import React, { useState } from "react";
import styled from "styled-components";
import { BsSlash } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledHeader = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 960px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

const StyledLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const StyledChevronBack = styled(IoChevronBack)`
    margin-right: -0.25rem;
`;

const StyledSlash = styled(BsSlash)`
    margin-left: 0.5rem;
    margin-right: -0.75rem;
`;

const StyledChevronForward = styled(IoChevronForward)`
    margin-right: 1rem;
`;

const StyledMobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        color: white;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: ${({ openMobileMenu }) => (openMobileMenu ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ openMobileMenu }) => (openMobileMenu ? 0 : "100%")};
        background: #101522;
    }
`;

const StyledMenuItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 4px solid #4b59f7;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

const StyledMenuItemLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

const menu = (menuItems) => {
    let i = 0;
    return menuItems.map((menuItem) => {
        return (
            <StyledMenuItem key={i++}>
                <StyledMenuItemLink
                    to={`/${menuItem.toLowerCase().replace(" ", "-")}`}
                >
                    {menuItem}
                </StyledMenuItemLink>
            </StyledMenuItem>
        );
    });
};

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleClick = () => setOpenMobileMenu(!openMobileMenu);

    return (
        <>
            <StyledHeader>
                <StyledContainer>
                    <StyledLogo to="/home">
                        <StyledChevronBack />
                        Soroush
                        <StyledSlash />
                        <StyledChevronForward />
                    </StyledLogo>
                    <StyledMobileIcon onClick={handleClick}>
                        {openMobileMenu ? <FaTimes /> : <FaBars />}
                    </StyledMobileIcon>
                    <StyledMenu
                        onClick={handleClick}
                        openMobileMenu={openMobileMenu}
                    >
                        {menu([
                            "Home",
                            "Blog",
                            "Projects",
                            "Resume",
                            "Contact",
                        ])}
                    </StyledMenu>
                </StyledContainer>
            </StyledHeader>
        </>
    );
};

export default Header;
