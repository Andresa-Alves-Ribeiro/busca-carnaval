import { useState } from "react";
import styles from "./styles.module.css";

export default function SwitchBody({toggle, onClick}) {
    return (
        <div onClick={onClick} className={styles.containerSwitch}>
            <button
                className={
                    toggle ? styles.filledButton : styles.notFilledButton
                }
            >
                Lista
            </button>
            <button
                className={
                    !toggle ? styles.filledButton : styles.notFilledButton
                }
            >
                Mapa
            </button>
        </div>
    );
}
