import React, {createContext} from 'react'
import apiTestData from './api/apiTest'


export const GlobalState = createContext()

export const DataProvider  = ({children}) => {

    const state = {
        apiTest: apiTestData(),
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}