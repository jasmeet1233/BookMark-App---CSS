import React, { useState } from "react";

const InputField = ({
  name,
  type,
  value,
  changeHandler,
  style,
}) => {
  return (
    <>
      <p>{name}</p>
      <input
        type={type}
        value={value}
        className={style}
        onChange={changeHandler}
      />
    </>
  );
};

export default InputField;
