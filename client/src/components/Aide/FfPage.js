import "../services/commun//Style_sheet.css"

const FfPage = () => {

    return (
        <div className="partie-milieu">
            <h2> Dossiers et notifications </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h3> Dossiers</h3>
                    <h4> Qui peut créer un nouveau dossier?</h4>

                    <h4> Qui peut annuler un dossier ?</h4>
                </div>
                <div className="paragraph">
                    <h3> Espace partagé entre tous les services </h3>

                    <h4> Consultation :</h4>

                    <h4> Archive :</h4>

                    <h4> Statistiques :</h4>
                </div>
                <div className="paragraph">
                    <h3> Notifications </h3>

                    <h4> Reception des notifications : </h4>

                    <h4> Notifications par mail : </h4>
                </div>
            </div>

        </div>
    )
};
export default FfPage;