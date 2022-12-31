import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../Header/Header";
import './EstruturaPagina.css'

export default function EstruturaPagina({ style, img, nomeSneaker, description, valorSneaker, styleButton }) {
    return (
        <section className="EstruturaPagina">
            <Header />
            <div className="content-compras">
                <div style={style} className="img-sneaker">
                    <img src={img} />
                </div>
                <div className="buy-sneaker">
                    <div className="text-compras">
                        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg></Link>
                        <h1>{nomeSneaker}</h1>
                        <h2>DESCRIÇÃO</h2>
                        <p>{description}</p>
                    </div>
                    <div className="size-qty">
                        <div className="size">
                            <h3>SIZE</h3>
                            <div className="number-sneaker">
                                <input type="radio" id="radio-0" name="number-sneaker" value="38" />
                                <label className="label" htmlFor="radio-0" ><span>38</span></label>

                                <input type="radio" id="radio-1" name="number-sneaker" value="40" />
                                <label className="label" htmlFor="radio-1" ><span>40</span></label>

                                <input type="radio" id="radio-2" name="number-sneaker" value="42" />
                                <label className="label" htmlFor="radio-2" ><span>42</span></label>

                                <input type="radio" id="radio-3" name="number-sneaker" value="44" />
                                <label className="label" htmlFor="radio-3" ><span>44</span></label>

                                <input type="radio" id="radio-4" name="number-sneaker" value="40" />
                                <label className="label" htmlFor="radio-4"><span>46</span></label>
                            </div>
                        </div>
                        <div className="compra">
                            <h4>R${valorSneaker}</h4>
                            <button style={styleButton}>COMPRE AGORA</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}