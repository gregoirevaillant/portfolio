import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About me" />
                    </div>
                </div>
                <div className="about__content">
                    <p>
                        Hello and welcome to my portfolio! My name is Grégoire,
                        and I am a third year student with a passion for web
                        development. Although I am currently pursuing a degree
                        in Business Administration, I have been teaching myself
                        web development since the end of 2021. I am driven by my
                        desire to create user-friendly, efficient, and visually
                        appealing websites that meet the needs of users. With my
                        dedication to learning and my ability to work both
                        independently and as part of a team, I am confident that
                        I have the skills and drive to succeed as a web
                        developer. Throughout my learning journey, I have honed
                        my skills in HTML, CSS, Javascript, C++ and I am always
                        eager to learn more. I have experience working with
                        HTML, CSS and Javascript, and I am excited to continue
                        expanding my knowledge in these areas.
                        <br />
                        Thank you for taking the time to visit my portfolio, and
                        I look forward to the opportunity to work with you in
                        the future!
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
