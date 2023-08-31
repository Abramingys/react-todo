import React, { useContext } from 'react';

const InfoContext = React.createContext();

const InfoProvider = ({ children }) => {
    const [searchValue, setSearchValue] = React.useState('');
    const [isCompleted, setIsCompleted] = React.useState(false);


    const infoContextValue = {
        searchValue,
        setSearchValue,
        isCompleted,
        setIsCompleted
    }

    return <InfoContext.Provider value={infoContextValue}>{children}</InfoContext.Provider>
};

export const useInfoContext = () => useContext(InfoContext)

export default InfoProvider;