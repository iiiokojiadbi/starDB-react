import React, { useContext } from 'react';
import SwapiService from './../utils/SwapiService';

const SwapiContext = React.createContext();

export const useSwapi = () => {
  return useContext(SwapiContext);
};

export const SwapiProvider = ({ children }) => {
  const swapiService = new SwapiService();

  return (
    <SwapiContext.Provider value={swapiService}>
      {children}
    </SwapiContext.Provider>
  );
};
