import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'
const Initial_State = {
    user: {},
    isFetching:false,
    error:false
}

export const AuthContext = createContext(Initial_State)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, Initial_State);
    return(
        <AuthContext.Provider 
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
          }}
        >
            {children}
        </AuthContext.Provider>
    )
}