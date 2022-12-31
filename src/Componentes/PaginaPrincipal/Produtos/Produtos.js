import React from 'react';
import ContainerSneakers from './ContainerSneakers/ContainerSneakers';
import './Produtos.css'


export default function Produtos() {
    return (
        <section className="Produtos" id="Produtos">
            <div className="limited-area">
                <h2>SNEAKERS</h2>
                <section className="sneakers">

                    <ContainerSneakers
                        link={'/AJ1-OffWhitteChicago'}
                        src={"./assets/JordanOffWhitteChicago.webp"}
                        NomeProduto={"Off-White x Air Jordan 1 Chicago"}
                        PrecoProduto={34.999}
                    />

                    <ContainerSneakers
                        link={'/Kyrie5PatrickStar'}
                        src={"./assets/Kyrie5Patrick.webp"}
                        NomeProduto={"Kyrie 5 Patrick Star"}
                        PrecoProduto={5.199}
                    />


                    <ContainerSneakers
                        link={'/AJ411Lab'}
                        src={"./assets/AJ4_11_lab.webp"}
                        NomeProduto={"Air Jordan 4 11Lab4"}
                        PrecoProduto={5.799}
                    />

                    <ContainerSneakers
                        link={'/NikeDunkRetro'}
                        src={"./assets/DunkRetro.webp"}
                        NomeProduto={"Nike Dunk Low Retro"}
                        PrecoProduto={1.299}
                    />
                    <ContainerSneakers
                        link={'/AirForceOne'}
                        src={"./assets/AF1.webp"}
                        NomeProduto={"Nike Air Force 1 '07"}
                        PrecoProduto={799}
                    />
                    <ContainerSneakers
                        link={'/DunkUniversityBlue'}
                        src={"./assets/DunkUniversityBlue.webp"}
                        NomeProduto={"Nike Dunk Low University Blue"}
                        PrecoProduto={2.299}
                    />

                    <ContainerSneakers
                        link={'/AJ11Retro'}
                        src={"./assets/AJ11_Retro.webp"}
                        NomeProduto={"Air Jordan 11 Low Legend Blue"}
                        PrecoProduto={1.499}
                    />
                    <ContainerSneakers
                        link={'/AJ1PineGreen'}
                        src={"./assets/AJ1PineGreen.webp"}
                        NomeProduto={"Air Jordan 1 Pine Green 1.0"}
                        PrecoProduto={1.799}
                    />
                    <ContainerSneakers
                        link={'/AJ4BlackCat'}
                        src={"./assets/AJ4BlackCat.webp"}
                        NomeProduto={"Air Jordan 4 Black Cat"}
                        PrecoProduto={4799}
                    />


                </section>
            </div>
        </section>
    )
}
