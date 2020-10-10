import React from "react";

export default function TextArea(props) {
  return (
    <div className="control">
              <textarea className="textarea has-fixed-size is-primary" {...props}></textarea>
            </div>
  );
}
