import Header from "../commun/Header"
import Droite from "../commun/Droite"
import Footer from "../../landing/Footer.js"
import Milieub from "./Milieub"
import { useState, useEffect } from 'react'
const Budjet = () => {
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
                setNum(jsonRes.infor.budgetDoss)
            }
        })
    })
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={userInfo.service} num={num} />
            <div className="noyeau-marche">
                <Droite serviceinfo={userInfo.service} />
                <Milieub userInfo={userInfo} />
            </div>
            <Footer />
        </div>
    )
}
export default Budjet;