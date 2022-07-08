import React from 'react'
import styles from './Checkbox.module.scss'

interface Props{
    text: string
}

export const Checkbox = (props: Props) => {
    const {text} = props;
  return (
    <div className={styles.checkbox}>
        <input 
            type="checkbox"
            className={styles.checkbox__input}
        />
        <label className={styles.checkbox__label}>{text}</label>
    </div>
  )
}
