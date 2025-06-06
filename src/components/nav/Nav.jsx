/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineBook,
    AiOutlineProject,
} from "react-icons/ai";

import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}>
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}>
                <AiOutlineBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}>
                <AiOutlineProject />
            </a>
        </nav>
    );
};

export default Nav;
