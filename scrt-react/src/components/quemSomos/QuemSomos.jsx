import React from "react";
import styles from "./QuemSomos.module.css";
import iconFamilia from "../../utils/assets/icon/familia-icon.png";
import iconPositivo from "../../utils/assets/icon/positivo-icon.png";
import iconParceria from "../../utils/assets/icon/parceria-icon.png";
import iconProduto from "../../utils/assets/icon/produtos-icon.png";

const QuemSomos = () => {

    return (
        <div className={styles["container"]}>

            <div className={styles["section-title"]}>
                <h2><span class={styles["orange-text"]}>Quem</span> Somos?</h2>
            </div>
        
            <div className={styles["container-quem-somos"]}>
                <div className={styles["text-container"]}>
                    <span>
                        Somos uma organização comprometida em combater
                        a fome e promover a
                        segurança alimentar em nossa comunidade. Fundada com a missão de
                        garantir que cada indivíduo tenha acesso aos alimentos básicos necessários
                        para uma vida saudável e digna, dedicamos nossos esforços à distribuição de
                        alimentos nutritivos para aqueles que mais precisam.
                    </span>
                </div>
            </div>
            <div className={styles["container-icon"]}>
                <div className={styles["container-icones"]}>
                    <div className={styles["box-icon"]}>
                        <img src={iconFamilia} className={styles["icon"]} alt="icone de família" />
                        <div className={styles["box-col"]}>
                            <span>150+</span>
                            <span>Famílias ajudadas</span>
                        </div>
                    </div>
                    <div className={styles["box-icon"]}>
                        <img src={iconPositivo} className={styles["icon"]} alt="icone de positivo" />
                        <div className={styles["box-col"]}>
                            <span>300+</span>
                            <span>Feedback positivos</span>
                        </div>
                    </div>
                    <div className={styles["box-icon"]}>
                        <img src={iconParceria} className={styles["icon"]} alt="icone de parceria" />
                        <div className={styles["box-col"]}>
                            <span>25+</span>
                            <span>Colaboradores</span>
                        </div>
                    </div>
                    <div className={styles["box-icon"]}>
                        <img src={iconProduto} className={styles["icon"]} alt="icone de produtos" />
                        <div className={styles["box-col"]}>
                            <span>1000+</span>
                            <span>Produtos arrecadados</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuemSomos;