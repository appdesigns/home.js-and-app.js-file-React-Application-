import React from "react";
import "../src/App.css";


import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Aboutpage from "./pages/Aboutpage";
// import SingleSport from "./pages/SingleSport";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';




function App() {
  return (
    <>

    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="sports" component={Sports} />
        <Route path="about-us" component={Aboutpage} />
        {/* <Route exact path="/sports/:slug" component={SingleSport} /> */}
        <Route component={Error} />
        
      </Switch>
    </>
  );
}

export default App;
