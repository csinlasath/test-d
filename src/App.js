import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/notFoundPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
           <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFoundPage} />       
           </Switch>
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
