import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
    return (
        <section className="Home">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-keyboard="true" data-bs-ride="carousel" data-bs-pause="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/AJ1_CourtPurple.webp" class="d-block w-100" alt="..." />
                        <div className="text-sneaker">
                            <h1>AIR JORDAN 1</h1>
                            <p>O Air Jordan 1 High "Court Purple" continua o legado de uma das silhuetas mais amadas da Jordan Brand. Utilizando o mesmo bloqueio de cores que o popular "Bred Toe" Jordan 1, esta versão de 2018 substitui os detalhes em vermelho por Court Purple.</p>
                        </div>
                        <Link to={"/AJ1-CourtPurple"} ><button className="shop-now">COMPRE AGORA</button></Link>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/JordanOffWhitte.webp" class="d-block w-100" alt="..." />
                        <div className="text-sneaker">
                            <h1>AIR JORDAN OFF-WHITTE</h1>
                            <p>Inspirado na alma de Michael Jordan, o Off-White x Air Jordan 1 Retro High OG ‘UNC’ traz uma composição clássica de dois tons, filtrada pelo design exclusivo de Virgil Abloh.</p>
                        </div>
                        <Link to={"/AJ1-OffWhitte"} ><button className="shop-now">COMPRE AGORA</button></Link>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/AF1OffWhitte.webp" class="d-block w-100" alt="..." />
                        <div className="text-sneaker">
                            <h1>AF1 'VOLT' OFF-WHITTE</h1>
                            <p>O OFF-WHITE x Air Force 1 'Volt' desvia da ortodoxia estabelecida do manual de design da Nike de Virgil Abloh, maximizando um tom de neon da paleta de assinatura do Swoosh que o designer havia deixado anteriormente intocado.</p>
                        </div>
                        <Link to={"/AF1-OffWhitte"} ><button className="shop-now">COMPRE AGORA</button></Link>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/DunkChicago.webp" class="d-block w-100" alt="..." />
                        <div className="text-sneaker">
                            <h1>NIKE DUNK CHICAGO</h1>
                            <p>Nike SB olha para a madeira dura com esta versão do modelo mais quente de 2020, o Dunk Low, inspirando-se no icônico OG 'Chicago' Air Jordan 1.</p>
                        </div>
                        <Link to={"/DunkChicago"} ><button className="shop-now">COMPRE AGORA</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}