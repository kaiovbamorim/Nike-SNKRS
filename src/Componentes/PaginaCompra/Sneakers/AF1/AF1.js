import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AF1() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AF1)` }}
            img={"./assets/img-compras/AF1Compras.webp"}
            nomeSneaker={"Nike Air Force 1 '07"}
            description={`Estreando em 1982, o AF1 foi o primeiro tênis de basquete a abrigar o Nike Air, revolucionando o jogo e ganhando tração rapidamente em todo o mundo. Hoje, o Air Force 1 permanece fiel às suas raízes com o mesmo amortecimento macio e elástico que mudou a história dos sneakers.`}
            valorSneaker={799}
            styleButton={{ backgroundImage: `var(--AF1Button)` }}
        />

    )
}