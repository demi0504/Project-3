import React, {useState, useRef, useEffect} from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import { Button } from "react-bulma-components";
import DogSVG from "./DogSVG/DogSVG";

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

        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>
                <label htmlFor="username" classname="sr-only"> Username: </label>
                <input type="text" 
                       name="username"
                       value={user.username}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username" />
                
                <label htmlFor="password" classname="sr-only"> Password: </label>
                <input type="password"
                       name="password"
                       value={user.password}
                       onChange={onChange}
                       className="form-control"
                       placeholder="Enter Password" />

                <label htmlFor="email" classname="sr-only"> Email: </label>
                <input type="email"
                       name="email"
                       value={user.email}
                       onChange={onChange}
                       className="form-control"
                       placeholder="Enter email address" />

                <label htmlFor="role" classname="sr-only"> Role: </label>
                <input type="text"
                       name="role"
                       value={user.role}
                       onChange={onChange}
                       className="form-control"
                       placeholder="Enter Role (admin/user)" />

                <Button 
                    className="is-dark is-medium"
                    type="submit"> Register
                </Button>

            </form>

            { message ? <Message message={message} /> : null }

            <DogSVG />
            
        </div>

    )
}

export default Register;
