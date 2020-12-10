import React from 'react'
import './Contact.css'

const Contact = () => {
    return(
        <div className="Contact">
            <h1 className="ContactTitle">Contact</h1>
            <div className="ContactInfo">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11222.43989684143!2d23.45915112765569!3d46.63563668216343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749169c3d978f27%3A0xef1b12249b909826!2sLita%20407508!5e0!3m2!1sro!2sro!4v1607533147561!5m2!1sro!2sro" aria-hidden="false" ></iframe>
                <div className="ContactBars">
                    <p className="ContactBar">Telefon:  0740556250</p>
                    <p className="ContactBar">Adresa:  Lita</p>
                    <p className="ContactBar">Email: silrox@yahoo.com</p>
                </div>
            </div>
        </div>
    );   
}


export default Contact;