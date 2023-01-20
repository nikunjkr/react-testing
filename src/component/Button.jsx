import React from "react";

const Button = ({text, name}) => {
  return (
    <button
      name={name}
      style={{ marginTop: '20px', backgroundColor:"#199FD9" , height:"40px", color: "white"}}
      type='submit'
    >
      {text}
    </button>
  )
};

export default Button;