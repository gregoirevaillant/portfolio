import React from "react";
import "./portfolio.css";
import IMG0 from "../../assets/ordersystem.png";
import IMG1 from "../../assets/tictactoe.png";
import IMG3 from "../../assets/interactivemap.png";
import IMG4 from "../../assets/library.png";
import IMG5 from "../../assets/calculator.png";
import IMG6 from "../../assets/rockpaperscissors.png";

const projects = [
    {
        id: 0,
        image: IMG0,
        title: "Food truck order system",
        github: "https://github.com/gregoirevaillant/tthan",
        live: "https://gregoirevaillant.github.io/tthan/",
    },
    {
        id: 1,
        image: IMG1,
        title: "Tic Tac Toe",
        github: "https://github.com/gregoirevaillant/tic-tac-toe",
        live: "https://gregoirevaillant.github.io/tic-tac-toe/",
    },
    {
        id: 3,
        image: IMG3,
        title: "Interactive Map",
        github: "https://github.com/gregoirevaillant/interactive-map",
        live: "https://gregoirevaillant.github.io/interactive-map/",
    },
    {
        id: 4,
        image: IMG4,
        title: "Library",
        github: "https://github.com/gregoirevaillant/library",
        live: "https://gregoirevaillant.github.io/library/",
    },
    {
        id: 5,
        image: IMG5,
        title: "Calculator",
        github: "https://github.com/gregoirevaillant/calculator",
        live: "https://gregoirevaillant.github.io/calculator/",
    },
    {
        id: 6,
        image: IMG6,
        title: "Rock Paper Scissors",
        github: "https://github.com/gregoirevaillant/rock-paper-scissors",
        live: "https://gregoirevaillant.github.io/rock-paper-scissors/",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {projects.map(({ id, image, title, github, live }) => (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a
                                href={github}
                                className="btn"
                                target="_blank"
                                rel="noreferrer">
                                Github
                            </a>
                            <a
                                href={live}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
