import React, {createContext, useState, useEffect} from "react";
import AuthService from "../Services/AuthService";

export const AuthContext = createContext();

export default ({ children }) => {
    //the user that is logged in
    const [user, setUser] = useState(null);
    //if this user is authenticated or not
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //boolean value to see if the app is loaded because we're going to
    //be making a request to the server
    const [isLoaded, setisLoaded] = useState(false);

    //using it as a componentDidMount lifecycle
    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            console.log(data)
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setisLoaded(true);
        });
    }, []);

    //value prop is what we want available as global state
    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            <AuthContext.Provider vaule={{user, setUser, isAuthenticated, setIsAuthenticated}} >
                { children }
            </AuthContext.Provider>}
        </div>
    )

}