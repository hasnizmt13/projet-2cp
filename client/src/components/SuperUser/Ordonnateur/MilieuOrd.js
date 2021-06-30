import '../../services/commun/Style_sheet.css'
import React, { useState, useEffect, useRef } from "react";
import DossierOrd from "../Commun/DossierOrd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Trier from '../../services/commun/Trier'
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
const MilieuOrd = () => {
    const dossierM = {
        num: '4',
        service: 'marché',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '30',
        path: "/marche-form/"
    };
    const dossierC = {
        num: '3',
        service: 'Commande',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '30',
        path: "/commande-form/"
    };
    const [x, setx] = useState(false);
    const Num = [dossierC, dossierC, dossierM, dossierM]
    const [trier, settrier] = useState(false);
    let menutri = useClickOutside(() => {
        settrier(false);
    }
    )
    const s = (parseInt(Num[Num.length - 1].num) + 1);
    return (
        <div className="partie-milieu">

            <h3> Bienvenue dans votre espace de travail Mr l'ordonnateur!</h3>
            <div className="content-marche">
                <div className="btn-contain">
                    <div className="nouveau">
                        <button className="new" onClick={() => setx(x => !x)}>
                            <p>Nouveau +</p>
                        </button>
                    </div>
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
                    {trier && (<Trier />)}
                </div>
                <div className="titles">
                    <p>Numéro de dossier</p>
                    <p>date creation</p>
                    <p>date limite</p>
                    <p>service</p>
                    <p>Avancement</p>
                    <p className="final">Formulaire</p>
                </div>

                {
                    Num.map((n) => {
                        return <DossierOrd Dossier={n} />
                    })
                }
                {(Num.length == 0) && (<div>
                    <h5>vous n'avez aucun dossier en cours</h5>
                </div>)}
                {
                    x && (
                        <div className="creer-menu">
                            <div className="catalogue">
                                <a href={"/marche-form/" + s} onClick={() => setx(x => !x)}>Service marché</a>
                                <a href={"/commande-form/" + s} onClick={() => setx(x => !x)}> Service commande </a>
                            </div>
                            <div className="annuler">
                                <p className="ann" onClick={() => setx(x => !x)}>annuler</p>
                            </div>
                        </div>
                    )
                }

            </div>


        </div>


    );

};
export default MilieuOrd;