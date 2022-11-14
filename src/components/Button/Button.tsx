import React from 'react'
import './Button.scss'

type ButtonPropstype = {
    callBack: () => void
    name: string
    disabled: boolean
    className: string
}

const Button = ({ callBack, name, disabled, className }: ButtonPropstype) => {

    return (
        <button
            onClick={callBack}
            disabled={disabled}
            className={`${className}${(disabled) ? ' disabled' : ''}`}
        >{name}</button>
    )
}

export default Button