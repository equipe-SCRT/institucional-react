import React from "react";
import facebook from "../../utils/assets/img/facebook.svg"
import twitter from "../../utils/assets/img/twitter.svg"
import instagram from "../../utils/assets/img/instagram.svg"
import linkedin from "../../utils/assets/img/linkedin.svg"

import styles from "./Footer.module.css";

const Footer = () => {

    return (
        <div class={styles["copyright"]}>
            <div class={styles["text-right"]}>
                <div class={styles["social-icons"]}>
                    <ul>
                        <li><a href="#" target="_blank"><i class={styles["fab fa-facebook"]}>
                            <img src={facebook} alt="" /></i></a></li>
                        <li><a href="#" target="_blank"><i class={styles["fab fa-twitter"]}>
                            <img src={twitter} alt="" /></i></a></li>
                        <li><a href="#" target="_blank"><i class={styles["fab fa-instagram"]}>
                            <img src={instagram} alt="" /></i></a></li>
                        <li><a href="#" target="_blank"><i class={styles["fab fa-linkedin"]}>
                            <img src={linkedin} alt="" /></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;