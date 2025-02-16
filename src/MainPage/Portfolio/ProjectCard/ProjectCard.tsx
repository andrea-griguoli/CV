import React from "react";
import './ProjectCard.css'

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveDemo?: string;
    imageUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
                                                 title,
                                                 description,
                                                 technologies,
                                                 githubLink,
                                                 liveDemo,
                                                 imageUrl
                                             }) => {
    return (
        <div className="left-card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <p>{description}</p>

            <div className="tech-icons">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>

            <div className="project-links">
                {imageUrl && <button onClick={() => window.open(githubLink, "_blank")} className="btn">GitHub</button>}
                {liveDemo && <button onClick={() => window.open(liveDemo, "_blank")} className="btn">Live Demo</button>}
            </div>
        </div>
    );
};

export default ProjectCard;
