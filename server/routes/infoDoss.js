const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const router2 = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projet_bdd'
})


var nmrDoss ={}
var resDoss = []
router2.post('/doss/' ,async (req , res) => {
    nmrDoss.numero = 1;
    db.query("INSERT INTO services SET `nmr_dossier_sm`=DEFAULT " , (err , ress) => {
        if(err) {console.log(err.message)}
        else {console.log('INSERTION EFFECTUE')}
    })
    db.query("INSERT INTO doss_marche SET `nmr_dossier`=DEFAULT " , (errorr , rs) => {
        if(errorr) {console.log(errorr.message)}
        else {console.log('INSERTION EFFECTUE')}
    })
    //TAILLE
    db.query("SELECT COUNT(*) AS taille FROM doss_marche " , (errr , resss) =>{
        if(errr){console.log(errr.message)}
        else{
        console.log("taille doss" ,resss[0].taille)
        taille = resss[0].taille
        }  
    })
        // RECUPERATION
    db.query("SELECT nmr_dossier FROM doss_marche" , (error , results) =>{
        if(error){console.log("ERR DOSS SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            if (resDoss == []) {
                for (let pas = 0; pas < taille ; pas++) { 
                resDoss.push(results[pas].nmr_dossier)
                }
            }else{resDoss.push(results[taille-1].nmr_dossier)}
            
            //affichmarch()
            console.log('resdos insert',resDoss);
        }
    })
})
function affichmarch () {
    resDoss = []
        // LA TAILLE 
    db.query("SELECT COUNT(*) AS taille FROM doss_marche " , async (errr , resss) =>{
        if(errr){console.log(errr.message)}
        else{
        console.log("taille doss" ,resss[0].taille)
        taille = resss[0].taille
        }  
    })
        // RECUPERATION
    db.query("SELECT nmr_dossier FROM doss_marche" , async (error , results) =>{
        if(error){console.log("ERR DOSS SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let pas = 0; pas < taille ; pas++) { 
                resDoss.push(results[pas].nmr_dossier)
            }
            console.log('resdos fonction ',resDoss);
        }
    })
    return resDoss;
}

// var notif
var notif_cmnde = []
router2.post('/marche/', (req, res) => {
    
    const lmtt = req.body.lmdt
    const desci = req.body.desic
    const trr = req.body.tr
    const dt2 = req.body.date2
    const dt1 = req.body.date1
    const tp = req.body.type
    const objt = req.body.objet
    const fournisseur = req.body.frnssr
    const rsp = req.body.respo
    const nm = req.body.num
    const dsc = req.body.desc 
    const numeroDoss = req.body.nm
    const send = req.body.env

    const sqlinsert = "UPDATE services SET `date_de_lancement_sm`=? , `type_de_prestation`=? , objet=? , fournisseur=? , `responsable_de_dossier_sm`=? , `nmr_de_convention`=? , `observation_sm`=? , `duree_de_traitement_de_dossier_sm`=? , `decision_sm`=? , `date_de_transmission_au_scm`=? , `date_douverture_sm`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt1, tp, objt, fournisseur, rsp, nm, dsc, lmtt, desci, trr, dt2], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })
    
    if (send == true){
        const num = numeroDoss
        var taille = 0
        console.log(num)
        // INSERTION
        db.query('INSERT INTO notif_mar_cmnd SET nmr_dossier=?', [num] , async (err,ress) => {
            if(err) {console.log(err.message)}
            else {console.log('INSERT')}
        })
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_mar_cmnd " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_mar_cmnd" , async (error , results) =>{
            if(error){console.log(error.message)}
            else {  
                console.log("taille 2 = " ,taille)
                if (notif_cmnde == []) {
                    for (let pas = 0; pas < taille ; pas++) { 
                    notif_cmnde.push(results[pas].nmr_dossier)
                    }
                }else{notif_cmnde.push(results[taille-1].nmr_dossier)}
                console.log("notif_cmnde : ",notif_cmnde)
            }
        })
        // SUPPRESSION DE LA NOTIF DU SERVICE PREC
        }
})

function affichcmnde () {
    notif_cmnde = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_mar_cmnd " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_mar_cmnd" , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let pas = 0; pas < taille ; pas++) { 
                notif_cmnde.push(results[pas].nmr_dossier)
            }
            console.log('commande fonction ',notif_cmnde);
        }
        })
    return notif_cmnde;
}

