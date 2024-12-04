import React from "react";
import "./sante.css";

import Header from "../../items/header/header";

const Sante = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>Santé</h1>
                <p>
                    Pour pouvoir être assurée au canada, vous devez avoir une assurance maladie. <br />
                    Pour cela, vous devez vous inscrire à la RAMQ (Régie de l'assurance maladie du Québec) <br />
                    Pour cela, vous devez vous rendre sur <a href="https://www.ramq.gouv.qc.ca/fr" target="_blank">ce site</a> <br />
                    Vous devez remplir le formulaire d'inscription et le renvoyer avec les documents demandés. <br />
                    Vous recevrez ensuite une carte d'assurance maladie. <br />
                    Vous devez attendre quelque semaine avant de recevoir la réponse de votre demande. <br />
                </p>
            </div>
            <div className="home_info">
                <h1>Présenter une demande</h1>
                <p>
                    Pour commencer il est importante de remplir le formulaire SE 401-Q-106 (doc à ajouter), que l'Université vous fournira. <br />
                </p>

                <ul>
                    <li>La première partie doit être rempli par vous même</li>
                    <ul>
                        <li>N° d'immatriculation France = N° de sécurité sociale</li>
                    </ul>
                    <li>La deuxième partie doit être rempli par l'université</li>
                    <ul>
                        <li>Faut envoyer la demande a : <a href="mailto:outgoing@universite-paris-saclay.fr">outgoing@universite-paris-saclay.fr</a></li>
                    </ul>
                    <li>La troisième partie doit être rempli par l'assurance maladie (Ameli)</li>
                    <ul>
                        <li>Soit il faut envoyer le document par courriel (lettre) </li>
                        <li>Soit il faut prendre rendez vous puis donner en main propre</li>
                        <li>Le document doit être donner au RI de Ameli</li>
                    </ul>
                </ul>

                <p>
                    Une fois que vous avez envoyer le formulaire SE 401-Q-106, vous devez attendre la réponse de l'assurance maladie. <br />
                    la durée dépends de l'assurance maladie. <br />
                </p>
            </div>
        </React.StrictMode>
    );
};

export default Sante;
