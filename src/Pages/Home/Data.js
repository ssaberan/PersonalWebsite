/*
export const sectionData = {
   darkTheme: boolean of whether you want a dark background or not,
   alignment: alignment of the elements within the section. Available options: "left", "center", "right",
   header: "header",
   subheader: "subheader",
   description: "description",
   image: image which must be imported to work in production,
   alt: "description of the image",
   url: "absolute or relative url to page you want button to open on click",
   buttonText: "text to go in the button",
   sameTab: boolean for button link to open in same tab or not,
   verticalPadding: number for top and bottom padding of section
};
*/

export const welcomeData = {
   darkTheme: true,
   alignment: "center",
   header: "Hello",
   subheader: "Welcome to my website",
};

import codingImage from "../../../images/coding.svg";
export const whoAmIData = {
   darkTheme: false,
   alignment: "left",
   header: "Who Am I?",
   description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   image: codingImage,
   alt: "Me at my desk writing some code.",
};

import walkImage from "../../../images/walk.svg";
export const hobbiesData = {
   darkTheme: true,
   alignment: "right",
   header: "What do I do?",
   description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
   image: walkImage,
   alt: "Me taking a walk outside.",
};

export const endingData = {
   darkTheme: false,
   alignment: "center",
   subheader: "Feel free to check out the other menu items above",
   description: "If you are hiring, feel free to download my resume below",
   verticalPadding: 60,
   url: "/resume",
   buttonText: "Resume",
   sameTab: true,
};
