import React from "react";
//import styles from "./Home.module.css";
import logo from "../utils/assets/img/SCRT (3).svg";
import NavBar from "../components/navBar/NavBar";
import TelaInicial from "../components/telaInicial/TelaInicial";
import QuemSomos from "../components/quemSomos/QuemSomos";
import Missoes from "../components/missoes/Missoes";
import ComoFunciona from "../components/comoFunciona/ComoFunciona";
import PerguntasFrequentes from "../components/perguntasFrequentes/PerguntasFrequentes";
import Contato from "../components/contato/Contato";

const Home = () => {
    return (
        <>
        <NavBar logoInicio={logo} />
        <TelaInicial/>
        <QuemSomos />
        <Missoes />
        {/*<ComoFunciona />
        <PerguntasFrequentes />
        <Contato />  */}
        </>
    )
}

export default Home;