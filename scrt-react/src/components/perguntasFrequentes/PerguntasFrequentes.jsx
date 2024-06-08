import React from "react";
import styles from "./PerguntasFrequentes.module.css";


const PerguntasFrequentes = () => {

    return (
        <div className={styles["container"]}>
            <div class={styles["section-title"]}>
                <h2><span class={styles["orange-text"]}>Perguntas</span> Frequentes</h2>
            </div>
            <div className={styles["container-card"]}>
                <div className={styles["card"]}>
                    <div class={styles["card-header"]} id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Como a SCRT está combatendo a fome?
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class={styles["collapse"]} aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class={styles["card-body"]}>
                            A SCRT utiliza tecnologia de ponta para criar soluções inovadoras que abordam os
                            desafios relacionados à fome. Desenvolvemos aplicativos, plataformas de
                            gerenciamento de doações, sistemas de rastreamento de alimentos e outras ferramentas
                            para capacitar organizações, comunidades e indivíduos na luta contra a fome.
                        </div>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div class={styles["card-header"]} id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Como a SCRT garante a eficácia de suas soluções?
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class={styles["collapse"]} aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class={styles["card-body"]}>
                            Nossas soluções são desenvolvidas com base em pesquisas sólidas, feedback da
                            comunidade e colaboração com especialistas em alimentação e tecnologia. Além disso,
                            estamos sempre avaliando e refinando nossos produtos para garantir que estejam
                            atendendo às necessidades e desafios em constante evolução relacionado à fome.
                        </div>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div class={styles["card-header"]} id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Quais são os resultados alcançados pela SCRT até agora?
                            </button>
                        </h2>
                    </div>

                    <div id={styles["collapseOne"]} class={styles["collapse"]} aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class={styles["card-body"]}>
                            Estamos orgulhosos de nossos muitos sucessos até o momento. Isso inclui ajudar a
                            fornecer alimentos para milhares de pessoas, otimizar cadeias de suprimentos
                            alimentares para maior eficiência e transparência, e capacitar organizações e
                            comunidades a melhorar sua resposta à fome.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PerguntasFrequentes;