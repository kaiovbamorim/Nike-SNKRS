import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function DunkChicago() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--Chicago)` }}
            img={"./assets/img-compras/DunkChicagoCompras.webp"}
            nomeSneaker={"Nike SB Dunk Low Pro Chicago"}
            description={`Nike SB olha para a madeira dura com esta versão do modelo mais quente de 2020, o Dunk Low, inspirando-se no icônico OG 'Chicago' Air Jordan 1. Usando uma paleta sinônima de vermelho, branco e preto, é uma mistura cross-sport -up que homenageia tanto o GOAT quanto sua presença histórica de sua gravadora homônima no skate durante os anos 80. A parte superior de couro liso e o amortecimento Zoom Air são projetados para patinação, mas fornecem conforto e durabilidade caso você opte por atirar em alguns aros enquanto estiver pulando no local.`}
            valorSneaker={2.899}
            styleButton={{ backgroundImage: `var(--ChicagoButton)` }}
        />

    )
}