import Hero from "./components/landing/Hero.js"
import Sign from "./components/login/Sign.js"
import Signup from "./components/signup/Form.js"
import Archive from "./components/archive/Archive.js"
import ArchiveForm from "./components/archive/ArchiveForm.js"
import Settings from "./components/Parametre/Settings.js"
import SettingsProfil from "./components/Parametre/Compte.js"
import SettingsAuto from "./components/Parametre/Accautorisation"
import SettingsSecu from "./components/Parametre/Securite.js"

import AdminPage from "./components/SuperUser/Administrateur/Administrateur.js"
import Ad from "./components/Aide/Ad.js"
import Savoirplus from "./components/En-Savoir-Plus/Savoirplus.js"


import MarcheForm from "./components/account/marche/Acc.js"
import Marche from "./components/services/marche/Marché.js"
import Commandes from "./components/services/commande/Commande.js"
import Budget from "./components/services/budjet/Budjet.js"
import Comptable from "./components/services/comptabilite/Comptable.js"
import BudgetForm from "./components/account/budget/Acc.js"
import CommandeForm from "./components/account/commandes/Acc.js"
import ComptableForm from "./components/account/comptable/Acc.js"

import User from "./components/User/User.js"
import Ordonnateur from "./components/SuperUser/Ordonnateur/Ordonnateur.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' exact component={Hero} />
          <Route exact path='/Archive' exact component={Archive} />
          <Route exact path='/login' exact component={Sign} />
          <Route exact path='/signup' exact component={Signup} />
          <Route exact path="/settings" exact component={Settings} />
          <Route exact path='/autorisation' exact component={SettingsAuto} />
          <Route exact path='/profil' exact component={SettingsProfil} />
          <Route exact path='/securite' exact component={SettingsSecu} />
          <Route exact path='/User/:id' exact component={User} />
          
          <Route exact path='/Aide' exact component={Ad} />
          <Route exact path='/En-savoir-plus' exact component={Savoirplus} />

          <Route exact path='/ordonnateur' exact component={Ordonnateur} />
          <Route exact path='/admin' exact component={AdminPage} />
          <Route exact path='/marche' exact component={Marche} />
          <Route exact path='/commande' exact component={Commandes} />
          <Route exact path='/budget' exact component={Budget} />
          <Route exact path='/comptable' exact component={Comptable} />
          <Route exact path='/marche-form/:id' exact component={MarcheForm} />
          <Route exact path='/commande-form/:id' exact component={CommandeForm} />
          <Route exact path='/budget-form/:id' exact component={BudgetForm} />
          <Route exact path='/comptable-form/:id' exact component={ComptableForm} />

          <Route exact path='/archive-form/:id' exact component={ArchiveForm} />

          
        </Switch>
      </Router>
      
  );
}

export default App;
