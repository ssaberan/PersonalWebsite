import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useAsync } from "react-async";
import styled from "styled-components";
import { Bars } from "react-loading-icons";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";

import { fetchResume } from "../../Utilities/FetchResume";
import profileImage from "../../../images/profile.svg";

const StyledResume = styled.div`
    margin: auto;
    width: 60%;
    max-width: 60rem;
    background: white;
    padding: 40px 60px;
    border-radius: 15px;
    margin-top: 20px;

    @media screen and (max-width: 960px) {
        width: 75%;
        padding: 10px;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
        padding: 5px;
    }
`;

const Center = styled.div`
    text-align: center;
    padding-top: 30px;
    font-size: 24px;
`;

const Background = styled.div`
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const StyledImage = styled.img`
    margin: 20px;
    max-width: 250px;
    transform: scale(${(props) => props.scale}, ${(props) => props.scale});
    cursor: pointer;
`;

const AboveResumeContainer = styled.div`
    margin: auto;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 960px) {
        width: 75%;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
    }
`;

const StyledLinkedIn = styled(GrLinkedin)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`;

const StyledGitHub = styled(GrGithub)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`;

const StyledDownload = styled(FaFileDownload)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`;

const StyledLogos = styled.div`
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const linkedInOnClick = () => {
    window.open("https://www.linkedin.com/in/ssaberan/", "_blank").focus();
};

const gitHubOnClick = () => {
    window.open("https://github.com/ssaberan", "_blank").focus();
};

const downloadOnClick = () => {
    window.open("https://ss-personal-api.herokuapp.com/api/pdfResume");
};

const ProfileImage = () => {
    const [scale, setScale] = useState("1");

    return (
        <StyledImage
            src={profileImage}
            scale={scale}
            onClick={() => {
                setScale("0.98");
                setTimeout(() => {
                    setScale("1");
                }, 100);
            }}
        />
    );
};

const Resume = () => {
    const { data } = useAsync({
        promiseFn: fetchResume,
    });
    return (
        <>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <Background>
                <AboveResumeContainer>
                    <ProfileImage />
                    <StyledLogos>
                        <StyledLinkedIn
                            onClick={linkedInOnClick}
                            title="Open my LinkedIn page in a new tab"
                        />
                        <StyledGitHub
                            onClick={gitHubOnClick}
                            title="Open my Github page in a new tab"
                        />
                        <StyledDownload
                            onClick={downloadOnClick}
                            title="Download my resume"
                        />
                    </StyledLogos>
                </AboveResumeContainer>
                {data?.resume ? (
                    <StyledResume
                        dangerouslySetInnerHTML={{ __html: data?.resume }}
                        tabIndex={0}
                    />
                ) : (
                    <Center>
                        <Bars />
                    </Center>
                )}
            </Background>
        </>
    );
};

export default Resume;
