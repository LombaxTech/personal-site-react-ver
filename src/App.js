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
import Test from "./components/Test";

export default function App() {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar />
                <div className="content-wrapper">
                    <Particles className="particles" />
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
