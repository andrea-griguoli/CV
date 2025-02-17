import React, {useEffect, useState} from "react"
import './AboutMe.css'
import Hourglass from "./hourglass/Hourglass";


const AboutMe = () =>{
    const [activeButton, setActiveButton] = useState("")

    const handleActive = (button: string)=>{
        if(activeButton === button) setActiveButton("")
        else setActiveButton(button)
    }

    return(
        <div className={"total"}>
            <div className={"a-container"}>
                <div className={"buttons-about"}>
                    {["Studies", "Skills", "Languages", "Certifications"].map((button) => (
                        <button
                            key={button}
                            className={activeButton === button ? "b-active" : "b"}
                            onClick={() => handleActive(button)}
                        >
                            {button.replace(/([A-Z])/g, " $1").trim()}
                        </button>
                    ))}
                </div>
                <div className={"text-container"}>
                    { activeButton === "" ?
                        <>
                            <div className={"intro-container"}>
                                <div className={"intro"}> Introduction</div>
                                <div className={"line-intro"}></div>
                            </div>
                            <div className="text">
                                <div className="section-content">
                                    Hi, my name is Andrea Griguoli. I am a recent graduate in Computer Science,
                                    currently gaining my first professional experiences.
                                </div>

                                <div className="section-title">Future Goals</div>
                                <div className="section-content">
                                    My goal is to continue my studies with a master’s degree to become an engineer
                                    specialized in cybersecurity and acquire highly advanced skills in this field.
                                </div>

                                <div className="section-title">Personal Traits</div>
                                <div className="section-content">
                                    I am a motivated person and determined, with a strong propensity for teamwork and
                                    constructive engagement, always looking for new challanges and innovative ideas.
                                </div>

                                <div className="section-title">Hobbies and Interests</div>
                                <div className="section-content">
                                    I love challenging myself facing new experiences that can enrich me both
                                    personally and professionally.
                                </div>

                                <div className="section-title">Interests</div>
                                <div className="section-content">
                                    My interests include sports, technology, and cinema, which help me maintain a balance
                                    between human growth and professional development.
                                </div>
                            </div>
                        </>
                        :
                        activeButton === "Studies" ?
                            <div className="education-wrapper">
                                <div className="education-item">
                                    <div className="education-title">High school diploma <span>2016 - 2021</span></div>
                                    <div className="education-details">
                                        <div className="education-degree">IT expert 100/100</div>
                                        <div className="education-institution">ITST Gugliemo Marconi, Campobasso</div>
                                    </div>
                                </div>

                                <div className="education-item">
                                    <div className="education-title">Bachelor's degree <span>2021 - 2025</span></div>
                                    <div className="education-details">
                                        <div className="education-degree">Graduate in computer science 100/110</div>
                                        <div className="education-institution">Università degli studi di Torino,
                                            Torino
                                        </div>
                                    </div>
                                </div>

                                <div className="education-item">
                                    <div className="education-title">Master's degree <span>2025 - </span></div>
                                    <div className="education-details">
                                        <div className="education-degree">Cybersecurity engineer</div>
                                        <div className="education-institution">Politecnico di Torino, Torino</div>
                                    </div>
                                    <div className="hourglass-container">
                                        <Hourglass/> {/* Clessidra */}
                                    </div>
                                </div>
                            </div>

                            :
                            activeButton === "Skills" ?
                                <div className="education-wrapper">
                                    <div className="education-item">
                                        <div className="education-title">IT skills</div>
                                        <div className="education-details">
                                            <div className="education-degree"><strong>Programming languages:</strong> C, Java,
                                                JavaScript, TypeScript, Assembly, HTML, CSS, Python
                                            </div>
                                            <div className="education-degree"><strong>Frameworks:</strong> React, React-Native,
                                                Springboot
                                            </div>
                                            <div className="education-degree"><strong>Database:</strong> MySQL, PostgreSQL
                                            </div>
                                        </div>
                                    </div>

                                    <div className="education-item">
                                        <div className="education-title">Other skills</div>
                                        <div className="education-details">
                                            <div className="education-degree">Photoshop, Figma, Canva</div>
                                        </div>
                                    </div>
                                </div>
                                :
                                activeButton === "Languages" ?
                                    <div className="education-wrapper">
                                        <div className="education-item">
                                            <div className="education-title">English</div>
                                            <div className="education-details">
                                                <div className="education-degree"> Advanced written and spoken English
                                                </div>
                                            </div>
                                        </div>
                                        <div className="education-item">
                                            <div className="education-title">Italian</div>
                                            <div className="education-details">
                                                <div className="education-degree">Native speaker</div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="pdf-container">
                                        <div className="pdf-item">
                                            <span>Cambridge Certificate</span>
                                            <a href={require("../../resources/cambridge_certificate.pdf")}
                                               target="_blank" rel="noopener noreferrer">
                                                <button className={"open"}>Apri</button>
                                            </a>
                                        </div>

                                        <div className="pdf-item">
                                            <span>Certificato Photoshop Beginner</span>
                                            <a href={require("../../resources/certificato_photoshop_beginner.pdf")}
                                               target="_blank" rel="noopener noreferrer">
                                                <button className={"open"}>Apri</button>
                                            </a>
                                        </div>

                                        <div className="pdf-item">
                                            <span>Certificazione Corso Cisco</span>
                                            <a href={require("../../resources/Certificazione_corso_cisco.pdf")}
                                               target="_blank" rel="noopener noreferrer">
                                                <button className={"open"}>Apri</button>
                                            </a>
                                        </div>

                                    </div>

                    }
                </div>
            </div>
            <div className={"photo-container"}>
                <img src={require("../../resources/foto.png")} alt={"foto"} className={"photo"}></img>
                <div className={"gradient"}>
                    <div className={"text-overlay"}>
                        <div className={"row-text"}>
                            <div className={"pre-text"}> FIRST NAME:</div>
                            <div className={"specific-text"}> Andrea</div>
                        </div>
                        <div className={"row-text"}>
                            <div className={"pre-text"}> LAST NAME:</div>
                            <div className={"specific-text"}> Griguoli</div>
                        </div>
                        <div className={"row-text"}>
                            <div className={"pre-text"}> BIRTH:</div>
                            <div className={"specific-text"}> 16/05/2002</div>
                        </div>
                        <div className={"row-text"}>
                            <div className={"pre-text"}> CITIZENSHIP:</div>
                            <div className={"specific-text"}> Italy</div>
                        </div>
                        <div className={"row-text"}>
                            <div className={"pre-text"}> LOCATED IN:</div>
                            <div className={"specific-text"}> Turin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe