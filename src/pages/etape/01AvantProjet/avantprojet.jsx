import React from "react";
import "./avantprojet.css";
import Header from "../../items/header/header";
import Img from "./imgs/1.png";

const AvantProjet = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>Avant Projet</h1>
                <p>
                    Bon la première étape est de participez au amphi dédier au projet d'étude à l'étranger.
                    Pour ma part cette Amphi ma été donné par Mr RAAD au mois de Janvier 2024.
                    <br />
                    Suite à cette amphi, un formulaire vous sera remis pour que vous puissiez renseigner vos informations et motivation.
                    <br />
                    Voici le lien pour accéder au formulaire: <a href="https://www.universite-paris-saclay.fr/sejour-detudes-letranger" rel="noreferrer" target="_blank">Sejour d'études à l'étranger</a>
                </p>
                <img className="img_content" src={Img} alt="" />
                <p>
                    Puis rendez-vous à la section portail des étudiants sortant.
                    <br />
                </p>
            </div>
            <div className="home_info">
                <p>
                Une fois sur le portail vous devez remplir le formulaire de candidature.
                <br />
                <ul>
                    <li>Préparer un CV</li>
                    <li>Une lettre de motivation</li>
                    <li>Relevés de notes</li>
                </ul>
                Info : De souvenir, une moyenne d'au moins 11 est nécessaire si ce n'est plus, il faut aussi avoir validé une partie des UE pour ETS Montreal
                </p>
            </div>
            <div className="home_info">
                <p>
                Une fois le formulaire rempli, il faut attendre la réponse de l'école.
                <br />
                Mr RAAD va vous faire passer un entretien afin de determiné si vous avez les capacités de réussir.
                A noté que l'université se reserve le droit de refuser votre demande pour les raisons suivantes :
                <ul>
                    <li>Niveau trop faible</li>
                    <li>Pas assez d'UE validé</li>
                    <li>BUT 2 pas validé (si vous n'avez pas de stage)</li>
                    <li>Si votre niveau d'anglais est trop faible (à voir)</li>
                    <li>Si votre niveau de maths est trop faible</li>
                </ul>
                <br />
                Si vous avez des doutes contacter le responsable des relations internationales, pour ma part Mr RAAD.
                <br />
                Une fois que cela est fait vous en avait fini pour tout ce qui concerne l'université. Votre dossier sera analysé par les responsables et vous aurez une réponse d'ici 1 semaine à 2.
                <br />
                <br />
                add : Il ne faut pas une moyenne de fou en anglais, j'ai un ami qui avait 6 au moyenne d'anglais en S4 et pourtant il est bien la (Malheureusement).
                </p>
           </div>
           <br />
        </React.StrictMode>
    );
}

export default AvantProjet;