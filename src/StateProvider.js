//setting up data layer  (pushing and dispathing props from this js)
// keeping track of basket

import React,{ createContext,useReducer,useContext } from "react";

//creating data layer
export const StateContext = createContext()

//build a provider (wrap entire app inside provider)
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
     </StateContext.Provider>

)

//this is how we use it inside of a component
 export const useStateValue = () => useContext(StateContext)