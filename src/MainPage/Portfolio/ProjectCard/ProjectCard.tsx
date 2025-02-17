import React from "react";
import './ProjectCard.css'

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    videoDemo?: string;
    imageUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
                                                 title,
                                                 description,
                                                 technologies,
                                                 githubLink,
                                                 videoDemo,
                                                 imageUrl
                                             }) => {
    return (
        <div className="left-card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image"/>}
            <div className={"info-container"}>
                <p>{description}</p>
                <div className="tech-icons">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
                <div className="video-container">
                    {videoDemo && (
                        <video controls={true} muted={true} autoPlay={true} className="project-video">
                            <source src={videoDemo} type="video/mp4"/>
                            Il tuo browser non supporta il tag video.
                        </video>
                    )}
                </div>
            </div>
            <div className="project-links">
                {imageUrl && <button onClick={() => window.open(githubLink, "_blank")} className="btn">GitHub</button>}
            </div>
        </div>
    );
};

export default ProjectCard;
