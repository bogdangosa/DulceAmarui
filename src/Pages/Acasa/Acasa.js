import React from 'react'
import './Acasa.css'
import Button from '../Shared/Button/Button'
import Poza from './Images/bghome.jpg'
import {Link} from 'react-router-dom'

const CardComponent = (props) =>{
    return(
        <div className="CardComponent">
            <img src={Poza} alt="not working"/>
            <div className="OverLapHome"></div>
            <h1 className="CardTitle">{props.Title}</h1>
            <p className="CardText">   Morbi fringilla vehicula
            volutpat. Donec ac risus placerat, placerat justo 
            nec, sollicitudin quam. Phasellus in magna varius,
            luctus est sed, fringilla nisi. Pellentesque
            metus purus, faucibus ut augue id, vulputate 
            sodales metus.</p>
        </div>
    );
}

const Acasa = () =>{
    return (
        <div className="Acasa">
            <div className="Section AcasaSection">
                <h1 className="AcasaTitle">Dulce Amărui</h1>
                <p className="AcasaText">vinzi si cumperi ceti doresti</p>

            </div>
            <div className="Section DespreAcasaSection">
                <div className="DespreAcasaBackground"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className="VerticalBezierCurve"><path fill="#EB6262" fillOpacity="1" d="M246.27,-3.65 C166.70,72.32 289.16,67.40 236.11,153.25 L-0.90,154.24 L-3.15,-4.64 Z"></path></svg>
                <div className="TextSection">
                    <h1 className="AcasaMiniTitle">Despre Noi</h1>
                    <p className="AcasaText">Morbi fringilla vehicula volutpat. 
                    Donec ac risus placerat, placerat 
                    justo nec, sollicitudin quam. 
                    Phasellus in magna varius, luctus est sed,
                    fringilla nisi. Pellentesque metus purus,
                    faucibus ut augue id, vulputate sodales metus. </p>
                    <Link to='/Despre' className="Links"><Button Text="Mai Mult" className="DespreButton"/></Link>
                </div>
            </div>
            <div className="Section ProduseAcasaSection">
                <div className="RectangleR"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="HorizontalBezierCurve"><path fill="#EB6262" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,85.3C840,53,960,43,1080,80C1200,117,1320,203,1380,245.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                
                <h1 className="AcasaMiniTitle MiniTitleProduse">Produse</h1>

                <div className="CardContainer">
                    <CardComponent Title="Torturi"/>
                    <CardComponent Title="Prajituri"/>
                    <CardComponent Title="Stelute"/>                    
                </div>

            </div>
            

        </div>
    );
}

export default Acasa;