import React from 'react'
import "./Style_sheet.css"
import { Link } from "react-router-dom"
const Dossier = ({ numDoss, done, datelim, service, role }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    var path = "/"+service+"-form/" + numDoss
    if (role == 'modifier'){
        path += 1 
    }
    else{
        path += 0
    }
    const curentdate = new Date().toLocaleDateString();

    return (
        <div className="marche-dossier">
            <span className="num-dossier date-dossier">
                <Link to={path}>Dossier n°{numDoss} </Link>
            </span>
            <span className="date-dossier">{curentdate}</span>
            <span className="date-dossier">{datelim}</span>
            <span className="date-dossier">
                <div className="progress">
                    <div className="progress-done " style={style}>
                        {done}%
			    </div>
                </div>
            </span>
            <span className="date-dossier form">
                <a href={path}> Remplire le formulaire</a>
            </span>
        </div>
    )
}

export default Dossier
