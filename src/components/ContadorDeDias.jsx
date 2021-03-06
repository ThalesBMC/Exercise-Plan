
import Cookies from "js-cookie"
import { createContext, useState, useEffect} from "react";


export const ContadorContext = createContext()
export function ContadorProvider({children,...rest}) {
    const [diaFlexao, setDiaFlexao] = useState(rest.diaFlexao ?? 0);
    const [diaBarra, setDiaBarra] = useState(rest.diaBarra ?? 0);
    const [diaAbs, setDiaAbs] = useState(rest.diaAbs ?? 0);
    const[diasTotais, setDiasTotais] = useState(rest.diasTotais ?? 0)
    useEffect(()=>{
        Cookies.set('diaFlexao', String(diaFlexao));
        Cookies.set('diaBarra', String(diaBarra));
        Cookies.set('diaAbs', String(diaAbs));
        Cookies.set('diasTotais', String(diasTotais));
    },[diaFlexao, diaBarra, diaAbs])

    function setMinusFlexao(){
        setDiaFlexao(diaFlexao - 1);
        setDiasTotais(diasTotais - 1);
    }

    function setPlusFlexao(){
        setDiaFlexao(diaFlexao + 1);
        setDiasTotais(diasTotais + 1)
        
    }
    function setMinusBarra(){
        setDiaBarra(diaBarra - 1);
        setDiasTotais(diasTotais - 1)
    }

    function setPlusBarrao(){
        setDiaBarra(diaBarra + 1);
        setDiasTotais(diasTotais + 1)
    }function setMinusAbs(){
        setDiaAbs(diaAbs - 1);
       
    }

    function setPlusAbs(){
        setDiaAbs(diaAbs + 1);
    }
    return(
       <ContadorContext.Provider value={{
           setMinusFlexao, setPlusFlexao, 
           setMinusBarra,setPlusBarrao, 
           setMinusAbs, setPlusAbs, 
           diaFlexao, diaAbs, diaBarra,
           diasTotais
       }}>
        {children}
       </ContadorContext.Provider>
     )
} 