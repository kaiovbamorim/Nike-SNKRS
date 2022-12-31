import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ4BlackCat() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AJ4BlackCat)` }}
            img={"./assets/img-compras/AJ4BlackCatCompras.webp"}
            nomeSneaker={"Air Jordan 4 Black Cat"}
            description={`Lançado originalmente em 2006, a Jordan irá trazer oficialmente o Air Jordan 4 Black Cat pela primeira vez durante os primeiros meses de 2020. Equipado em um esquema de cores Black e Light Graphite este AJ4 apresenta um cabedal totalmente preto com pequenas notas de cinza nas linguetas do Jumpman Flight. Um Blackout Jumpman no calcanhar com um logotipo branco na sola de borracha preta completa o design. Embora seja um esquema de cores simples, a união com a silhueta Air Jordan 4 transformou este sneaker num dos mais requisitados em 2020.`}
            valorSneaker={4.799}
            styleButton={{ backgroundImage: `var(--AJ4BlackCatButton)` }}
        />

    )
}