import React from 'react'
import './Button.scss'

type ButtonPropstype = {
    callBack: () => void
    name: string
    disabled?: boolean
    className?: string
}

const Button = (props: ButtonPropstype) => {
    const { callBack, name, disabled, className } = props;
    const onClickHundler = () => {
        callBack();
    }

    return (
        <button
            onClick={onClickHundler}
            disabled={disabled}
            className={`${className}${(disabled) ? ' disabled' : ''}`}
        >{name}</button>
    )
}

export default Button