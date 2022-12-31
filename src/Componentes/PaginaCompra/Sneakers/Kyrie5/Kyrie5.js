import React from "react";
import EstruturaPagina from "../../EstruturaPagina/PaginaCompra";

export default function Kyrie5() {
    return (
        <EstruturaPagina
            style={{ backgroundImage: `var(--Kyrie5)` }}
            img={"./assets/img-compras/Kyrie5PatrickCompras.webp"}
            nomeSneaker={"Nike Kyrie 5 Patrick Star"}
            description={`Kyrie Irving, desde sua estreia como Rookie do ano pelos Cleveland Cavaliers na temporada de 2011, conquistou uma legião de fãs devido aos seus dribles deslumbrantes e à sua personalidade excêntrica. Nesse sentido, para a alegria dos seguidores dele, a marca do Swoosh faz questão de incluir as paixões de Kyrie nos modelos da linha do astro. Logo, a mais nova colaboração mergulha em nostalgia, revivendo os personagens da Fenda do Biquini que fizeram parte não só da infância de Kyrie como de muitos.`}
            valorSneaker={5.199}
            styleButton={{ backgroundImage: `var(--Kyrie5Button)` }}
        />

    )
}