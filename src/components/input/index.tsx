import React from 'react'
import styles from './Input.module.scss'


interface Props{
    label: string;
    placeholder: string;
    name: string;
    type: string;
    required: boolean;
}

const Input = ({...props}: Props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className={styles.divInput}>
            <label className={styles.divInput__label}>
                {label}
            </label>
            <input 
                className={styles.divInput__input}
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}

export default Input;
