import React, { useState } from 'react'
import './Header.css'
import {Link , useLocation } from 'react-router-dom'

const Header = () =>{
    const [ShowHamburgerMenu,SetHamburgerMenu] = useState(false);
    const [IsUp,SetIsUp] = useState(true);

    window.addEventListener("scroll",()=>{
        let scrolled = window.scrollY;
        if(scrolled===0 && IsUp===false)
            SetIsUp(true);
        else
            if(scrolled!==0 && IsUp===true)
                SetIsUp(false);
    })


    let Location = useLocation();

    const SetHeaderClasses=()=>{
        if(Location.pathname==='/')
            return IsUp?"Header isUpHome": "Header";
        else
            return IsUp?"Header isUp": "Header"
    }

    return (
        <div className={SetHeaderClasses()}>
            <h1 className="Logo">Dulce Amărui</h1>
            <div className={ShowHamburgerMenu ? "Hamburger showX" : "Hamburger"}  onClick={()=>SetHamburgerMenu(!ShowHamburgerMenu)}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <ul className={ShowHamburgerMenu ? "Nav ShowMenu":"Nav HideMenu"}>
                <Link to='/' className="nav-links"><li className={Location.pathname === "/" ? "selected" : ""}>Acasă</li></Link>
                <Link to='/Despre' className="nav-links"><li className={Location.pathname === "/Despre" ? "selected" : ""}>Despre</li></Link>
                <Link to='/Produse' className="nav-links"><li className={Location.pathname === "/Produse" ? "selected" : ""}>Produse</li></Link>
                <Link to='/Contact' className="nav-links"><li className={Location.pathname === "/Contact" ? "selected" : ""}>Contact</li></Link>

            </ul>
        </div>

    );
}

/*ShowHamburgerMenu ? "Nav ShowMenu" :"Nav HideMenu"*/
export default Header;