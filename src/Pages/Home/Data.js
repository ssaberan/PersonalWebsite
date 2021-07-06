/*
export const sectionData = {
   darkTheme: boolean of whether you want a dark background or not,
   alignment: alignment of the elements within the section. Available options: "left", "center", "right",
   header: "header",
   subheader: "subheader",
   description: "description",
   image: "path/to/image/from/here",
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

export const whoAmIData = {
   darkTheme: false,
   alignment: "left",
   header: "Who Am I?",
   description:
      "Hi! My name is Soroush and I am a fullstack web developer at American Express! I graduated in 2019 from UC San Diego with a bachelors in math, after which I moved to New York City to begin my first job as a software developer at Amex. In addition to the web development I do in a professional setting, I enjoy doing game development and machine learning in my free time.",
   image: "../../../images/coding.svg",
   alt: "Me at my desk writing some code.",
};

export const hobbiesData = {
   darkTheme: true,
   alignment: "right",
   header: "What else do I do?",
   description:
      "My favorite hobby is probably sleeping in, but outside of that I enjoy playing piano, chess, video games, exercising, studying, and watching YouTube videos. I also used to enjoy hiking and longboarding, until I moved to New York City where those hobbies were replaced with exploring the city and going to restaurants.",
   image: "../../../images/walk.svg",
   alt: "Me taking a walk outside.",
};

export const endingData = {
   darkTheme: false,
   alignment: "center",
   subheader: "Feel free to check out the other menu items above",
   description: "If you are hiring, feel free to download my resume below",
   verticalPadding: 60,
   url: "/soroush_saberan_resume.pdf",
   buttonText: "Resume",
};
