import React from "react";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image"></div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
