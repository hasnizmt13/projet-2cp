import { useState, useEffect, useRef } from 'react'
import './MilieuForm.css'
import Footer from "../services/commun/Footer.js"
import Droite from "../services/commun/Droite.js"
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
const MilieuForm = ({numDoss}) => {
    const [values, setValues] = useState({
        dateLanc: "",
        dateOuv: "",
        type: "",
        objet: "",
        four: "",
        respo1: "",
        decis1: "",
        numConv: "",
        obs1: "",
        dateTr1: "",
        duree: "",
        dateRec1: "",
        respo2: "",
        decis2: "",
        obs2: "",
        numFac: "",
        dateFac: "",
        montant: "",
        numBon: "",
        dateRecPr: "",
        numFacDef: "",
        numBonRec: "",
        dateTr2: "",
        duree2: "",
        dateRec2: "",
        respo3: "",
        obs3: "",
        dateCF: "",
        motif: "",
        dateVisa: "",
        dateMend: "",
        dateTr3: "",
        duree3: "",
        dateRec3: "",
        respo4: "",
        decis3: "",
        piece: "",
        dateCompl: "",
        datePay: "",
        obs4: "",
        dateTr4: "",
        duree4: ""
    })
    useEffect(() => {
        fetch("/infor/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setValues({...values,
                    dateLanc: jsonRes.archiveInfo.dateLanc,
                    dateOuv: jsonRes.archiveInfo.dateOuv,
                    type: jsonRes.archiveInfo.type,
                    objet: jsonRes.archiveInfo.objet,
                    four: jsonRes.archiveInfo.four,
                    respo1: jsonRes.archiveInfo.respo1,
                    decis1: jsonRes.archiveInfo.decis1,
                    numConv: jsonRes.archiveInfo.numConv,
                    obs1: jsonRes.archiveInfo.obs1,
                    dateTr1: jsonRes.archiveInfo.dateTr1,
                    duree: jsonRes.archiveInfo.duree,
                    dateRec1: jsonRes.archiveInfo.dateRec1,
                    respo2: jsonRes.archiveInfo.respo2,
                    decis2: jsonRes.archiveInfo.decis2,
                    obs2: jsonRes.archiveInfo.obs2,
                    numFac: jsonRes.archiveInfo.numFac,
                    dateFac: jsonRes.archiveInfo.dateFac,
                    montant: jsonRes.archiveInfo.montant,
                    numBon: jsonRes.archiveInfo.numBon,
                    dateRecPr: jsonRes.archiveInfo.dateRecPr,
                    numFacDef: jsonRes.archiveInfo.numFacDef,
                    numBonRec: jsonRes.archiveInfo.numBonRec,
                    dateTr2: jsonRes.archiveInfo.dateTr2,
                    duree2: jsonRes.archiveInfo.duree2,
                    dateRec2: jsonRes.archiveInfo.dateRec2,
                    respo3: jsonRes.archiveInfo.respo3,
                    obs3: jsonRes.archiveInfo.obs3,
                    dateCF: jsonRes.archiveInfo.dateCF,
                    motif: jsonRes.archiveInfo.motif,
                    dateVisa: jsonRes.archiveInfo.dateVisa,
                    dateMend: jsonRes.archiveInfo.dateMend,
                    dateTr3: jsonRes.archiveInfo.dateTr3,
                    duree3: jsonRes.archiveInfo.duree3,
                    dateRec3: jsonRes.archiveInfo.dateRec3,
                    respo4: jsonRes.archiveInfo.respo4,
                    decis3: jsonRes.archiveInfo.decis3,
                    piece: jsonRes.archiveInfo.piece,
                    dateCompl: jsonRes.archiveInfo.dateCompl,
                    datePay: jsonRes.archiveInfo.datePay,
                    obs4: jsonRes.archiveInfo.obs4,
                    dateTr4: jsonRes.archiveInfo.dateTr4,
                    duree4: jsonRes.archiveInfo.duree4
                }) 
            }
                 
            
        })
        
        
    })
    const pdfExportComponent = useRef(null);
    function handleExport(event){
        pdfExportComponent.current.save();
    }
    var name = "Dossier n°"+ numDoss
    return (
        
        <div className="MilieuForm-container">
            <div className="head">
                <div className="head-top">
                    <h1>Contenu du dossier n°{numDoss}</h1>
                    <span onClick={handleExport} className="download">
                        Telecharger !
                    </span>
                </div>
                <span className="text">
                    vous pouvez voir toutes les informations des formulaires dans les quatres services et vous pouvez egalement consulter tout les fichiers
                    de ce dossier
                </span>
                    
            </div>
            <PDFExport ref={pdfExportComponent} paperSize="A4" fileName={name} forcePageBreak=".tab2">
            <div className="marche-tab tab">
                <h3 className="title">Service Marche</h3>
                <div className="tab-container">
                    <table className="ta">
                        <tr className="row">
                            <td>Date lancement</td>
                            <td>{values.dateLanc}</td>
                        </tr>
                        <tr className="row">
                            <td>Date d'ouverture</td>
                            <td>{values.dateOuv}</td>
                        </tr>
                        <tr className="row">
                            <td>Type du dossier</td>
                            <td>{values.type}</td>
                        </tr>
                        <tr className="row">
                            <td>Objet</td>
                            <td>{values.objet}</td>
                        </tr>
                        <tr className="row">
                            <td>Fournisseur</td>
                            <td>{values.four}</td>
                        </tr>
                        <tr className="row">
                            <td>Responsable</td>
                            <td>{values.respo1}</td>
                        </tr>
                        <tr className="row">
                            <td>Décision</td>
                            <td>{values.decis1}</td>
                        </tr>
                        <tr className="row">
                            <td>Numéro de convention</td>
                            <td>{values.numConv}</td>
                        </tr>
                        <tr className="row">
                            <td>Observation</td>
                            <td>{values.obs1}</td>
                        </tr>
                        <tr className="row">
                            <td>Date transfert</td>
                            <td>{values.dateTr1}</td>
                        </tr>
                        <tr className="row">
                            <td>Duree</td>
                            <td>{values.duree}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="commande-tab tab tab2">
            <h3 className="title">Service Commande</h3>
                <div className="tab-container">
                    <table className="ta">
                        <tr className="row">
                            <td>Date récéption</td>
                            <td>{values.dateRec1}</td>
                        </tr>
                        <tr className="row">
                            <td>Responsable</td>
                            <td>{values.respo2}</td>
                        </tr>
                        <tr className="row">
                            <td>Décision</td>
                            <td>{values.decis2}</td>
                        </tr>
                        <tr className="row">
                            <td>Observation</td>
                            <td>{values.obs2}</td>
                        </tr>
                        <tr className="row">
                            <td>Numéro de facture</td>
                            <td>{values.numFac}</td>
                        </tr>
                        <tr className="row">
                            <td>Date de facture</td>
                            <td>{values.dateFac}</td>
                        </tr>
                        <tr className="row">
                            <td>Montant</td>
                            <td>{values.montant}</td>
                        </tr>
                        <tr className="row">
                            <td>Numero du bon</td>
                            <td>{values.numBon}</td>
                        </tr>
                        <tr className="row">
                            <td>Date réception perofrma</td>
                            <td>{values.dateRecPr}</td>
                        </tr>
                        <tr className="row">
                            <td>Numero facture defenitive</td>
                            <td>{values.numFacDef}</td>
                        </tr>
                        <tr className="row">
                            <td>Numero bon réception</td>
                            <td>{values.numBonRec}</td>
                        </tr>
                        <tr className="row">
                            <td>Date transmission service budget</td>
                            <td>{values.dateTr2}</td>
                        </tr>
                        <tr className="row">
                            <td>Duree</td>
                            <td>{values.duree2}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="budget-tab tab tab2">
            <h3 className="title">Service Budget</h3>
                <div className="tab-container">
                    <table className="ta">
                        <tr className="row">
                            <td>Date reception dossier</td>
                            <td>{values.dateRec2}</td>
                        </tr>
                        <tr className="row">
                            <td>Responsable</td>
                            <td>{values.respo3}</td>
                        </tr>
                        <tr className="row">
                            <td>Observation</td>
                            <td>{values.obs3}</td>
                        </tr>
                        <tr className="row">
                            <td>Date CF</td>
                            <td>{values.dateCF}</td>
                        </tr>
                        <tr className="row">
                            <td>Motif VISA/rejet</td>
                            <td>{values.motif}</td>
                        </tr>
                        <tr className="row">
                            <td>Date VISA</td>
                            <td>{values.dateVisa}</td>
                        </tr>
                        <tr className="row">
                            <td>Date mend</td>
                            <td>{values.dateMend}</td>
                        </tr>
                        <tr className="row">
                            <td>Date transmission au service comptabilité</td>
                            <td>{values.dateTr3}</td>
                        </tr>
                        <tr className="row">
                            <td>Duree</td>
                            <td>{values.duree3}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="comptable-tab tab tab2">
            <h3 className="title">Service Comptable</h3>
                <div className="tab-container">
                    <table className="ta">
                        <tr className="row">
                            <td>Date récéption</td>
                            <td>{values.dateRec3}</td>
                        </tr>
                        <tr className="row">
                            <td>Responsable du dossier</td>
                            <td>{values.respo4}</td>
                        </tr>
                        <tr className="row">
                            <td>Décision</td>
                            <td>{values.decis3}</td>
                        </tr>
                        <tr className="row">
                            <td>Piece a completer</td>
                            <td>{values.piece}</td>
                        </tr>
                        <tr className="row">
                            <td>Date completer</td>
                            <td>{values.dateCompl}</td>
                        </tr>
                        <tr className="row">
                            <td>Date de payement</td>
                            <td>{values.datePay}</td>
                        </tr>
                        <tr className="row">
                            <td>Observation</td>
                            <td>{values.obs4}</td>
                        </tr>
                        <tr className="row">
                            <td>Date fin</td>
                            <td>{values.dateTr4}</td>
                        </tr>
                        <tr className="row">
                            <td>Duree</td>
                            <td>{values.duree4}</td>
                        </tr>
                    </table>
                </div>
            </div>
            </PDFExport>
        </div>
    )
}

export default MilieuForm
