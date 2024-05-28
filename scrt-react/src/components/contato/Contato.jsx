import React from "react";

const Contato = () => {

    return (
        <div className="container">
            <div>
                <h2>Ficou interessado ou com alguma dúvida?</h2>
                <span>
                    Entre em contato conosco! Estamos ansiosos para ouvir de você e poder trabalhar juntos para fazer uma diferença positiva na vida das pessoas!
                </span>
                <div>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="E-mail" />
                </div>
                <div>
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Assunto" />
                </div>
                <div>
                    <input type="text" placeholder="Mensagem" />
                </div>
                <div>
                    <button>ENVIAR</button>
                </div>
            </div>
            <div class="contact-form-wrap">
                <div class="contact-form-box">
                    <div>
                        <h4><i class="fas fa-map"></i> Endereço</h4>
                        <p>Haddock lobo, 595</p>
                        <p>Consolação, São Paulo.</p>
                        <p>1414-001</p>
                    </div>

                    <div>
                        <h4><i class="fas fa-map"></i> Endereço</h4>
                        <p>Haddock lobo, 595</p>
                        <p>Consolação, São Paulo.</p>
                        <p>1414-001</p>
                    </div>

                    <div>
                        <h4><i class="fas fa-clock"></i> Horários</h4>
                        <p>SEG. - SÁB.: 9 até 18h</p>
                    </div>

                    <div>
                        <h4><i class="fas fa-map"></i> Contato</h4>
                        <p>Telefone: +11 940168715</p>
                        <p>Email: scrt.sptech@gmail.com</p>
                        <p>1414-001</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato;