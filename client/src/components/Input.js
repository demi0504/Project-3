import React from "react";

export default function Input(props) {
  return (
    <div className="field">
        <div className="control">
            <input className="input is-primary" type="text" {...props} />
        </div>
    </div>
  );
}
