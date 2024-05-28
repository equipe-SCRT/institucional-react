import React from "react";
import iconFamilia from "../../utils/assets/icon/familia-icon.png";
import iconPositivo from "../../utils/assets/icon/positivo-icon.png";
import iconParceria from "../../utils/assets/icon/parceria-icon.png";
import iconProduto from "../../utils/assets/icon/produtos-icon.png";

const QuemSomos = () => {

    return (
        <div className="container">
            <div className="topico-assunto">
                <p>
                    <span>Quem</span> Somos
                </p>
            </div>
            <div>
                <p>
                    Somos uma organização comprometida em combater
                    a fome e promover a
                    segurança alimentar em nossa comunidade. Fundada com a missão de
                    garantir que cada indivíduo tenha acesso aos alimentos básicos necessários
                    para uma vida saudável e digna, dedicamos nossos esforços à distribuição de
                    alimentos nutritivos para aqueles que mais precisam.
                </p>
            </div>
            <div className="container-icones">
                <div>
                    <img src={iconFamilia} alt="icone de família" />
                    <div>
                        <span>150+</span>
                        <span>Famílias ajudadas</span>
                    </div>
                </div>
                <div>
                    <img src={iconPositivo} alt="icone de positivo" />
                    <div>
                        <span>300+</span>
                        <span>Feedback positivos</span>
                    </div>
                </div>
                <div>
                    <img src={iconParceria} alt="icone de parceria" />
                    <div>
                        <span>25+</span>
                        <span>Colaboradores</span>
                    </div>
                </div>
                <div>
                    <img src={iconProduto} alt="icone de produtos" />
                    <div>
                        <span>1000+</span>
                        <span>Produtos arrecadados</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuemSomos;