import "../../Parametre/Deco.css"
import { NavLink } from 'react-router-dom'
const Gauche = () => {

    return (
        <div class="MenuPara">
            <header>Mes Paramètres</header>
            <NavLink to="../profil" className="menulink" activeClassName="Active"><span>Compte</span>  </NavLink>
            <NavLink to="../securite" className="menulink" activeClassName="Active"><span>Sécurité</span>  </NavLink>
            <NavLink to="../settings" className="menulink" activeClassName="Active"><span>Notifications</span>  </NavLink>
            <NavLink to="../autorisation" className="menulink" activeClassName="Active"><span>Autorisations</span>  </NavLink>
        </div>

    )
}

export default Gauche;