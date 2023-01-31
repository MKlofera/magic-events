import React from 'react'

interface props{
    selectedService: number;
}

export default function servicesCard({selectedService}:props) {

const service = Object.values(data)[selectedService];

  return (
    <div className="card my-4">
        <div className="card-body servicesCard">
            <h3 className="card-title">{service.title}</h3>
            <ul>
                {service.list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
                }
            </ul>
            <p className="card-text">{service.content}</p>
            <div className='d-flex justify-content-center'>
                <a href={service.link} className="d-flex justify-content-center">Chci vědět více</a>
            </div>
        </div>
    </div>
  )
}

const data = {
    "CoctailBar":{
        "title": "Koktejlový bar",
        "list": ["liška", "krtek", "medvěd"],
        "content": "Nabízíme kompletní služby v oblasti nápojového cateringu a plánování Eventů. Máte představu o akci, ale nevíte si s ní rady?",
        "link": "./koktejlovy-bar"
    },
    "RentEquipment":{
        "title": "Pronájem vybavení",
        "list": ["lžíce", "nůž", "vidlička"],
        "content": "Eventů. Máte představu o akci, ale nevíte si s ní rady? Chtěli byste na svojí akci plně vybavený koktejlový bar se širokou nabídkou? A co k tomu třeba zakousnout našlapanej hotdog a zapít ho pivkem? Nebo Vás snad baví dýmky a chtěli byste svoji akci zpestřit o luxusní shisha lounge. Všechno zmíněné nabízíme a pokud máte zájem o něco jiného, nebojíme se nových požadavků a výzev! Jsme tu pro Vás. Zažijte s námi Magic Event.",
        "link": "./pronajem-vybaveni"

    },
    "ShishaLounge":{
        "title": "Shisha Lounge",
        "list": [],
        "content": "Nabízíme kompletní služby v oblasti nápojového cateringu a plánování Eventů. Máte představu o akci, ale nevíte si s ní rady? Chtěli byste na svojí akci plně vybavený koktejlový bar se širokou nabídkou? A co k tomu třeba zakousnout našlapanej hotdog a zapít ho pivkem? Nebo Vás snad baví dýmky a chtěli byste svoji akci zpestřit o luxusní shisha lounge. Všechno zmíněné nabízíme a pokud máte zájem o něco jiného, nebojíme se nových požadavků a výzev! Jsme tu pro Vás. Zažijte s námi Magic Event.",
        "link": "./shisha-lounge"

    },
    "OrganizingServices":{
        "title": "Pořadatelské služby",
        "list": ["liška", "krtek", "medvěd"],
        "content": "Nabízíme kompletní služby v oblasti nápojového cateringu a plánování Eventů. Máte představu o akci, ale nevíte si s ní rady? Chtěli byste na svojí akci plně vybavený koktejlový bar se širokou nabídkou? A co k tomu třeba zakousnout našlapanej hotdog a zapít ho pivkem? Nebo Vás snad baví dýmky a chtěli byste svoji akci zpestřit o luxusní shisha lounge. Všechno zmíněné nabízíme a pokud máte zájem o něco jiného, nebojíme se nových požadavků a výzev! Jsme tu pro Vás. Zažijte s námi Magic Event.",
        "link": "./poradatelske-sluzby"

    }
}