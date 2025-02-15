import './App.css';
import React, {useState} from 'react';
import MainPage from "./MainPage/MainPage";

function App() {
    const [aboutMe, setAboutMe] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [contacts, setContacts] = useState(false)
    const [more, setMore] = useState(false)

    /*<button className="custom-button" onClick={()=>setMore(prev=>!prev)}><span></span>More</button> ----> Add this for one more section, let's change Navbar.tsx too*/


  return (
      <div className="container">
          {aboutMe || portfolio || contacts || more ?
              (<MainPage setAboutMe={setAboutMe} setPortfolio={setPortfolio} setContacts={setContacts} setMore={setMore}
                            aboutMe={aboutMe} portfolio={portfolio} contacts={contacts} more={more}></MainPage>)
              :
              (<div className="ring">
                  <i style={{"--clr": "rgba(255,255,255,0.7)"} as React.CSSProperties}></i>
                  <i style={{"--clr": "rgba(255,255,255,0.7)"} as React.CSSProperties}></i>
                  <i style={{"--clr": "rgba(255,255,255,0.7)"} as React.CSSProperties}></i>
                  <div className="column right-column">
                      <h2 className="column-title">Andrea Griguoli</h2>
                      <button className="custom-button" onClick={()=>setAboutMe(prev=>!prev)}><span></span> About me</button>
                      <button className="custom-button" onClick={()=>setPortfolio(prev=>!prev)}><span></span>Portfolio</button>
                      <button className="custom-button" onClick={()=>setContacts(prev=>!prev)}><span></span>Contacts</button>
                  </div>
              </div>)
          }
      </div>
  );
}

export default App;