var notif_budget = []
router2.post('/commande/', (req, res) => {
    
    const mdd = req.body.md
    const ttt = req.body.dttr
    const nmcr = req.body.nmb
    const desss = req.body.deciss
    const dtpr = req.body.dtper
    const dt = req.body.date
    const dt2 = req.body.date3
    const nmfape = req.body.nmfp
    const nmfade = req.body.nmfd
    const daco = req.body.dtc
    const nmco = req.body.nmc
    const nmbo = req.body.nmb
    const rsp = req.body.respo
    const mo = req.body.mon
    const ld = req.body.md
    const dsc = req.body.desc 
    const numeroDoss = req.body.nm
    const send = req.body.env

    const sqlinsert = "UPDATE services SET `date_de_reception_scm`=? , `date_facture_proforma_scm`=? , `nmr_facture_proforma_scm`=? , `nmr_facture_difinitive_scm`=? , `date_du_bon_commande`=? , `nmr_bon_commande`=? , `responsable_dossier_scm`=?, `montant_scm`=?, `observation_scm`=?, `nmr_dossier_scm`=?, `date_de_reception_de_la_prestation`=?, `decision_scm`=?, `nmr_de_bon_de_reception_scm`=?, `date_denvoi_au_sb`=?, `duree_de_traitement_dossier_scm`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt, dt2, nmfape, nmfade, daco, nmco, rsp, mo, dsc, numeroDoss, dtpr, desss, nmbo, ttt, mdd], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })
    
    if (send == true){
        const num = numeroDoss
        var taille = 0
        console.log(num)
        // INSERTION
        db.query('INSERT INTO notif_cmnd_budg SET nmr_dossier=?', [num] , async (err,ress) => {
            if(err) {console.log(err.message)}
            else {console.log('INSERT')}
        })
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_cmnd_budg " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
         // RECUPERATION
         db.query("SELECT nmr_dossier FROM notif_cmnd_budg" , async (error , results) =>{
            if(error){console.log(error.message)}
            else {  
                console.log("taille 2 = " ,taille)
                if (notif_budget == []) {
                    for (let pas = 0; pas < taille ; pas++) { 
                        notif_budget.push(results[pas].nmr_dossier)
                    }
                }else{notif_budget.push(results[taille-1].nmr_dossier)}
                console.log("notif_budget : ",notif_budget)
            }
        })
        // SUPPRESSION DE LA NOTIF DU SERVICE PREC
        db.query("DELETE FROM notif_mar_cmnd WHERE nmr_dossier=?",num)
    }
})

function affichbudget () {
    notif_budget = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_cmnd_budg " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_cmnd_budg" , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let pas = 0; pas < taille ; pas++) { 
                notif_budget.push(results[pas].nmr_dossier)
            }
            console.log('budget fonction ',notif_budget);
        }
    })
    return notif_budget;
}
var notif_compt = []
router2.post('/budget/', (req, res) => {
    
    const dt2 = req.body.datetr
    const dt = req.body.date
    const rsp = req.body.respo
    const dtcf = req.body.datecf
    const dtvs = req.body.datevisa
    const dtmnd = req.body.datemend
    const mtf = req.body.motif
    const dsc = req.body.desc
    const ld = req.body.md 
    const numeroDoss = req.body.nm
    const send = req.body.env

    const sqlinsert = "UPDATE services SET `date_de_reception_sb`=? , `responsable_dossier_sb`=? , `date_dengagement_au_cf`=? , `date_de_Visa_ou_rejet_definitif_du_controleur_financier`=? , `date_de_mandatement`=? , `motif_de_rejet_eventuel_sb`=?, `observation_sb`=?, `date_de_transmission_au_ac`=?, `nmr_dossier_sb`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt, rsp, dtcf, dtvs, dtmnd, mtf, dsc, dt2, numeroDoss], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })

    if (send == true){
        const num = numeroDoss
        var taille = 0
        console.log(num)
        // INSERTION
        db.query('INSERT INTO notif_budg_cmpt SET nmr_dossier=?', [num] , async (err,ress) => {
            if(err) {console.log(err.message)}
            else {console.log('INSERT')}
        })
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_budg_cmpt " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
         // RECUPERATION
         db.query("SELECT nmr_dossier FROM notif_budg_cmpt" , async (error , results) =>{
            if(error){console.log(error.message)}
            else {  
                console.log("taille 2 = " ,taille)
                if (notif_compt == []) {
                    for (let pas = 0; pas < taille ; pas++) { 
                        notif_compt.push(results[pas].nmr_dossier)
                    }
                }else{notif_compt.push(results[taille-1].nmr_dossier)}
                console.log("compt : ",notif_compt)
            }
        })
        // SUPPRESSION DE LA NOTIF DU SERVICE COURANT
        db.query("DELETE FROM notif_cmnd_budg WHERE nmr_dossier=?",num)
    }
})

