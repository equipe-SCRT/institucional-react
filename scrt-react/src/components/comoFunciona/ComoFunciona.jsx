import React from "react";
import imgAcesso from "../../utils/assets/img/diagrama-img-1.svg";
import imgGerenciar from "../../utils/assets/img/diagrama-img-2.svg";
import imgColaborador from "../../utils/assets/img/diagrama-img-3.svg";
import imgAnaliseDados from "../../utils/assets/img/diagrama-img-4.svg"
import styles from "./ComoFunciona.module.css";


const ComoFunciona = () => {

    return (
        <div className={styles["container"]}>
            <div className={styles["section-title"]}>
                <h2><span class={styles["orange-text"]}>Como</span> Funciona?</h2>
            </div>
            <div className={styles["container-card"]}>
                <div className={styles["card"]}>
                    <img src={imgAcesso} alt="Pessoa acessando o APP" />
                    <h3>Acesse o APP</h3>
                    <p class={styles["description"]}><span> Baixe o nosso aplicativo no
                        seu celular ou acesse pelo navegador </span> </p>
                </div>
                <div className={styles["card"]}>
                    <img src={imgGerenciar} alt="Pessoa mexendo no computador" />
                    <h3>Gerencie seus produtos</h3>
                    <p class={styles["description"]}><span> Adicione e gerencie os seus
                        produtos de maneira simples e intuitiva </span> </p>
                </div>
                <div className={styles["card"]}>
                        <img src={imgColaborador} alt="Pessoa em pé" />
                        <h3>Colaboradores</h3>
                        <p class={styles["description"]}><span> Cadastre e gerencie os
                            colaboradores que participam do gerenciamento da coleta de
                            alimentos </span> </p>
                </div>
                <div className={styles["card"]}>
                        <img src={imgAnaliseDados} alt="" />
                        <h3>Visualize seus dados</h3>
                        <p class={styles["description"]}><span> Visualize fácilmente os dados mais importantes sobre
                            seus produtos e colaboradores </span> </p>
                </div>
            </div>
        </div>
    )
}

export default ComoFunciona;