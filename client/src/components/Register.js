import React, {useState, useRef, useEffect} from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import { Button } from "react-bulma-components";

const Register = props => {
    const [user, setUser] = useState({ username: "", password: "", role: ""});
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
        console.log(user);
    }

    const resetForm = () => {
        setUser({ username: "", password: "", role: ""})
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
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username" />
                
                <label htmlFor="password" classname="sr-only"> Password: </label>
                <input type="password"
                       name="password"
                       onChange={onChange}
                       className="form-control"
                       placeholder="Enter Password" />

                <label htmlFor="role" classname="sr-only"> Role: </label>
                <input type="text"
                       name="role"
                       onChange={onChange}
                       className="form-control"
                       placeholder="Enter Role (admin/user)" />

                <Button 
                    className="is-dark is-medium"
                    type="submit"> Register
                </Button>

            </form>

            { message ? <Message message={message} /> : null }
            
        </div>

    )
}

export default Register;
