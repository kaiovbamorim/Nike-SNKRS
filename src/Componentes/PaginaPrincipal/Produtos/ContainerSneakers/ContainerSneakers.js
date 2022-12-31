import React from "react";
import { Link } from 'react-router-dom';

export default function ContainerSneakers({ link, src, NomeProduto, PrecoProduto }) {
    return (
        <Link to={link}>
            <div className="container-sneaker">
                <img src={src} />
                <h3>{NomeProduto}</h3>
                <h4>R${PrecoProduto}</h4>
            </div>
        </Link>
    )
}