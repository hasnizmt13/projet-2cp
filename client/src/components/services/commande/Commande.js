import Header from "../commun/Header.js"
import Droite from "../commun/Droite.js"
import Milieuc from "./Milieuc"
import Footer from "../../landing/Footer.js"
import { useState, useEffect } from 'react'
const Commande = () => {
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    useEffect(() => {
        fetch("/users/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setUserInfo({...userInfo,
                    id: jsonRes.information.id,
                    nom : jsonRes.information.nom,
                    prenom : jsonRes.information.prenom,
                    email : jsonRes.information.email,
                    psswrd : jsonRes.information.psswrd,
                    service : jsonRes.information.service,
                    role : jsonRes.information.role,
                    CT : jsonRes.information.CT
                }) 
            }
                 
            
        })   
        
    })
    const [num, setNum] = useState([])
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNum(jsonRes.infor.commandeDoss)
            }
        })
    })
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={userInfo.service} num={num} />
            <div className="noyeau-marche">
                <Droite serviceinfo={userInfo.service} />
                <Milieuc userInfo={userInfo} />
            </div>
            <Footer />
        </div>
    )
}
export default Commande;