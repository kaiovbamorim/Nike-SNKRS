import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ411Lab() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AJ411Lab)` }}
            img={"./assets/img-compras/AJ411LabCompras.webp"}
            nomeSneaker={"Air Jordan 4 11Lab4"}
            description={`Tênis 'Air Jordan 4 11Lab4' de couro envernizado, jordan. Com fechamento por cadarço na frente, bico arredondado e solado em borracha. Este modelo é originário de um marketplace de tênis premium, cujo estoque traz os tênis de edição limitada mais desejados do momento. Imagine um tênis difícil de achar, em qualquer lugar do mundo, este é um deles.`}
            valorSneaker={5.799}
            styleButton={{ backgroundImage: `var(--AJ411LabButton)` }}
        />

    )
}