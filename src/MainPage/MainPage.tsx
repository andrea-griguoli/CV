import React, {useEffect, useState} from "react"
import './MainPage.css'
import Navbar from "./Navbar/Navbar";
import {MainPageI} from "../interface";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";
import More from "./More/More";

const MainPage: React.FC<MainPageI>= ({setAboutMe, setPortfolio, setContacts, setMore,
                                          aboutMe, portfolio, contacts, more}) => {

    const [activeButton, setActiveButton] = useState("")

    useEffect(() => {
        if (aboutMe) setActiveButton("AboutMe");
        else if (portfolio) setActiveButton("Portfolio");
        else if (contacts) setActiveButton("Contacts");
        else if (more) setActiveButton("More");
    }, [aboutMe, portfolio, contacts, more]);

    const handleButtonClick = (button: string) => {
        setAboutMe(button === "AboutMe");
        setPortfolio(button === "Portfolio");
        setContacts(button === "Contacts");
        setMore(button === "More");
        setActiveButton(button);
    };


    return (
        <div className="mainpage">
            <Navbar activeButton={activeButton} setActiveButton={handleButtonClick}></Navbar>
            <div className={"info"}>
                {aboutMe ?
                    (<AboutMe></AboutMe>)
                    :
                    portfolio ?
                        (<Portfolio></Portfolio>)
                        :
                        contacts ?
                            (<Contacts></Contacts>)
                            :
                            <More></More>
                }
            </div>
        </div>
    );
}
export default MainPage