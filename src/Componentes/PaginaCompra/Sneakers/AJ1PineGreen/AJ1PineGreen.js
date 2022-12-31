import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ1PineGreen() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AJ1PineGreen)` }}
            img={"./assets/img-compras/AJ1PineGreenCompras.webp"}
            nomeSneaker={"Air Jordan 1 Pine Green 1.0"}
            description={`O Air Jordan 1 Retro High OG 'Pine Green' apresenta uma versão modificada do design clássico 'Black Toe' da silhueta, apresentado pela primeira vez ao mundo em 1985. O cano alto de couro emprega um esquema de cores preto e branco com detalhes em Pine Green. o calcanhar, a sola e as asas de couro que envolvem a gola. Ao contrário do 'Black Toe' original, o acabamento branco tradicional na caixa do dedo do pé é colorido com mais verde pinho.`}
            valorSneaker={1.799}
            styleButton={{ backgroundImage: `var(--AJ1PineGreenButton)` }}
        />

    )
}