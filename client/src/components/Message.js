import React from "react";
import 'bulma/css/bulma.css'

const getStyle = (props) => {
    let baseClass = "message";
    if (props.message.msgError)
        baseClass = baseClass + "is-danger";
    else
        baseClass = baseClass + "is-primary";
    return baseClass + "has-text-centered";
}

const Message = props => {

    return(
        <div className={getStyle(props)} role="message">
            {props.message.msgBody}
        </div>
    )

}

export default Message;