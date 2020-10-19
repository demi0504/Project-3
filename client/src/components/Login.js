import React, {useState, useContext} from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import {AuthContext} from "../Context/AuthContext";
import { Button } from "react-bulma-components";
import DogSVG from "./DogSVG/DogSVG";
import "./style/form-styles.css";

const Login = props => {
    const [user, setUser] = useState({ username: "", password: ""});
    //null to signify not to render component
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                //passes updated user
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                //history comes from react router and has a function called push
                props.history.push("/");
            }
            else
                setMessage(message);
        });
    }

    return(

        <div className="hero is-fullheight bG padding-bottom2">
          <div className="padding-top">
            <div className="container">
                <DogSVG />
                <div className="columns is-centered in-front">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form onSubmit={onSubmit}>
                            <h3 className="is-size-3 loginH3">Please sign in</h3>
                            <div className="mt-2">
                            <label htmlFor="username" className="mr-1"> Username: </label>
                            <input type="text" 
                                name="username" 
                                onChange={onChange} 
                                className="form-control" 
                                placeholder="Enter Username" />
                            </div>

                            <div className="mt-2">
                            <label htmlFor="password" className="mr-2"> Password:  </label>
                            <input type="password"
                                name="password"
                                onChange={onChange}
                                className="form-control"
                                placeholder="Enter Password" />
                            </div>

                            <div className="mt-4">
                            <Button 
                                className="button is-dark is-medium"
                                type="submit"> Log In
                            </Button>
                            </div>
                        </form>

                        { message ? <Message message={message} /> : null }

                
                </div>
                
                </div>
            
            </div>
          </div>  
        </div>

    )
}

export default Login;
