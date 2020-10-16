import React, {createContext, useState, useEffect} from "react";
import AuthService from "../Services/AuthService";

export const AuthContext = createContext();

export default ({ children }) => {
    //the user that is logged in
    const [user, setUser] = useState(null);
    //if this user is authenticated or not
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //using it as a componentDidMount lifecycle
    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
        }).catch(err => console.log(err));
    }, []);

    //value prop is what we want available as global state
    return (
        <div>
            
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}} >
                { children }
            </AuthContext.Provider>
            
        </div>
    )

}