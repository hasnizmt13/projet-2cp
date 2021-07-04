import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faExclamationCircle, faFileAlt, faFileImport, faUser, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const Droite = ({ serviceinfo }) => {
    /*const [more, setmore] = useState(false);
    var x = "plus";
    if (more) {
        x = "moin"
    }
    else {
        x = "plus"
    }*/
    return (
        <div className="partie-contain">
            <div className="partie-droite">
                <div className="compte">
                    <nav className="nav-bar1" >
                        <ul className="lien" >

                            <li className="elem">
                                <NavLink to="../profil" className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faUser} className="icon" />
                                    Mon compte
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="lien">

                            <li className="elem">
                                <NavLink to="../../Settings" className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faUserCog} className="icon" />
                                   Paramètre du compte
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div>
                    <nav className="nav-bar1">
                        <ul className="lien"  >

                            <li className="elem">
                                <NavLink to={serviceinfo} className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                              Espace de travail
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="lien">

                            <li className="elem">
                                <NavLink to="/sdq" className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileImport} className="icon" />
                                  importer un dossier
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-bar2">
                        <ul className="lien">

                            <li className="elem">
                                <NavLink to="/En-savoir-plus" className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
                                     A propos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    );

};
export default Droite;