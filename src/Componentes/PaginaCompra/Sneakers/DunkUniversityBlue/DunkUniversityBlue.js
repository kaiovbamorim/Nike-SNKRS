import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function DunkUniverstyBlue() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--DunkUniversityBlue)` }}
            img={"./assets/img-compras/DunkUniversityBlueCompras.webp"}
            nomeSneaker={"Nike Dunk Low University Blue"}
            description={`O Nike Dunk Low 'University Blue' oferece uma coloração simplista de dois tons da silhueta retrô, reproduzida em bloqueio de cores clássico que lembra a ardósia OG do tênis de 1985. A parte superior toda em couro é acentuada com sobreposições em azul claro e um correspondente Swoosh azul. Uma etiqueta Nike trançada tradicional adorna a língua de náilon levemente respirável, que combina com uma gola acolchoada para um ajuste confortável. O cano baixo é montado em uma copa de borracha padrão.`}
            valorSneaker={2.299}
            styleButton={{ backgroundImage: `var(--DunkUniversityBlueButton)` }}
        />

    )
}