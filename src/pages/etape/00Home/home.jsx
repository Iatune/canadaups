import React from "react";
import Header from "../../items/header/header";
import "./home.css";


const home = () => {
  return (
    <React.StrictMode>
        <Header />
        <div className="home_info">
            <h1>Home</h1>
            <p>
                Bienvenue sur le site de la préparation au projet Canada. Nous vous
                accompagnons dans votre projet de mobilité. Vous trouverez sur ce site
                toutes les informations nécessaires pour bien préparer votre projet.
            </p>
            <ul>
                <li>Avant projet</li>
                <li>CAQ</li>
                <li>Permis d'étude</li>
                <li>Logement</li>
                <li>Assurance</li>
                <li>...</li>
            </ul>
            <p>
                Il est important de noter que les procédures sont longues et qu'il faut s'y prendre à l'avance. <br />
                N'hésitez pas à nous contacter pour plus d'informations.
            </p>
            <ul>
                <li>
                    Si vous avez des questions avant de partir : <a href="mailto:outgoing@universite-paris-saclay.fr">outgoing@universite-paris-saclay.fr</a>
                </li>
                <li>
                    Les relations internationales : <a href="mailto:relations-internationales.iut-orsay@universite-paris-saclay.fr">relations-internationales.iut-orsay@universite-paris-saclay.fr</a>
                </li>
                <li>
                    Mr Raad (responsable informatique) : <a href="mailto:">?</a>
                </li>
                <li>
                    Mr Ravenet (responsable informatique) : <a href="mailto:">?</a>
                </li>
                <li>
                    Mr Pesty (responsable Mesures Physiques) : <a href="mailto:"> ? </a>
                </li>
                <li>
                    Mr Jarrahi (responsable Mesures Physiques) : <a href="mailto:"> ? </a>
                </li>
                <li>
                    Mme De Cock-Schwerrer (responsable Chimie) : <a href="mailto:"> ? </a>
                </li>
                <li>
                    Gestionnaire administrative Mme BELHADJ-ZIANE : <a href="mailto:"> ? </a>
                </li>
            </ul>
            <p>
                Mention spécial Mme BALKANSKI (anciennement responsable des relations internationales en informatique): <a href="mailto:"> ? </a>
            </p>
        </div>
        <span className="span_center"><h1>Utilisez la barre de navigation a gauche pour naviguer entre les étapes</h1></span>
    </React.StrictMode>
    );
}

export default home;