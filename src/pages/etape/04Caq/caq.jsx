import React from "react";
import "./caq.css";

//les imports
import Header from "../../items/header/header";
import Img1 from "./imgs/effpaiement.png";
import Img2 from "./imgs/effpaiement2.png";
import Img3 from "./imgs/7.png";
import Img4 from "./imgs/8.png";
// import url from "https://www.hec.ca/etudiants/etudiants-etrangers/avant-votre-depart/obtenir-autorisations-entree-et-sejour/Tutoriel-permis-d-etudes.pdf"

const Caq = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>CAQ</h1>
                <p>
                    En attendant votre réponse ou lorsque vous avez reçu votre réponse, préparer directement votre mobilité
                    en faisant votre CAQ.
                    <br />
                    <span className="bold">Rappel : ce document est necessaire pour faire une demande de permis d'étude.</span>
                </p>
            </div>
            <div className="home_info">
                <p>Remplir le formulaire suivant, <a href="https://www.form.services.micc.gouv.qc.ca/dcae/faces/faces/pages/identite1.jspx?lang=fr" rel="noreferrer" target="_blank">ce site</a></p>
                <p>
                    Complété le formulaire jusqu'a l'étape 11 (Ce formulaire ne vous demandera pas d'avoir la lettre d'admission)
                    <br />
                    à l'étape 10, on vous demandera de vous inscrire pour valider votre demande, vous retrouverez votre numéro de demande à la fin, retenez le !
                    <hr />
                    Si vous avez perdu le numéro de la demande, connecter vous avec votre identifiant <a href=" https://www.form.services.micc.gouv.qc.ca/dossierClient/faces/pages/authentification.jspx?lang=fr&app=DCAE&indCreationCompte=undefined&indCodeAutorisation=undefined" rel="noreferrer" target="_blank">ici</a> pour le récupérer
                    <br />
                    Ce site vous permet également de suivre l'avancement de votre demande, tout les messages que vous recevrer est consultable ici.
                </p>
            </div>
            <div className="home_info">
                <p>
                    Une fois que vous avez votre numéro de demande, rendez-vous sur : <a href="https://arrima.immigration-quebec.gouv.qc.ca/" rel="noreferrer" target="_blank">Arrima</a> pour payer le CAQ (128$can soit environ 87.32€).
                    Il vous faudra crée un compte à nouveau.
                    <br />
                    rendez-vous dans la section "mes paiements" puis rentrer votre numéro de demande.
                </p>
                <img className="img_content" src={Img1} alt="" />
                <br />
                <img className="img_content" src={Img2} alt="" />
            </div>
            <div className="home_info">
                <p>
                    vous devez attendre 24 à 48h avant que votre numéro de dossier apparait. 
                </p>
                <img className="img_content" src={Img3} alt="" />
                <p>
                    Une fois le numéro reçu, rendez-vous à nouveau sur <a href="https://arrima.immigration-quebec.gouv.qc.ca/" rel="noreferrer" target="_blank">Arrima</a> afin de continuer votre demande.
                    <br />
                    Une fois connecté appuyer sur la catégorie mes dossiers puis il faudra vous crée un dossier avec le type ci-dessous:
                </p>
                <img className="img_content" src={Img4} alt="" />
                <p>
                    Puis complété les informations demandé, pour les documents à remettre tout est écrite sur la dernière page du DocumentsDca
                    <br />
                    Une fois les documents remis, vous allez devoir attendre plusieurs semaines (environ 25 jours à 1 mois) pour avoir une réponse.
                </p>
            </div>
            <br />
        </React.StrictMode>
    );
}

export default Caq;