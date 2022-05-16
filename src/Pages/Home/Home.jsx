import React from "react";
import { Helmet } from "react-helmet";

import Section from "../../Components/Section";
import { welcomeData, whoAmIData, hobbiesData, endingData } from "./Data";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <Section {...welcomeData} />
            <Section {...whoAmIData} />
            <Section {...hobbiesData} />
            <Section {...endingData} />
        </>
    );
};

export default Home;