function affichcompt () {
    notif_compt = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_budg_cmpt " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_budg_cmpt" , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let pas = 0; pas < taille ; pas++) { 
                notif_compt.push(results[pas].nmr_dossier)
            }
            console.log('comptable fonction ',notif_compt);
        }
    })
    return notif_compt;
}

router2.post('/comptable/', (req, res) => {
    
    const cbn = req.body.cbn
    const dsscc = req.body.desiis
    const dt = req.body.date
    const rsp = req.body.respo
    const cmplt = req.body.completer
    const cmplmt = req.body.datecomplement
    const py = req.body.datepay
    const dsc = req.body.desc
    const ld = req.body.md 

    const numeroDoss = req.body.nm
    const send = req.body.env

    const sqlinsert = "UPDATE services SET `date_reception_ac`=? , `responsable_dossier_ac`=? , `pieces_a_completer`=? , `date_complement_dossier`=? , `date_de_paiment_ac`=? , `decision_acp_ou_rej_ac`=?, `nmr_dossier_ac`=?, `observation_ac`=?, 'cbn'=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt, rsp, cmplt, cmplmt, py, dsscc, numeroDoss,dsc, cbn], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })

    if (send == true){
        const num = numeroDoss
        // SUPPRESSION DE LA NOTIF DU SERVICE COURANT
        db.query("DELETE FROM notif_budg_cmpt WHERE nmr_dossier=?",num)
    }
})


// NOUVEAU DOSSIER COMMANDE 
router2.post('/nouvcmnd',(req , res) => {
    var position = 0
    var taille2
    //INSERER DANS SERVICE MARCHE
    db.query("INSERT INTO services SET `nmr_dossier_sm`=DEFAULT " , (err , ress) => {
        if(err) {console.log(err.message)}
        else {console.log('INSERTION EFFECTUE')}
    })
    // RECUPERER POSITION 
    db.query(" SELECT nmr_dossier_sm FROM services WHERE nmr_dossier_sm = ( SELECT  MAX(`nmr_dossier_sm`) FROM services)" , async (errrr,resss) =>{
        if(errrr){console.log(errrr.message)}
        else{
             position = resss[0].nmr_dossier_sm
             // AFFICHER DANS TABLE COMMANDE
             db.query("INSERT INTO notif_mar_cmnd SET `nmr_dossier`=?",[position], (errorr , rs) => {
                if(errorr) {console.log(errorr.message)}
                else {console.log('INSERTION COMMANDE')}
            })
            // INSERER DANS SERVICE COMMANDE
            db.query("UPDATE services SET `nmr_dossier_scm`=? WHERE nmr_dossier_sm =?" ,[position,position], (errrr , ressss) => {
            if(errrr) {console.log(errrr.message)}
            else {console.log('INSERTION SERVICE')}
            })
        }
    })     
 
    // RECUPERER LA TAILLE DU COMMANDE 
    db.query("SELECT COUNT(*) AS taille FROM notif_mar_cmnd " , async (errr , resss) =>{
        if(errr){console.log(errr.message)}
        else{
            taille2 = resss[0].taille
        }  
    })
    // AFFICHER DANS L'APP
    db.query("SELECT nmr_dossier FROM notif_mar_cmnd" , async (error , results) =>{
        if(error){console.log(error.message)}
        else {  
            if (notif_cmnde == []) {
                for (let pas = 0; pas < taille2 ; pas++) { 
                notif_cmnde.push(results[pas].nmr_dossier)
                }
            }else{notif_cmnde.push(results[taille2-1].nmr_dossier)}
            console.log("notif_cmnde : ",notif_cmnde)
        }
    })

})

/*router2.post('/archive/', (req, res) => {
    
    const numDs = req.body.nmds*/


/************************* */
router2.post('/cbn/', (req, res) => {
    
    const cbn = req.body.cbn
    const numeroDoss = req.body.numero

    const sqlinsert = "UPDATE services SET `cbn`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [cbn], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('cbn registered')
        }
    })
})

var notif_archv = []
function afficharchv () {
    const la = 1
    notif_archv = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM services WHERE cbn = "+la , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille arr " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier_sm FROM services WHERE cbn = "+la , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 arr = " ,taille)
            for (let pas = 0; pas < taille ; pas++) { 
                notif_archv.push(results[pas].nmr_dossier_sm)
            }
            console.log('archv fonction ',notif_archv);
        }
    })
    return notif_archv;
}

