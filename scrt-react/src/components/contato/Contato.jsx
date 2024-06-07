import React from "react";
import styles from "./Contato.module.css";

const Contato = () => {

    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["left-part"]}>
                    <div class={styles["form-title"]}>
                        <h2>Ficou interessado ou com alguma dúvida?</h2>
                        <p>Entre em contato conosco! Estamos ansiosos para ouvir de você e poder trabalhar juntos
                            para fazer uma diferença positiva na vida das pessoas!</p>
                    </div>
                    <div className={styles["contact-form"]}>
                        <form type="POST">
                            <p>
                                <input type="text" placeholder="Nome" name="name" id="name" />
                                <input type="email" placeholder="E-mail" name="email" id="email" />
                            </p>
                            <p>
                                <input type="tel" placeholder="Telefone" name="phone" id="phone" />
                                <input type="text" placeholder="Assunto" name="subject" id="subject" />
                            </p>
                            <p><textarea name="message" id="message" cols="30" rows="10"
                                placeholder="Mensagem"></textarea></p>
                            <input type="hidden" name="token" value="FsWga4&@f6aw" />
                            <p>
                                <input type="submit" value="Enviar" data-toggle="modal" data-target="#modalAgradecimento" />
                            </p>
                        </form>
                    </div>
                </div>
                <div class={styles["form"]}>
                    <div class={styles["contact-form-wrap"]}>
                        <div class={styles["contact-form-box"]}>
                            <h4><i class="fas fa-map"></i> Endereço</h4>
                            <p>Haddock lobo, 595<br /> Consolação, São Paulo.<br />1414-001</p>
                        </div>
                        <div class={styles["contact-form-box"]}>
                            <h4><i class="far fa-clock"></i>Horários</h4>
                            <p>SEG. - SÁB.: 9 até 18h <br /></p>
                        </div>
                        <div class={styles["contact-form-box"]}>
                            <h4><i class="fas fa-address-book"></i> Contato</h4>
                            <p>Telefone: +11 940168715 <br /> Email: scrt.sptech@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato;