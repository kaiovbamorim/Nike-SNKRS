import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "../Componentes/ScrollToTop/ScrollToTop";
import PaginaPrincipal from '../Componentes/PaginaPrincipal/PaginaPrincipal'
import AJ1CourtPurple from "../Componentes/PaginaCompra/Sneakers/AJ1CourtPurple/AJ1CourtPurple";
import AJ1OffWhitte from "../Componentes/PaginaCompra/Sneakers/AJ1OffWhitte/AJ1OffWhitte";
import AF1OffWhitte from "../Componentes/PaginaCompra/Sneakers/AF1OffWhitte/AF1OffWhitte";
import DunkChicago from "../Componentes/PaginaCompra/Sneakers/DunkChicago/DunkChicago";
import AJ1OffWhitteChicago from "../Componentes/PaginaCompra/Sneakers/AJ1OffWhitteChicago/AJ1OffWhitteChicago";
import Kyrie5 from '../Componentes/PaginaCompra/Sneakers/Kyrie5/Kyrie5'
import AJ411Lab from "../Componentes/PaginaCompra/Sneakers/AJ411Lab/AJ411Lab";
import NikeDunkRetro from "../Componentes/PaginaCompra/Sneakers/NikeDunkRetro/NikeDunkRetro";
import AF1 from '../Componentes/PaginaCompra/Sneakers/AF1/AF1'
import DunkUniversityBlue from "../Componentes/PaginaCompra/Sneakers/DunkUniversityBlue/DunkUniversityBlue";
import AJ11Retro from "../Componentes/PaginaCompra/Sneakers/AJ11Retro/AJ11Retro";
import AJ1PineGreen from "../Componentes/PaginaCompra/Sneakers/AJ1PineGreen/AJ1PineGreen";
import AJ4BlackCat from "../Componentes/PaginaCompra/Sneakers/AJ4BlackCat/AJ4BlackCat";


export default function Rotas() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<PaginaPrincipal />} />
                <Route path="/AJ1-CourtPurple" element={<AJ1CourtPurple />} />
                <Route path="/AJ1-OffWhitte" element={<AJ1OffWhitte />} />
                <Route path="/AF1-OffWhitte" element={<AF1OffWhitte />} />
                <Route path="/DunkChicago" element={<DunkChicago />} />
                <Route path="/AJ1-OffWhitteChicago" element={<AJ1OffWhitteChicago />} />
                <Route path="/Kyrie5PatrickStar" element={<Kyrie5 />} />
                <Route path="/AJ411Lab" element={<AJ411Lab />} />
                <Route path="/NikeDunkRetro" element={<NikeDunkRetro />} />
                <Route path="/AirForceOne" element={<AF1 />} />
                <Route path="/DunkUniversityBlue" element={<DunkUniversityBlue />} />
                <Route path="/AJ11Retro" element={<AJ11Retro />} />
                <Route path="/AJ1PineGreen" element={<AJ1PineGreen />} />
                <Route path="/AJ4BlackCat" element={<AJ4BlackCat />} />
            </Routes>
        </BrowserRouter>)
}

