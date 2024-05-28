import React from "react";
import imgAcesso from "../../utils/assets/img/diagrama-img-1.svg";
import imgGerenciar from "../../utils/assets/img/diagrama-img-2.svg";
import imgColaborador from "../../utils/assets/img/diagrama-img-3.svg";
import imgAnaliseDados from "../../utils/assets/img/diagrama-img-4.svg"


const ComoFunciona = () => {

    return (
        <div className="container">
            <div className="topico-assunto">
                <p>
                    <span>Como</span> Funciona?
                </p>
            </div>
            <div className="container-card">
                <div className="card">
                    <div>
                        <img src={imgAcesso} alt="Pessoa acessando o APP" />
                        <p>Acesse o APP</p>
                        <span>
                            Baixe o nosso aplicativo no
                            seu celular ou acesse pelo navegador
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={imgGerenciar} alt="Pessoa mexendo no computador" />
                        <p>Gerencie seus produtos</p>
                        <span>
                            Adicione e gerencie os seus
                            produtos de maneira simples e intuitiva
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={imgColaborador} alt="Pessoa em pé" />
                        <p>Colaboradores</p>
                        <span>
                            Cadastre e gerencie os
                            colaboradores que participam do gerenciamento da coleta de
                            alimentos
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={imgAnaliseDados} alt="" />
                        <p>Visualize seus dados</p>
                        <span>
                            Visualize fácilmente os dados mais importantes sobre
                            seus produtos e colaboradores
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComoFunciona;