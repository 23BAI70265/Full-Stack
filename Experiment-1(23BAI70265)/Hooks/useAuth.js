import AuthProvider from "../context/AuthProvider";
import {useContext} from "react"

const useAuth = () => {
    const context = useContext(AuthContext) ;

    if(context == null){
        throw new Error("User must be an Authenticated.") ;
    }

    return context ;
} ;

export default useAuth  ;