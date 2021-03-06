//setup data Layer

//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react"


//this the data layer
export const StateContext = createContext()

//bulild a PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);    