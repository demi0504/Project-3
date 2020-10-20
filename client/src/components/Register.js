import React, {useState, useRef, useEffect} from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import { Button } from "react-bulma-components";
import DogSVG from "./DogSVG/DogSVG";
import "./style/form-styles.css";

const Register = props => {
    const [user, setUser] = useState({ username: "", password: "", email: "", role: ""});
    //null to signify not to render component
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value });
    }

    const resetForm = () => {
        setUser({ username: "", password: "", email: "", role: ""})
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const { message } = data;
            //show message to user
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push("/login");
                }, 2000)
            }
        });
    }

    return(

        <div className="hero is-fullheight bG padding-bottom">
          <div className="padding-top">
            <div className="container">
                <DogSVG />
                <div className="columns is-centered in-front">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form onSubmit={onSubmit}>
                            <h3 className="is-size-3 loginH3">Please Register</h3>

                            <div className="mt-2">
                                <label htmlFor="username" className=""> Username: </label>
                                <input type="text" 
                                    name="username"
                                    value={user.username}
                                    onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Enter Username" />
                            </div>
                            
                            <div className="mt-2">
                            <label htmlFor="password" className="mr-1"> Password: </label>
                            <input type="password"
                                name="password"
                                value={user.password}
                                onChange={onChange}
                                className="form-control"
                                placeholder="Enter Password" />
                            </div>

                            <div className="mt-2">
                            <label htmlFor="email" className="mr-5"> Email: </label>
                            <input type="email"
                                name="email"
                                value={user.email}
                                onChange={onChange}
                                className="form-control ml-2"
                                placeholder="Enter email address" />
                            </div>

                            <div className="mt-2">
                            <label htmlFor="role" className="mr-5"> Role: </label>
                            <input type="text"
                                name="role"
                                value={user.role}
                                onChange={onChange}
                                className="form-control ml-4"
                                placeholder="Enter Role (admin/user)" />
                            </div>

                            <div className="mt-4">
                            <Button 
                                className="is-dark is-medium"
                                type="submit"> Register
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

export default Register;
