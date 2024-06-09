import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ logoInicio }) => {
    return (
        
        <div className={styles["container"]}>
            <div className={styles["content"]}>

                <div className={styles["logo"]}>
                    <img src={logoInicio} alt="Logo da Empresa" />
                </div>

                <div className={styles["nav-container"]}>
                    <ul className={styles["nav-bar"]}>
                        <li className={styles["opcao-nav-bar"]}>
                            <span>Inicio</span>
                        </li>
                        <li className={styles["opcao-nav-bar"]}>
                            <span>Quem Somos</span>
                        </li>
                        <li className={styles["opcao-nav-bar"]}>
                            <span>Missões</span>
                        </li>
                        <li className={styles["opcao-nav-bar"]}>
                            <span>Como funciona</span>
                        </li>
                        <li className={styles["opcao-nav-bar"]}>
                            <span>Perguntas Frequentes</span>
                        </li>
                        <li className={styles["opcao-nav-bar"]}>
                            <span>Contato</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default NavBar;