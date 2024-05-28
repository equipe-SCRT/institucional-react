import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ logoInicio }) => {
    return (

        <div className={styles["container"]}>

                <div className={styles["logo"]}>
                    <span>
                        <img src={logoInicio} alt="Logo da Empresa" />
                    </span>
                </div>

                <div>
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
    )
}


export default NavBar;