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
                        My name is <b>Grégoire</b>, and I'm currently a
                        first-year MSc Pro student at EPITECH. Originally from a Business
                        Administration background at EM Lyon Business School, I began teaching myself to
                        code in 2022. Over the past few years, I've built a solid
                        foundation in web technologies, including HTML, CSS,
                        JavaScript. Through consistent self-learning,
                        practical projects, and collaborative work, I've gained
                        hands-on experience that goes far beyond the basics. I build
                        user-friendly, efficient, and visually appealing
                        websites with a strong focus on usability and clean
                        design. I'm always looking to grow, whether by exploring
                        new technologies or improving existing skills. I take
                        pride in being both a reliable team player and a
                        self-sufficient developer, and I'm excited about the
                        challenges and opportunities ahead. 
                        <br/>
                        Thank you for visiting my portfolio.
                    </p>
                    <a href="mailto:vaillant.g@outlook.com" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
