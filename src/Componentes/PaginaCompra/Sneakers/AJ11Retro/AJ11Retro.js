import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ11Retro() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AJ11Retro)` }}
            img={"./assets/img-compras/AJ11RetroCompras.webp"}
            nomeSneaker={"Air Jordan 11 Low Legend Blue"}
            description={`É claro que os Columbias originais foram renomeados como “Legend Blue” após seu lançamento em dezembro de 2014, mas o colorway é exatamente o que você esperaria - uma parte superior totalmente branca com interiores pretos e uma faixa daquele azul UNC na fita da língua Jumpman Jordan, bem como a placa de fibra de carbono exposta no meio dos pés. As solas geladas em tons de azul tornam este lançamento muito mais atraente. Um detalhe importante que não deve ser ignorado é que a palmilha, naquele estilo de numeração familiar, lê “25” em vez de 23 ″. Isso poderia apontar o 25º aniversário da estreia do Air Jordan 11 “Columbia”, que ocorreu durante o All-Star Game de 1996. 1995 é reconhecido como o ano em que o próprio modelo estreou.`}
            valorSneaker={1.499}
            styleButton={{ backgroundImage: `var(--AJ11RetroButton)` }}
        />

    )
}