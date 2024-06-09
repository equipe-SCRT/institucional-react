import React from "react";
import styles from "./Missoes.module.css"
import iconLivro from "../../utils/assets/icon/livro-icon.png";
import iconObjetivo from "../../utils/assets/icon/objetivo-icon.png";
import iconParceria from "../../utils/assets/icon/parceria-icon.png";
import iconVerificado from "../../utils/assets/icon/verificado-icon.png"

const Missoes = () => {

    return (
        <div className={styles["container"]}>
            <div className={styles["section-title"]}>
                <h2><span class={styles["orange-text"]}>Missões</span></h2>
            </div>
            <div className={styles["container-card"]}>
                <div className={styles["text-missoes"]}>
                    <img src={iconLivro} className={styles["icon"]} alt="icone de um livro" />
                    <span>
                        Desenvolver campanhas de conscientização sobre questões relacionadas à
                        fome, nutrição e segurança alimentar, promovendo ações positivas para combater a fome em nível global.
                    </span>
                </div>
                <div className={styles["text-missoes"]}>
                    <img src={iconObjetivo} className={styles["icon"]} alt="icone de objetivo" />
                    <span>
                        Atender o Objetivo de Desenvolvimento Sustentável (ODS) contra o combate
                        a fome, com o grande enfoque de até 2030 conseguir garantir a
                        alimentação para todas as pessoas.
                    </span>
                </div>
            </div>
            <div className={styles["container-card"]}>
                <div className={styles["text-missoes"]}>
                    <img src={iconParceria} className={styles["icon"]} alt="icone de parceria" />
                    <span>
                        Colaborar com outras organizações, empresas e
                        agências
                        governamentais para maximizar o impacto e a eficácia das operações de
                        distribuição de cestas básicas.
                    </span>
                </div>
                <div className={styles["text-missoes"]}>
                    <img src={iconVerificado} className={styles["icon"]} alt="icone de verificado" />
                    <span>
                        Avaliar o impacto das operações de
                        distribuição de cestas básicas para garantir que estão atendendo
                        adequadamente
                        às necessidades da comunidade.
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Missoes;

