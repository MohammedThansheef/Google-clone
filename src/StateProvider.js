import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

//Hook which allows to use data from Data layer
export const useStateValue = () => useContext(stateContext);
