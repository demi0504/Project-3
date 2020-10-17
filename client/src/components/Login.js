import React, {useState, useContext} from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import {AuthContext} from "../Context/AuthContext";
import { Button } from "react-bulma-components";
import DogSVG from "./DogSVG/DogSVG";

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

        <div>
            <form onSubmit={onSubmit}>
                <h3>Please sign in</h3>
                <label htmlFor="username" classname="sr-only"> Username: </label>
                <input type="text" 
                       name="username" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username" />
                
                <label htmlFor="password" classname="sr-only"> Password: </label>
                <input type="password"
                       name="password"
                       onChange={onChange}
                       className="form-control"
                       placeholder="Enter Password" />
                <Button 
                    className="is-dark is-medium"
                    type="submit"> Log In
                </Button>

            </form>

            { message ? <Message message={message} /> : null }

            <DogSVG />
            
        </div>

    )
}

export default Login;
