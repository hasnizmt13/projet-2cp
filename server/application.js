const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { urlencoded } = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const application = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projet_bdd'
})

db.connect((err) => {
    if (err) {console.log(err.message)}
    else {console.log("MYSQL connected...")}
})

application.use(cors())
application.use(express.json())
application.use(express.urlencoded({ extended: false}))

///
const all = require('./routes/users')
const authRouter = all.router
const errors = all.errors
const signErrors = all.erreur
const info = all.info

const all2 = require('./routes/infoDoss')
const authRouter2 = all2.router2
const nmrDoss = all2.nmrDoss
const resDoss = all2.resDoss
const notif_cmnde = all2.notif_cmnde
const notif_budget = all2.notif_budget
const notif_compt = all2.notif_compt
const notif_archv = all2.notif_archv
const infar = all2.infar

const all3 = require('./routes/email')
const authRouter3 = all3.router

const all4 = require('./routes/compte')
const authRouter4 = all4.router 
///Define routes
application.use('/', authRouter)
application.use('/', authRouter2)
application.use('/', authRouter3)
application.use('/', authRouter4)


const app = express()
router = express.Router()
var router2 = express.Router()

usersRoute =  (req, res) => {
    res.json({
        erreur: {
            username: signErrors.username,
            userprenom: signErrors.userprenom,
            role: signErrors.role,
            type: signErrors.type,
            email: signErrors.email, 
            password: signErrors.password,
            password2: signErrors.password2
        },
        err: {
            email: errors.email, 
            pass: errors.password
        },
        information: {
            id : info.id,
            nom : info.nom,
            prenom : info.prenom,
            email : info.email,
            psswrd : info.password,
            service : info.service,
            role : info.role,
            CT : info.CT
        }
    })
}

infoRoute = (req, res) => {
    res.json({
        infor: {
            numDoss: nmrDoss.numero,
            marcheDoss: /*[2, 4, 6] ,*/resDoss,
            commandeDoss: notif_cmnde,
            budgetDoss: notif_budget,
            comptableDoss: notif_compt,
            archiveDoss: notif_archv /*[1,2,3,4,5,6,7]*/
        },
        marcheInfo: {
            respo: "morad",
            fournisseur: "yoga",
            objet: "je suis objet"
        },
        archiveInfo: {
            dateLanc: infar.dateLanc,
            dateOuv: infar.dateOuv,
            type: infar.type,
            objet: infar.objet,
            four: infar.four,
            respo1: infar.respo1,
            decis1: infar.decis1,
            numConv: infar.numConv,
            obs1: infar.obs1,
            dateTr1: infar.dateTr1,
            duree: infar.duree,
            dateRec1: infar.dateRec1,
            respo2: infar.respo2,
            decis2: infar.decis2,
            obs2: infar.obs2,
            numFac: infar.numFac,
            dateFac: infar.dateFac,
            montant: infar.montant,
            numBon: infar.numBon,
            dateRecPr: infar.dateRecPr,
            numFacDef: infar.numFacDef,
            numBonRec: infar.numBonRec,
            dateTr2: infar.dateTr2,
            duree2: infar.duree2,
            dateRec2: infar.dateRec2,
            respo3: infar.respo3,
            obs3: infar.obs3,
            dateCF: infar.dateCF,
            motif: infar.motif,
            dateVisa: infar.dateVisa,
            dateMend: infar.dateMend,
            dateTr3: infar.dateTr3,
            duree3: infar.duree3,
            dateRec3: infar.dateRec3,
            respo4: infar.respo4,
            decis3: infar.decis3,
            piece: infar.piece,
            dateCompl: infar.dateCompl,
            datePay: infar.datePay,
            obs4: infar.obs4,
            dateTr4: infar.dateTr4,
            duree4: infar.duree4
        }
    })
}

router.get("/", usersRoute)
app.use("/users/", router)

router2.get("/",infoRoute)
app.use("/infor/",router2)




app.listen(3001, function(){
    console.log("node working")
})
application.listen(3006, () => {
    console.log('running on port 3006')
})