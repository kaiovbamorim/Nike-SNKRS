import React from "react";
import Header from "../Header/Header";
import Home from "./Home/Home";
import Produtos from "./Produtos/Produtos"

export default function PaginaPrincipal() {
    return (
        <>
            <Header />
            <Home />
            <Produtos />
        </>
    )
}