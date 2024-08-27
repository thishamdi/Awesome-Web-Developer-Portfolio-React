import { useState } from "react";
import { portfolio } from "../../data";
import "./Portfolio.css";

const Portfolio = () => {
    const [visibleProjects, setVisibleProjects] = useState(4);

    const handleExplore = () => {
        setVisibleProjects((prevVisible) => prevVisible + 4);
    };

    return (
        <div id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Portfolio</h2>
                    <p>Explore a curated selection of projects that highlight creativity, innovation, and technical excellence.</p>
                </div>

                <div className="portfolio-cards">
                    {portfolio.slice(0, visibleProjects).map((project) => (
                        <div className="card" key={project.id}>
                            <div className="card-text">
                                <h4>{project.title}</h4>
                                <p>{project.desc}</p>
                                <div className="card-actions">
                                    <a href={project.code} target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </div>
                            <div className="card-img">
                                <img src={project.cover} alt="portfolio image" />
                            </div>
                        </div>
                    ))}
                </div>

                {visibleProjects < portfolio.length && (
                    <a className="btn" onClick={handleExplore}>Explore</a>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
