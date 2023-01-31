import React from 'react'

import Card from '../components/shared/Card';
import SendEmail from '../components/shared/SendEmail';
import CardDetailModal from '../components/shared/CardDetail';
import {FaArrowRight} from 'react-icons/fa'
export default function EquipmentRent() {
  return (
    <div className='container'>
        <section className='mt-4'>
            <h1>Pronájem vybavení</h1>
            <p>Nabízíme kompletní služby v oblasti nápojového cateringu a plánování Eventů. Máte představu o akci, ale nevíte si s ní rady? Chtěli byste na svojí akci plně vybavený koktejlový bar se širokou nabídkou? A co k tomu třeba zakousnout našlapanej hotdog a zapít ho pivkem? Nebo Vás snad baví dýmky a chtěli byste svoji akci zpestřit o luxusní shisha lounge. Všechno zmíněné nabízíme a pokud máte zájem o něco jiného, nebojíme se nových požadavků a výzev! Jsme tu pro Vás. Zažijte s námi Magic Event.</p>

            <span className='link-to-sendEmail-modal' onClick={()=>{OpenSendEmailModalHandler()}}>Poptávka pronájmu vybavení <FaArrowRight/></span>
            {/* <SendEmail
                show={OpenSendEmailModal}
                onHide={() => setOpenSendEmailModal(false)}
                service={"Coctails"}
            /> */}
        </section>

        <section className='Coctails mb-5 mt-3'>
            <h2 className='mb-4'>Dostupné vybavení</h2>
            <div className='row justify-content-center'>
                {Equipments.map((Equipment, index) => {
                    return (
                        <div key={index} onClick={() => {EquipmentDetailHandler(Equipment)}} className="card-deck">
                            <Card item={Equipment} />
                        </div>
                        )
                    })}
            </div>
        </section>
    </div>
  )
}


const Equipments = [
    {
        name: "Fritéza",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-friteza-2-5l-1.jpg",
        price: 1000,
        description: "Fritéza na 2,5l oleje"
    },
    {
        name: "mrazák",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-mrazak-2-5l-1.jpg",
        price: 1000,
        description: "Mrazák na 2,5l"
    },
    {
        name: "Fritéza",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-friteza-2-5l-1.jpg",
        price: 1000,
        description: "Fritéza na 2,5l oleje"
    },
    {
        name: "mrazák",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-mrazak-2-5l-1.jpg",
        price: 1000,
        description: "Mrazák na 2,5l"
    },
    {
        name: "Fritéza",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-friteza-2-5l-1.jpg",
        price: 1000,
        description: "Fritéza na 2,5l oleje"
    },
    {
        name: "mrazák",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-mrazak-2-5l-1.jpg",
        price: 1000,
        description: "Mrazák na 2,5l"
    },
    {
        name: "Fritéza",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-friteza-2-5l-1.jpg",
        price: 1000,
        description: "Fritéza na 2,5l oleje"
    },
    {
        name: "mrazák",
        imgLink: "https://www.rychlejsi.cz/images/produkty/velke/rychlejsi-mrazak-2-5l-1.jpg",
        price: 1000,
        description: "Mrazák na 2,5l"
    },
]