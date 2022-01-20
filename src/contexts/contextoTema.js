import React from 'react';

//Creamos contexto = estado global.
const ContextoTema = React.createContext();

const ProovedorTema = ({children}) => {
    return (
        <ContextoTema.Provider value={{nombre: 'carlos'}}>
            {children}
        </ContextoTema.Provider>
    ); 
}
 
export {ContextoTema, ProovedorTema};