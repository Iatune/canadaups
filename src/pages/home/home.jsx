import React, { useState } from "react";
import "./home.css"; // Assurez-vous que le chemin est correct

// Composant Nav déplacé ici pour plus de clarté
import Inprog from "../etape/inprogress/inprog";
import Home1 from "../etape/00Home/home";
import AvantProjet from "../etape/01AvantProjet/avantprojet";
import Inscription from "../etape/02Inscription/inscription";
import PrepaMobilite from "../etape/03PrepaMobilite/prepamobilite";
import Caq from "../etape/04Caq/caq";
import Pe from "../etape/05Pe/pe";
import Sante from "../etape/06Sante/sante";
import Logement from "../etape/07Logement/logement";
// import Assurance from "../etape/08AssuranceLog/assurance";
// import Nas from "../etape/09NAS/nas";

const Nav = ({ setIsNavExpanded, isNavExpanded, setActiveTab }) => {
  return (
    <div
      className={`navbar ${isNavExpanded ? "expanded" : ""}`}
    >
      <button className="logo" onClick={() => setIsNavExpanded(!isNavExpanded)}>+</button>
      {isNavExpanded && (
        <div className="nav-links">
          <button onClick={() => setActiveTab('home')}>Home</button>
          <button onClick={() => setActiveTab('avantprojet')}>Avant Projet</button>
          <button onClick={() => setActiveTab('inscription')}>Préparation</button>
          <button onClick={() => setActiveTab('preparationmobilite')}>Preparation Mobilitée</button>
          <button onClick={() => setActiveTab('caq')}>CAQ</button>
          <button onClick={() => setActiveTab('permis')}>Permis d'étude</button>
          <button onClick={() => setActiveTab('sante')}>Santé</button>
          <button onClick={() => setActiveTab('logement')}>Logement</button>
          <button onClick={() => setActiveTab('assurance')}>Assurance Logement</button>
          <button onClick={() => setActiveTab('NAS')}>NAS</button>
          <button onClick={() => setActiveTab('deplacement')}>Deplacement</button>
          <button onClick={() => setActiveTab('banque')}>Banque</button>
          <button onClick={() => setActiveTab('cours')}>Cours</button>
          <button onClick={() => setActiveTab('stage')}>Stage</button>
          <button onClick={() => setActiveTab('contact')}>Contact</button>
          <button onClick={() => setActiveTab('about')}>About</button>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home1 />;
      case 'avantprojet':
        return <AvantProjet />;
      case 'inscription':
        return <Inscription />;
      case 'preparationmobilite':
        return <PrepaMobilite />;
      case 'caq':
        return <Caq />;
      case 'permis':
        return <Pe />;
      case 'sante':
        return <Sante />;
      case 'logement':
        return <Logement />;
      // case 'contact':
      //   return <div>Contact Us</div>;
      default:
        return <Inprog />;
    }
  };

  return (
    <React.StrictMode>
      <div className='split'>
        <Nav setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded} setActiveTab={setActiveTab} />
        <div className={`intro ${isNavExpanded ? "shifted" : ""}`}>
          {renderContent()}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;