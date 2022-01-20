import React, { useState } from 'react';

//Creamos contexto = estado global.
const ContextoTema = React.createContext();

const ProovedorTema = ({children}) => {
    const [tema, setTema] = useState(
        {
            alineado: 'center',
            fuente: 30
        }
    );

    return (
        <ContextoTema.Provider value={{tema}}>
            {children}
        </ContextoTema.Provider>
    ); 
}
 
export {ContextoTema, ProovedorTema};