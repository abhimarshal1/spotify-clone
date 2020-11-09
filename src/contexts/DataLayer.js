import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

const DataLayerProvider = ({ initialState, reducer, children }) => {

    return (
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    )
}

export const useDataLayerValue = () => useContext(DataLayerContext);

export default DataLayerProvider;
