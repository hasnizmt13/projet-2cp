import '../../services/commun/Style_sheet.css'
import React, { useState, useEffect, useRef } from "react";
import Utilisateur from "../Commun/Utilisateur"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TrierA from '../Commun/TrierA'
let useClickOutside = (handler1) => {
    let menutri = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!menutri.current.contains(event.target)) {
                handler1();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return menutri;
}
const MilieuAdmin = ({ userInfo }) => {
    const user1 = {
        nom: 'User User',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'service'
    };
    const user2 = {
        nom: 'User1 User1',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'service'
    };
    const user3 = {
        nom: 'User2 User2',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'service'
    };
    let tab = [user1, user2, user3];

    const [trier, settrier] = useState(false);
    let menutri = useClickOutside(() => {
        settrier(false);
    }
    )
    return (
        <div className="partie-milieu">

            <h3> Bienvenue dans votre espace de travail Administrateur !</h3>
            <p></p>
            <div className="content-marche">
                <div className="btn-contain">
                    <a href="/signup" className="nouveau">
                        <button className="new">
                            <p>Céer un Compte</p>
                        </button>
                    </a>
                    <div className="searchbar">
                        <form class="example" >
                            <input type="text" placeholder="   Rechercher.." name="search2" />
                            <button type="submit" className="button"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
                        </form>
                    </div>
                </div>

                <div className="titre-nouveau">
                    <p className="titresec">Vos dossiers en cours:</p>
                    <div className="tri">
                        <p>Trier</p>
                        <span className="icon" onClick={() => settrier(trier => !trier)}>
                            <FontAwesomeIcon icon={faCaretDown} className="icon" />
                        </span>
                    </div>
                </div>
                <div ref={menutri}>
                    {trier && (<TrierA />)}
                </div>
                <div className="titles">
                    <p>Compte utilisateur</p>
                    <p>service</p>
                    <p className="final">Modifier</p>
                </div>
                {
                    tab.map((n) => {
                        return <Utilisateur userInfo={n} />

                    })
                }

            </div>


        </div>


    );

};
export default MilieuAdmin;