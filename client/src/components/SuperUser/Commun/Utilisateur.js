import React from 'react'
import "../../services/commun/Style_sheet.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Utilisateur = ({ userInfo }) => {
    const d = userInfo[0].toUpperCase();
    const [Delete, setDelete] = useState(false);
    const y = JSON.stringify(userInfo);
    
    return (
        <div className="marche-dossier ">
            <span className="num-dossier date-dossier">
                <div className="compte-info ">
                    <div className="avatar">
                        {d}
                    </div>
                    <div className="user">
                        <Link to={"/User/" + y}> {userInfo[4]} </Link>
                    </div>

                </div>
            </span>
            <span className="date-dossier">{userInfo[3]}</span>
            <span className="date-dossier">
                <a className="form" href="../Parametre/compte">Modifier</a>
                <span className="delete-icon" onClick={() => setDelete(Delete => !Delete)}> <FontAwesomeIcon icon={faTrashAlt} className="icon" /></span>
            </span>
            {Delete && (<div className="supprimer">
                <div className="fermer" onClick={() => setDelete(Delete => !Delete)}>
                    <FontAwesomeIcon icon={faTimes} className="icon" />
                </div>
                <div className="verif">
                    <div className="msg">
                        <p>Voulez vous vraiment supprimer ce compte </p>
                    </div>
                    <div className="annuler">
                        <p className="sup" onClick={() => setDelete(Delete => !Delete)}>Supprimer</p>
                        <p className="ann" onClick={() => setDelete(Delete => !Delete)}>annuler</p>
                    </div>
                </div>

            </div>)}
        </div>


    )
}

export default Utilisateur