import React from 'react'

const Button = ({clickHandler, style, isLoading, name}) => {
    return (
      <button
        onClick={clickHandler}
        className={style}
        disabled={isLoading ? true : false}
      >
        {name}
      </button>
    );
}

export default Button
