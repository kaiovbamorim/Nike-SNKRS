import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AJ1OffWhitteChicago() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--Chicago)` }}
            img={"./assets/img-compras/AJ1_OffWhitteChicagoCompras.webp"}
            nomeSneaker={"Off-Whitte x Air Jordan 1 Chicago"}
            description={`Criado a partir do clássico da Jordan Brand, o designer Virgil Abloh expos componentes que costumeiramente ficariam voltados para a parte interna do par. Elementos como Swoosh são de certa maneira adicionados “posteriormente”, fixados apenas por costuras nas extremidades. Através da inscrição “AIR” na entressola acaba por mostrar seu sistema de amortecimento. Além de sobras nas costuras, rebarbas, espumas expostas e detalhes onde propositalmente irão amarelar com mais facilidade.
            Fazendo parte do pack The Ten, lançamento junto com mais 9 silhuetas reinterpretadas pela Off-White, este se tornou para muitos até uma obra de arte.`}
            valorSneaker={34.999}
            styleButton={{ backgroundImage: `var(--ChicagoButton)` }}
        />

    )
}