var infar = {}
router2.post('/archv/', async(req, res) => {

    const nm = req.body.nume

    infar.dateLanc = "",
    infar.dateOuv = "",
    infar.type = "",
    infar.objet = "",
    infar.four = "",
    infar.respo1 = "",
    infar.decis1 = "",
    infar.numConv = "",
    infar.obs1 = "",
    infar.dateTr1 = "",
    infar.duree = "",
    infar.dateRec1 = "",
    infar.respo2 = "",
    infar.decis2 = "",
    infar.obs2 = "",
    infar.numFac = "",
    infar.dateFac = "",
    infar.montant = "",
    infar.numBon = "",
    infar.dateRecPr = "",
    infar.numFacDef = "",
    infar.numBonRec = "",
    infar.dateTr2 = "",
    infar.duree2 = "",
    infar.dateRec2 = "",
    infar.respo3 = "",
    infar.obs3 = "",
    infar.dateCF = "",
    infar.motif = "",
    infar.dateVisa = "",
    infar.dateMend = "",
    infar.dateTr3 = "",
    infar.duree3 = "",
    infar.dateRec3 = "",
    infar.respo4 = "",
    infar.decis3 = "",
    infar.piece = "",
    infar.dateCompl = "",
    infar.datePay = "",
    infar.obs4 = "",
    infar.dateTr4 = "",
    infar.duree4 = "",

    //console.log("laaa ca marche !!")
    afficharchv ()
    db.query('SELECT * FROM services WHERE nmr_dossier_sm = ?', [nm], async (error, results) => {
        if (error) {
            console.log(error.message)
        } else{ console.log(results[0])}
        if ( (results.length == 0) ) {
            console.log('pas de dossiers termines !!')
        } else {
            /////////
            ////////

            infar.dateLanc = results[0].date_de_lancement_sm
            infar.dateOuv = results[0].date_douverture_sm,
            infar.type = results[0].type_de_prestation
            infar.objet = results[0].objet
            infar.four = results[0].fournisseur
            infar.respo1 = results[0].responsable_de_dossier_sm
            infar.decis1 = results[0].decision_sm
            infar.numConv = results[0].nmr_de_convention
            infar.obs1 = results[0].observation_sm
            infar.dateTr1 = results[0].date_de_transmission_au_scm
            infar.duree = results[0].duree_de_traitement_de_dossier_sm
            infar.dateRec1 = results[0].date_de_reception_scm
            infar.respo2 = results[0].responsable_dossier_scm
            infar.decis2 = results[0].decision_scm
            infar.obs2 = results[0].observation_scm
            infar.numFac = results[0].nmr_facture_proforma_scm
            infar.dateFac = results[0].date_facture_proforma_scm
            infar.montant = results[0].montant_scm
            infar.numBon = results[0].nmr_bon_commande
            infar.dateRecPr = results[0].date_de_reception_de_la_prestation
            infar.numFacDef = results[0].nmr_facture_difinitive_scm
            infar.numBonRec = results[0].nmr_de_bon_de_reception_scm
            infar.dateTr2 = results[0].date_denvoi_au_sb
            infar.duree2 = results[0].duree_de_traitement_dossier_scm
            infar.dateRec2 = results[0].date_de_reception_sb
            infar.respo3 = results[0]. responsable_dossier_sb
            infar.obs3 = results[0].observation_sb
            infar.dateCF = results[0].date_dengagement_au_cf
            infar.motif = results[0].motif_de_rejet_eventuel_sb
            infar.dateVisa = results[0].date_de_Visa_ou_rejet_definitif_du_controleur_financier 
            infar.dateMend = results[0].date_de_mandatement
            infar.dateTr3 = results[0].date_de_transmission_au_ac
            infar.duree3 = results[0].duree_de_traitement_dossier_sb
            infar.dateRec3 = results[0].date_reception_ac
            infar.respo4 = results[0].responsable_dossier_ac
            infar.decis3 = results[0].decision_acp_ou_rej_ac 
            infar.piece = results[0].pieces_a_completer
            infar.dateCompl = results[0].date_complement_dossier
            infar.datePay = results[0].date_de_paiment_ac
            infar.obs4 = results[0].observation_ac
            infar.dateTr4 = results[0].duree_de_traitement_ac
            infar.duree4 = results[0].duree_de_traitement_ac
            console.log(infar)
        }
    })
})
/***************************** */


affichmarch();
affichcmnde();
affichbudget();
affichcompt();
afficharchv ()
module.exports ={router2 , nmrDoss , resDoss , notif_cmnde , notif_budget , notif_compt , notif_archv , infar}