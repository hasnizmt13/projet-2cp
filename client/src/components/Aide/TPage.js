import "../services/commun//Style_sheet.css"

const TPage = () => {

    return (
        <div className="partie-milieu">
            <h2>  Services </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> C'est quoi service pour SM ESI? </h4>
                    <p> Pour l'application web SM ESI, un service est un espace partagé, ou tout les utilisateur ont </p>
                    <p> droits aux meme fonctionnalités.    </p>
                    <p> Il y a principalement quatre services, et l'utilisateur aprés sa connextion va etre rediriger </p>
                    <p> automatiquemnt vers l'un des service.</p>

                </div>
                <div className="paragraph">
                    <h4> Service marchés : </h4>
                </div>
                <div className="paragraph">
                    <h4> Service commandes : </h4>
                </div>


                <div className="paragraph">
                    <h4> Service budget : </h4>
                </div>
                <div className="paragraph">
                    <h4> Service agence comptable : </h4>
                </div>
            </div>

        </div>
    )
};
export default TPage;