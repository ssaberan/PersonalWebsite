import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import GlobalStyling from "./GlobalStyling";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";

// blog posts
import Post1 from "./Pages/Blog/BlogPosts/Post1/fullPost";
import Post2 from "./Pages/Blog/BlogPosts/Post2/fullPost";

function App() {
    return (
        <Router>
            <GlobalStyling />
            <ScrollToTop />
            <Header />
            <Switch>
                {/* home page */}
                <Redirect path="/" to="/home" exact component={Home} />

                {/* menu pages */}
                <Route path="/home" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/resume" exact component={Resume} />
                <Route path="/contact" exact component={Contact} />

                {/* blog posts */}
                <Route path="/blog/1" exact component={Post1} />
                <Route path="/blog/2" exact component={Post2} />
            </Switch>
        </Router>
    );
}

export default App;
