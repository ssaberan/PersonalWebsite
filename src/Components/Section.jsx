import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";

const StyledContainer = styled.div`
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

const StyledSection = styled.div`
   color: #fff;
   padding: ${({ verticalPadding }) => verticalPadding}px 0px;
   background: ${({ darkTheme }) => (darkTheme ? "#101522" : "#fff")};
`;

const StyledRow = styled.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap: wrap;
   align-items: center;
   text-align: ${({ alignment }) => alignment};
   justify-content: ${({ alignment }) =>
      alignment === "center" ? "center" : ""};
   flex-direction: ${({ alignment }) => {
      switch (alignment) {
         case "left":
            return "row";
         case "right":
            return "row-reverse";
         case "center":
            return "";
      }
   }};

   @media screen and (max-width: 768px) {
      text-align: ${({ alignment }) =>
         alignment === "center" ? "center" : "left"};
   }
`;

const StyledColumn = styled.div`
   margin-bottom: 15px;
   padding-right: 15px;
   padding-left: 15px;
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;
   }
`;

const StyledText = styled.div`
   max-width: 540px;
   padding-top: 0;
   padding-bottom: 60px;

   @media screen and (max-width: 768px) {
      padding-bottom: 65px;
   }
`;

const StyledHeader = styled.div`
   margin-bottom: 8px;
   font-size: ${({ largeFont }) => (largeFont ? "60px" : "48px")};
   color: ${({ darkTheme }) => (darkTheme ? "#F7F8FA" : "#1C2237")};
`;

const StyledSubheader = styled.div`
   color: ${({ darkTheme }) => (darkTheme ? "#A9B3C1" : "#1C2237")};
   font-size: ${({ largeFont }) => (largeFont ? "22px" : "18px")};
   letter-spacing: 1.4px;
   margin-bottom: 24px;
`;

const StyledDescription = styled.div`
   margin-bottom: 35px;
   font-size: 18px;
   color: ${({ darkTheme }) => (darkTheme ? "#A9B3C1" : "#1C2237")};
`;

const StyledImage = styled.img`
   padding-right: 0;
   border: 0;
   max-width: 100%;
   vertical-align: middle;
   display: inline-block;
   max-height: 500px;
`;

const Section = ({
   darkTheme,
   alignment,
   header,
   subheader,
   description,
   image,
   alt,
   url,
   buttonText,
   sameTab,
   verticalPadding,
}) => {
   return (
      <>
         <StyledSection darkTheme={darkTheme} verticalPadding={verticalPadding}>
            <StyledContainer>
               <StyledRow alignment={alignment}>
                  <StyledColumn>
                     <StyledText>
                        <StyledHeader
                           darkTheme={darkTheme}
                           largeFont={!image}
                           tabIndex={header ? 0 : -1}
                        >
                           {header}
                        </StyledHeader>
                        <StyledSubheader
                           darkTheme={darkTheme}
                           largeFont={!image}
                           tabIndex={subheader ? 0 : -1}
                        >
                           {subheader}
                        </StyledSubheader>
                        <StyledDescription
                           darkTheme={darkTheme}
                           largeFont={!image}
                           tabIndex={description ? 0 : -1}
                        >
                           {description}
                        </StyledDescription>
                        {url && (
                           <Button
                              url={url}
                              text={buttonText}
                              sameTab={sameTab}
                              tabIndex={0}
                           />
                        )}
                     </StyledText>
                  </StyledColumn>
                  {image && (
                     <StyledColumn>
                        <StyledImage src={image} alt={alt} tabIndex={0} />
                     </StyledColumn>
                  )}
               </StyledRow>
            </StyledContainer>
         </StyledSection>
      </>
   );
};

Section.propTypes = {
   darkTheme: PropTypes.bool,
   alignment: PropTypes.string,
   header: PropTypes.string,
   subheader: PropTypes.string,
   description: PropTypes.string,
   image: PropTypes.string,
   alt: PropTypes.string,
   url: PropTypes.string,
   buttonText: PropTypes.string,
   sameTab: PropTypes.bool,
   verticalPadding: PropTypes.number,
};

Section.defaultProps = {
   verticalPadding: 120,
   sameTab: false,
};

export default Section;
