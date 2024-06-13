/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Grégoire
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/gregoirevaillant/">
                    <BsLinkedin />
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/gregoirevaillant/">
                    <BsGithub />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Grégoire</small>
            </div>
        </footer>
    );
};

export default Footer;
