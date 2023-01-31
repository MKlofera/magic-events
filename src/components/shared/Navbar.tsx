// @ts-ignore
import React from 'react'

import AboveNavBarRow from "./AboveNavBarRow";

export default function Navbar() {

    const urlPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1')

    return (
        <div>
            <AboveNavBarRow/>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand logo-text" href="./">Magic Events</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className={`nav-item ${urlPath === "pronajem-cateringu" ? "active" : ""}`}>
                            <a className="nav-link" href="pronajem-cateringu">Poptávka cateringu</a>
                        </li>
                        <li className={`nav-item ${urlPath === "koktejlovy-bar" ? "active" : ""}`}>
                            <a className="nav-link" href="koktejlovy-bar">Koktejlový bar <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={`nav-item ${urlPath === "pronajem-vybaveni" ? "active" : ""}`}>
                            <a className="nav-link" href="pronajem-vybaveni">Pronájem vybavení</a>
                        </li>
                        <li className={`nav-item ${urlPath === "shisha-lounge" ? "active" : ""}`}>
                            <a className="nav-link" href="shisha-lounge">Shisha Lounge</a>
                        </li>
                        <li className={`nav-item ${urlPath === "poradatelske-sluzby" ? "active" : ""}`}>
                            <a className="nav-link" href="poradatelske-sluzby">Pořadatelské služby</a>
                        </li>
                        <li className={`nav-item ${urlPath === "galerie" ? "active" : ""}`}>
                            <a className="nav-link" href="galerie">Galerie</a>
                        </li>
                        <li className={`nav-item ${urlPath === "kontakt" ? "active" : ""}`}>
                            <a className="nav-link" href="kontakt">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}
