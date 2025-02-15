import React from "react"
import './Navbar.css'
import {NavbarI} from "../../interface";

const Navbar: React.FC<NavbarI> = ({activeButton, setActiveButton}) => {

    /*Add "More" in the vector to map to add another section*/

    return (
        <div className={"navbar"}>
            <div className="buttons">
                {["AboutMe", "Portfolio", "Contacts"].map((button) => (
                    <button
                        key={button}
                        className={activeButton === button ? "navbar-button-active" : "navbar-button"}
                        onClick={() => setActiveButton(button)}
                    >
                        <span>{button.replace(/([A-Z])/g, " $1").trim()}</span>
                    </button>
                ))}
            </div>
            <div className="line-container">
                <div className="line-left"></div>
                <span className="ag" onClick={()=>setActiveButton("")}>AG</span>
                <div className="line-right"></div>
            </div>
        </div>
    );
}
export default Navbar