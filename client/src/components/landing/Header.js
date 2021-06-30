import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify as fa } from '@fortawesome/free-solid-svg-icons'
import logoimg from "../../images/lo.svg"
const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo-container">
                    <a href="/">
                        <img src={logoimg} height="40" className="lg"/>
                    </a>
                </div>
                <ul className="navbar">
                    
                    <li className="nav-el">
                        <a href="" className="hero nav-btn">Nos services</a>
                    </li>
                    <li className="nav-el">
                        <a href="/settings" className="about nav-btn">Comment ça marche</a>
                    </li>
                    <li className="nav-el">
                        <a href="/signup" className="contact nav-btn">Aide</a>
                    </li>
                    <li className="nav-el log">
                        <a href="/login" className="login nav-btn">Se connecter</a>
                    </li>
                    <li className="check">
                        <FontAwesomeIcon icon={fa} className="fa" />
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header;