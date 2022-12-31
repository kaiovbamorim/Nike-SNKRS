import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function NikeDunkRetro() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--NikeDunkRetro)` }}
            img={"./assets/img-compras/DunkLowRetroCompras.webp"}
            nomeSneaker={"Nike Dunk Low Retro"}
            description={`Em um dos primeiros lançamentos da linha Dunk em 2021 a Nike traz uma colorway clássica de volta a tona neste novo lançamento. O Nike Dunk Low Black retoma um esquema de cores que não tem erro, o simples preto e branco. Colorways como essas já foram utilizadas em outros modelos de Dunk no passado, no entanto é sempre bom ver uma remasterização com as tecnologias de conforto atuais.`}
            valorSneaker={1.299}
            styleButton={{ backgroundImage: `var(--NikeDunkRetroButton)` }}
        />

    )
}