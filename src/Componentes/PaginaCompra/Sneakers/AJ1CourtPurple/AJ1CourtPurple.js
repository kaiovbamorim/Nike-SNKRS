import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ1CourtPurple() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--CourtPurple)` }}
            img={"./assets/img-compras/JordanPurpleCompras.webp"}
            nomeSneaker={"AIR JORDAN 1 COURT PURPLE 1.0"}
            description={`O Air Jordan 1 High "Court Purple" continua o legado de uma das silhuetas mais amadas da Jordan Brand. Utilizando o mesmo bloqueio de cores que o popular "Bred Toe" Jordan 1, esta versão de 2018 substitui os detalhes em vermelho por Court Purple. O sapato é construído com uma parte superior de couro de grão integral premium. O resultado final do Air Jordan 1 High "Court Purple" é uma reviravolta nova e refrescante no lendário modelo que ainda mantém uma sensação de OG.`}
            valorSneaker={3.599}
            styleButton={{ backgroundImage: `var(--CourtPurpleButton)` }}
        />

    )
}