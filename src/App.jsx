import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export const App = () => (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        {/* <Contact /> */}
        <Footer />
    </>
);
