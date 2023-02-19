import React from "react";

const Input = ({ type, name, id, className, value, setValue }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
