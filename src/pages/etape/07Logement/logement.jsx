import React from "react";
import "./logement.css";

import Header from "../../items/header/header";

const Logement = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>Logement</h1>
                <p>
                    Sur le campus, il y a des résidences universitaires. <br />
                    C'est le SIUQ (Société immobilière de l'Université du Québec) qui gère les résidences. <br />
                    Pour plus d'informations, vous pouvez vous rendre sur <a href="https://siuq.uquebec.ca//" target="_blank">ce site</a> <br />
                    <br />
                    Conseil : <br />
                    <ul>
                        <li>Il est important de faire une demande de logement le plus tôt possible</li>
                        <li>Penser à bien lire votre bail</li>
                    </ul>
                </p>
            </div>
            <div className="home_info">
                <h1>Logement externe</h1>
                <p>
                    Si vous ne souhaitez pas être dans une résidence universitaire, vous pouvez chercher un logement externe. <br />
                    Pour cela, vous pouvez vous rendre sur <a href="https://www.kijiji.ca/" target="_blank">ce site</a> ou directement sur <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a> car les québécois adore facebook.<br />
                </p>
            </div>
            <div className="home_info">
                <h1>Requis</h1>
                <ul>
                    <li>une caution de 100$ en résidence universitaire sinon elle peut monter jusqu'a un mois de loyer</li>
                    <li>une assurance logement qui va jusqu'a 2M</li>
                    <ul>
                        <li>il y a plusieurs assurance logement ici, la plus intéressante et celle de desjardins</li>
                    </ul>
                </ul>
            </div>
        </React.StrictMode>
    );
};

export default Logement;
