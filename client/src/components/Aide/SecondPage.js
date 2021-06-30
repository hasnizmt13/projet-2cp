import "../services/commun//Style_sheet.css"

const SecondPage = () => {

    return (
        <div className="partie-milieu">
            <h2> Première utilisation </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> C'est quoi SM ESI? </h4>
                    <p> SM ESI est un espace partagé entre les employés de l'ESI, plus précisemment les employés </p>
                    <p> de service financier.</p>
                    <p> Cet espace est dévisé en  quatre sous espace qu'on appele services, chaqu'un réalise un </p>
                    <p> travail précis à travars le remplissage </p>
                    <p> des formulaires liés à des dossiers qui passent par un ordre fixe dans tous les services.</p>
                    <p> Pour plus de détails à propos des services, descendez en bas.</p>

                </div>
                <div className="paragraph">
                    <h4> Comment me connecter? </h4>
                    <p> La première utilisation, nécessite une connextion via un mail et mot de passe donnée par</p>
                    <p> les orgaisateurs de l'application.</p>
                    <p> L'utilisateur n'a qu'à aller d'un la page d'acceuil, et cliquez sur le boton de connextion, </p>
                    <p> ainsi il va remplir le formulaire.</p>

                </div>
                <div className="paragraph">
                    <h4> Comment se deconnecter?</h4>
                    <p> Si l'utilisateur ne travail pas sur une machine personnelle est sur, il va étre obligé de  </p>
                    <p> se deconnecter de son compte, pour cela il n'a qu'à aller à la bulle de son profil, </p>
                    <p> cliquez sur cette dernière, ensuite choisir deconnecter.</p>

                </div>

            </div>

        </div>
    )
};
export default SecondPage;