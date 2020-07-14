import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Particles from "react-particles-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ParticlesComponent from "./components/ParticlesComponent";

export default function App() {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar />
                <div className="content-wrapper">
                    {/* <Home /> */}
                    {/* <Particles className="particles" /> */}
                    <ParticlesComponent />
                    <div className="test-bg"></div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
