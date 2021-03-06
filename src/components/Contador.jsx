 
import styles from "../styles/contador.module.css"
import { createContext, useContext } from "react";
import {ContadorContext} from "./ContadorDeDias"
export function Contador()

    { 
    const{diaFlexao, diaAbs, diaBarra, setPlusAbs,setMinusAbs, setPlusFlexao, setMinusFlexao, setPlusBarrao, setMinusBarra} = useContext(ContadorContext)
    return(
        <div className={styles.contador}>
                    
                    <p >
                        Flexão Dia {diaFlexao}
                    </p>
                    <div className={styles.buttonContainer}>
                        <button onClick={setMinusFlexao}> - </button>
                        <button onClick={setPlusFlexao}>  + </button>
                    </div>
                    <p>
                        Abdominal Dia {diaAbs}
                    </p>
                    <div className={styles.buttonContainer}>
                        <button onClick={setMinusAbs}> - </button>
                        <button onClick={setPlusAbs}> + </button>
                    </div>
                    <p>
                        Barra Dia {diaBarra}
                    </p>
                    <div className={styles.buttonContainer}>
                        <button onClick={setMinusBarra}> - </button>
                        <button onClick={setPlusBarrao}> + </button>
                    </div>
                </div>
    )
 }