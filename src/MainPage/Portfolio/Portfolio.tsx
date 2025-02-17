import React, {useState} from "react";
import './Portfolio.css'
import ProjectCard from "./ProjectCard/ProjectCard";

const Portfolio = () =>{

    const [activeProject, setActiveProject] = useState(null);

    const projectsData = [
        { title: 'TONight', description: 'A university project created to manage and inform about Turin\'s night life. ' +
                'It includes the management of events in the major discos in Turin', technologies: ['React', 'TypeScript', 'JavaServlet', 'CSS', 'HTML'],
            githubLink: 'https://github.com/andrea-griguoli/TOnight', imageUrl: '/TO.png'},
        { title: 'KnoWhere', description: '\n' +
                'A web app to represent the cultural events of a place you want to visit. ' +
                'A tool to improve integration and discovery of cultures and places',
            technologies: ['React','TypeScript', 'CSS', 'HTML', 'Springboot'],
            githubLink: 'https://github.com/andrea-griguoli/KnoWhere', imageUrl: '/kno.png', videoDemo:"/reg.mp4"},
        { title: 'Project 2', description: '', technologies: [], githubLink: '#' },
        { title: 'Project 2', description: '', technologies: [], githubLink: '#' },
        { title: 'Project 2', description: '', technologies: [], githubLink: '#' },
        { title: 'Project 2', description: '', technologies: [], githubLink: '#' }

        // Aggiungi altri progetti qui
    ];

    // Funzione per gestire il clic su un contenitore
    const handleContainerClick = (index: any) => {
        if(index===activeProject) setActiveProject(null)
        setActiveProject(index); // Imposta il progetto attivo
    };

    return (
        <div className="total">
            <div className="photo-container">
                {activeProject !== null && (
                    <ProjectCard
                        title={projectsData[activeProject].title}
                        description={projectsData[activeProject].description}
                        technologies={projectsData[activeProject].technologies}
                        githubLink={projectsData[activeProject].githubLink}
                        imageUrl={projectsData[activeProject].imageUrl}
                        videoDemo={projectsData[activeProject].videoDemo}
                    />
                )}
            </div>
            <div className="project-list">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="project-container"
                        onClick={() => handleContainerClick(index)}
                    >
                        {project.imageUrl && (
                            <>
                                <div
                                    className="img-container"
                                >
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="img-li"/>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio