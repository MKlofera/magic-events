import React, {useState} from 'react'

import CoctailCard from '../components/shared/Card';
import SendEmail from '../components/shared/SendEmail';
import CoctailDetailModal from '../components/shared/CardDetail';
import {FaArrowRight} from 'react-icons/fa'

export default function CoctailBar() {
    const [clickedCoctail, setClickedCoctail] = useState(null);
    const [CDetailModal, setCDetailModal] = useState(false);
    const [OpenSendEmailModal, setOpenSendEmailModal] = useState(false);

    const coctails = Object.values(Coctails);

    const OpenSendEmailModalHandler = () => {
        setOpenSendEmailModal(true)
    }
    const coctailDetailHandler = (coctail) => {
        setClickedCoctail(coctail);
        setCDetailModal(true);
    }

  return (
    <div className='container'>
        <section className='mt-4'>
            <h1>Koktejlový bar</h1>
            <p>Nabízíme kompletní služby v oblasti nápojového cateringu a plánování Eventů. Máte představu o akci, ale nevíte si s ní rady? Chtěli byste na svojí akci plně vybavený koktejlový bar se širokou nabídkou? A co k tomu třeba zakousnout našlapanej hotdog a zapít ho pivkem? Nebo Vás snad baví dýmky a chtěli byste svoji akci zpestřit o luxusní shisha lounge. Všechno zmíněné nabízíme a pokud máte zájem o něco jiného, nebojíme se nových požadavků a výzev! Jsme tu pro Vás. Zažijte s námi Magic Event.</p>

            <span className='link-to-sendEmail-modal ' onClick={()=>{OpenSendEmailModalHandler()}}>Poptávka cateringu <FaArrowRight/></span>
            <SendEmail
                show={OpenSendEmailModal}
                onHide={() => setOpenSendEmailModal(false)}
                service={"Coctails"}
            />
        </section>

        <section className='Coctails mb-5 mt-3'>
            <h2 className='mb-4'>Koktejly</h2>
            <div className='row justify-content-center'>
                {coctails.map((coctail, index) => {
                    return (
                        <div key={index} onClick={() => {coctailDetailHandler(coctail)}} className="card-deck">
                            <CoctailCard coctail={coctail} />
                        </div>
                        )
                    })}
            <CoctailDetailModal
                show={CDetailModal}
                onHide={() => setCDetailModal(false)}
                coctail={clickedCoctail}
            />
            </div>
        </section>
    </div>
  )
}

const Coctails = {
    1:{
        name: 'Rum and Cola',
        imgLink: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8&w=1000&q=80",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: ""
    },
    2:{
        name: 'Sex on the beach',
        imgLink: "https://www.liquor.com/thmb/FsPcbBZ5fnQy3mWgZ-xDPqxeS0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-720x720-primary-8157bd54c63948c4b5a3ad5b3986965a.jpg",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: ""
    },
    3:{
        name: 'Bloody Mary',
        imgLink: "https://www.liquor.com/thmb/FsPcbBZ5fnQy3mWgZ-xDPqxeS0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-720x720-primary-8157bd54c63948c4b5a3ad5b3986965a.jpg",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: ""
    },
    4:{
        name: 'Mojito',
        imgLink: "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15072/rainbowparadisecocktail.jpg",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: "Koktejl Blue Frog je skvelou volbou pro milovniky kombinace vodky, rumu, ginu a tequily. Se stejnym základem jako má Long Island se z kokteilu stává jeden z nesilnejsich drinkü v nasi nabídce. Kombinace tèchto ty† destilátú je doplnèna o svèzí chuté citrusovch likérü, jejichz svèzest a horkost vyrovnává energeticky nápoj, ktery z drinku delá sladkosvezí bombu.",
        reverse: true
    },
    5:{
        name: 'Mojito',
        imgLink: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8&w=1000&q=80",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: ""
    },
    6:{
        name: 'Mojito',
        imgLink: "https://www.liquor.com/thmb/FsPcbBZ5fnQy3mWgZ-xDPqxeS0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-720x720-primary-8157bd54c63948c4b5a3ad5b3986965a.jpg",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: ""
    },
    7:{
        name: 'Mojito',
        imgLink: "https://www.liquor.com/thmb/FsPcbBZ5fnQy3mWgZ-xDPqxeS0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-720x720-primary-8157bd54c63948c4b5a3ad5b3986965a.jpg",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: ""
    },
    8:{
        name: 'Mojito',
        imgLink: "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15072/rainbowparadisecocktail.jpg",
        ingredients: [
            {
                name: 'rum',
                amount: '50ml'
            },
            {
                name: 'limetka',
                amount: '1ks'
            },
            {
                name: 'soda',
                amount: '100ml'
            },
            {
                name: 'menta',
                amount: '1ks'
            },
        ],
        description: "Koktejl Blue Frog je skvelou volbou pro milovniky kombinace vodky, rumu, ginu a tequily. Se stejnym základem jako má Long Island se z kokteilu stává jeden z nesilnejsich drinkü v nasi nabídce. Kombinace tèchto ty† destilátú je doplnèna o svèzí chuté citrusovch likérü, jejichz svèzest a horkost vyrovnává energeticky nápoj, ktery z drinku delá sladkosvezí bombu.",
        reverse: false
    },
}