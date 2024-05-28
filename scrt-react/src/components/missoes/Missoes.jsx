import React from "react";
import iconLivro from "../../utils/assets/icon/livro-icon.png";
import iconObjetivo from "../../utils/assets/icon/objetivo-icon.png";
import iconParceria from "../../utils/assets/icon/parceria-icon.png";
import iconVerificado from "../../utils/assets/icon/verificado-icon.png"

const Missoes = () => {

    return (
        <div className="container">
            <div className="topico-assunto">
                <p>
                    <span>Missões</span>
                </p>
            </div>

            <div className="container-card">
                <div className="card-missoes">
                    <img src={iconLivro} alt="icone de um livro" />
                    <span>
                        Desenvolver campanhas de conscientização sobre questões relacionadas à
                        fome, nutrição e segurança alimentar, visando aumentar a compreensão
                        pública e promover ações positivas para combater a fome em nível global.
                    </span>
                </div>
                <div className="card-missoes">
                    <img src={iconObjetivo} alt="icone de objetivo" />
                    <span>
                        Atender o Objetivo de Desenvolvimento Sustentável (ODS) contra o combate
                        a fome, com o grande enfoque de até 2030 conseguir garantir a
                        alimentação para todas as pessoas.
                    </span>
                </div>
                <div className="card-missoes">
                    <img src={iconParceria} alt="icone de parceria" />
                    <span>
                        Colaborar com outras organizações, empresas e
                        agências
                        governamentais para maximizar o impacto e a eficácia das operações de
                        distribuição de cestas básicas.
                    </span>
                </div>
                <div className="card-missoes">
                    <img src={iconVerificado} alt="icone de verificado" />
                    <span>
                        Avaliar regularmente o impacto das operações de
                        distribuição de cestas básicas para garantir que estão atendendo
                        adequadamente
                        às necessidades da comunidade e fazendo ajustes conforme necessário.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Missoes;

