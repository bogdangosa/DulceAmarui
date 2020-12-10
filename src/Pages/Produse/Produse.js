import React from 'react'
import './Produse.css'
import ImageFursec from './Images/Fursecuri.jpg'
import ImageTort from './Images/Tort.jpg'
import ImageRafaello from './Images/Rafaello.jpg'
import ImagePrajituri from './Images/Prajituri.jpg'
import ImageStelute from './Images/Stelute.jpg'

const Produs = (props) =>{
    
    const SetImage = () => {
        switch(props.Title){
            case "Fursec":
                return ImageFursec;
            case "Tort":
                return ImageTort;
            case "Rafaello":
                return ImageRafaello;
            case "Prajituri":
                return ImagePrajituri;
            case "Stelute":
                return ImageStelute;    
            default:
                return 0;
        }
    }

    return (
        <div className="ProdusCard">
            <img src={SetImage()} alt="not Working"/>
            <div className="OverLap">
                <h1>{props.Title}</h1>
            </div>
        </div>
    );
}

const Produse = () => {
    return(
        <div className="Produse">
            <h1 className="ProduseTitle">Produse</h1>

            <div className="ProduseContainer">
                <Produs Title="Tort"/>
                <Produs Title="Prajituri"/>
                <Produs Title="Rafaello"/>
                <Produs Title="Fursec"/>
                <Produs Title="Stelute"/>
            </div>

        </div>
    );   
}


export default Produse;