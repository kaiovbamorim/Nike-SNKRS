import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function AF1OffWhitte() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--AF1OffWhitte)` }}
            img={"./assets/img-compras/AF1_OffWhitteCompras.webp"}
            nomeSneaker={"Off-White x Nike Air Force 1 Volt"}
            description={`O Off-White x Nike Air Force 1 Low “Volt” foi lançado em dezembro de 2018 e adicionou uma explosão de cor a um ano de lançamentos de Virgil Abloh e do Swoosh. Lançado ao lado de uma cor preta nos mesmos materiais, esta edição decididamente mais ousada apresenta uma construção sintética Volt e malha com camurça combinando para o painel do eyestay e aba do calcanhar. Black Swooshes adicionam contraste, enquanto o design é completado com o detalhamento usual do Abloh que inclui abas laranja brilhante, “AIR” impresso na entressola e um zíper azul claro.`}
            valorSneaker={7.599}
            styleButton={{ backgroundImage: `var(--AF1OffWhitteButton)` }}
        />

    )
}