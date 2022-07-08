import styles from './Button.module.scss'
import {buttonProps} from '../../interfaces/Interfaces'


const Button = ({children, type, width, marginTop}: buttonProps) => {
  return (
    <button 
        className={`${styles.button}`}
        style={{
          width: width,
          marginTop: marginTop
        }}
        type={type}
    >
        {children}
    </button>
  )
}


export default Button;
