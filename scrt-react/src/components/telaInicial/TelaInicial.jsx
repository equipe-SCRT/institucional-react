import React from "react";
import styles from "./TelaInicial.module.css";

const TelaInicial = () => {
    return (
       
        <div className={styles["about-container"]}>
            <div className={styles["nav-bar"]}></div>
            <h1 className={styles["titulo-principal"]}>SCRT</h1>
            <div className={styles["texto-container"]}>
                <p className={styles["texto-principal"]}>
                    Na SCRT, desenvolvemos software de ponta projetado especificamente para abordar os
                    desafios da fome e da insegurança alimentar. Desde plataformas de gerenciamento de
                    doações até aplicativos de rastreamento de alimentos, nossas soluções são projetadas
                    para capacitar organizações, comunidades e indivíduos a enfrentar a fome de frente.
                </p>
            </div>

            <div>
                <button className={styles["about-button"]}>Entre em contato!</button>
                <button className={styles["about-button"]}>Saiba mais</button>
            </div>
        </div>

    )
}

export default TelaInicial;