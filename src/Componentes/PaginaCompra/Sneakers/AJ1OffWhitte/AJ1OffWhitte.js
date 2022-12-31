import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ1OffWhitte() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AJOffWhitte)` }}
            img={"./assets/img-compras/AJ1_OffWhitteCompras.webp"}
            nomeSneaker={"Off-White x Air Jordan 1 UNC"}
            description={`Inspirado na alma de Michael Jordan, o Off-White x Air Jordan 1 Retro High OG ‘UNC’ traz uma composição clássica de dois tons, filtrada pelo design exclusivo de Virgil Abloh. O processo envolve pegar uma base de couro branco com sobreposições em azul escuro e adicionar enfeites que transmitem uma expressão quase que artesanal.`}
            valorSneaker={27.899}
            styleButton={{ backgroundImage: `var(--AJOffWhitteButton)` }}
        />

    )
}