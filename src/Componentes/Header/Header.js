import React from "react";
import { SiNike } from "react-icons/si";
import { BsFillTelephoneFill, BsCashCoin } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import './Header.css'

export default function Header() {

    function toggleMenu() {
        const nav = document.querySelector('.btnMenu')
        nav.classList.toggle('active')
    }
    return (
        <header className="Header">
            <a href="/"><SiNike /></a>
            <div className="btnMenu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <nav className="links-menu">
                    <ul>
                        <a href="/#Produtos"><MdCardTravel /><li>PRODUTOS</li></a>
                        <a href="#"><BsCashCoin /><li>PAGAMENTOS</li></a>
                        <a href="#"><BsFillTelephoneFill /><li>FALE CONOSCO</li></a>
                    </ul>
                </nav>
            </div>

        </header>
    )
}