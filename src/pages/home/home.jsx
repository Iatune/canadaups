import React, { useState } from "react";
import "./home.css"; // Assurez-vous que le chemin est correct

// Composant Nav déplacé ici pour plus de clarté
import Home1 from "../etape/00Home/home";
import AvantProjet from "../etape/01AvantProjet/avantprojet";
import Inscription from "../etape/02Inscription/inscription";
import PrepaMobilite from "../etape/03PrepaMobilite/prepamobilite";
import Caq from "../etape/04Caq/caq";
import Pe from "../etape/05Pe/pe";

const Nav = ({ setIsNavExpanded, isNavExpanded, setActiveTab }) => {
  return (
    <div
      className={`navbar ${isNavExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsNavExpanded(true)}
      onMouseLeave={() => setIsNavExpanded(false)}
    >
      <div className="logo">=</div>
      {isNavExpanded && (
        <div className="nav-links">
          <button onClick={() => setActiveTab('home')}>Home</button>
          <button onClick={() => setActiveTab('avantprojet')}>Avant Projet</button>
          <button onClick={() => setActiveTab('inscription')}>Préparation</button>
          <button onClick={() => setActiveTab('preparationmobilite')}>Preparation Mobilitée</button>
          <button onClick={() => setActiveTab('caq')}>CAQ</button>
          <button onClick={() => setActiveTab('permis')}>Permis d'étude</button>
          <button onClick={() => setActiveTab('assurance')}>Santé</button>
          <button onClick={() => setActiveTab('logement')}>Logement</button>
          <button onClick={() => setActiveTab('assurance')}>Assurance Logement</button>
          <button onClick={() => setActiveTab('NAS')}>NAS</button>
          <button onClick={() => setActiveTab('deplacement')}>Deplacement</button>
          <button onClick={() => setActiveTab('banque')}>Banque</button>
          <button onClick={() => setActiveTab('cours')}>Cours</button>
          <button onClick={() => setActiveTab('stage')}>Stage</button>
          <button onClick={() => setActiveTab('contact')}>Contact</button>
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
      case 'contact':
        return <div>Contact Us</div>;
      default:
        return <Home1 />;
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