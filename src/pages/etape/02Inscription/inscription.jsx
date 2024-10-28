import React from "react";
import "./inscription.css";

//les imports
import Header from "../../items/header/header";
import File from "../../../files/UQAC_Guide_Etudiant_2024-2025.pdf";


const Prepa = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>Préparation</h1>
                <p>
                    Une fois que vous avez reçu une confirmation de l'université, les choses sérieuses commencent !
                    <br />
                    La première étape est d'attendre un mail de l'université d'accueil (UQAC ou ETS Montreal).
                    <br />
                    Une fois reçu vous pouvez commencer les procédures d'inscription.
                </p>
                <details className="details_prepa">
                    <summary>UQAC</summary>
                    Document de l'UQAC : <a href={File} rel="noreferrer" target="_blank">Guide Etudiant</a>
                    <br />
                    Pour l'UQAC, vous devez vous rendre sur <a href="https://uqac.moveonca.com/locallogin/54e6035a9c70068265000000/fra#" rel="noreferrer" target="_blank">moveOn</a> et vous créer un compte.
                    Ensuite vous devez complété le formulaire d'inscription et attendre les resultats.
                    <br />
                    <ul>
                        <li>BUT 3 = Bachelor-baccalauréat</li>
                        <li>Faites-vous partie d’un protocole d’entente ? : Oui</li>
                        <li>Séjour AVEC délivrance de diplôme de l’UQAC : choisir « Bilat - AVEC diplomation »</li>
                        <li>Préparez vos relevés de note, ainsi que votre dernier diplôme obtenu.</li>
                        <li>Lorsqu'on vous demande l'établissement de provenance, veuillez sélectionné baccalauréat-informatique</li>
                    </ul>
                    <br />
                    Une fois que vous avez déposé la candidature, il ne vous reste plus qu'à attendre les résultats (environ 2 semaines)
                    <br />
                    Il y a 3 types de réponse possible :
                    <ul>
                        <li>Admission définitive</li>
                        <li>Admission conditionnelle</li>
                        <li>Programmes contingentés seulement - Liste d’attente</li>
                    </ul>
                    <br />
                    Si vous n'êtes pas admis définitivement, aller lire le PDF ci-dessus.
                    <br />
                    <br />
                    Une fois que vous avez fini vous pouvez passer à la prochaine étape.
                </details>
                <details className="details_prepa">
                    <summary>ETS Montreal</summary>
                    HEHEHEHEHE, je sais pas :/
                </details>
            </div>
        </React.StrictMode>
    );
}

export default Prepa;