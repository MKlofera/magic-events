import React from 'react'

import { MdFacebook } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white footer">
        <div className="container p-4 pb-0">
            <section className="mb-4">
                <a className="m-1" href="#!" role="button">
                    <MdFacebook size={50} color="white"/>
                </a>

                <a className="m-1" href="#!" role="button">
                    <FaTwitter size={50} color="white"/>
                </a>

                <a className="m-1" href="#!" role="button">
                    <FaInstagram size={50} color="white"/>
                </a>
            </section>
        </div>

        <div className="text-center p-3" >
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    </footer>
  )
}
