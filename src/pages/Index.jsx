// @ts-ignore
import React, {useState, useEffect} from "react";

import ServicesCard from "../components/pages/index/servicesCard";
import Gallery from "../components/pages/index/Gallery";
import SendEmail from '../components/shared/SendEmail';
import {FaArrowRight} from 'react-icons/fa'


export default function Index() {
    const [OpenSendEmailModal, setOpenSendEmailModal] = useState(false);
    const [selectedService, setSelectedService] = useState(0);

    const OpenSendEmailModalHandler = () => {
        setOpenSendEmailModal(true)
    }
    useEffect(() => {
        console.log(selectedService);
    }, [selectedService]);
    return (
        <React.Fragment>
            <div className={"homepage"}>
                <div className="homepage_textOnImageHolder">
                    <div className="homepage_textOnImage">
                        <h5>Magic Events</h5>
                        <h1>Cateringové služby</h1>
                        <span className="btn btn-dark rounded-pill mx-3 my-2" onClick={()=>{OpenSendEmailModalHandler()}}>Poptávka cateringu <FaArrowRight/></span>
                        <SendEmail
                            show={OpenSendEmailModal}
                            onHide={() => setOpenSendEmailModal(false)}
                        />
                        <a href="" className="btn btn-light rounded-pill mx-3 my-2">Pronájem vybavení</a>
                    </div>
                </div>
            </div>
            <section className="services my-4 container">
                <h1 className="d-flex justify-content-center">Naše služby</h1>
                <p className="my-3">Nabízíme kompletní služby v oblasti nápojového cateringu a plánování Eventů. Máte představu o akci, ale nevíte si s ní rady? Chtěli byste na svojí akci plně vybavený koktejlový bar se širokou nabídkou? A co k tomu třeba zakousnout našlapanej hotdog a zapít ho pivkem? Nebo Vás snad baví dýmky a chtěli byste svoji akci zpestřit o luxusní shisha lounge. Všechno zmíněné nabízíme a pokud máte zájem o něco jiného, nebojíme se nových požadavků a výzev! Jsme tu pro Vás. Zažijte s námi Magic Event.</p>
                <div className="d-flex justify-content-between p-1  servicesOption">
                    <button className="btn btn-dark rounded-pill mx-2" onClick={() => {setSelectedService(0)}}>Koktejlový bar</button>
                    <button className="btn btn-dark rounded-pill mx-2" onClick={() => {setSelectedService(1)}}>Pronájem vybavení</button>
                    <button className="btn btn-dark rounded-pill mx-2" onClick={() => {setSelectedService(2)}}>Shisha lounge</button>
                    <button className="btn btn-dark rounded-pill mx-2" onClick={() => {setSelectedService(3)}}>Pořadatelské služby</button>
                </div>

                <ServicesCard selectedService={selectedService}/>
            </section>

            <section className="Galery my-4 container">
                <h1 className="d-flex ">Galerie</h1>
                <Gallery/>

            </section>

        </React.Fragment>

    );
}


