import React from "react";
import {
   BrowserRouter as Router,
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

function App() {
   return (
      <Router>
         <GlobalStyling />
         <ScrollToTop /> {/* TODO: Make this work */}
         <Header />
         <Switch>
            <Redirect path="/" to="/home" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
         </Switch>
      </Router>
   );
}

export default App;
