import React from 'react'
import styles from './Select.module.scss'
import opcoes from './Select.json'

export const Select = () => {
  return (
    <div>
        <label className={styles.selectLabel}>Interesse</label>
        <select className={styles.select}>
            {opcoes.map((item, index)=>{
                return <option 
                            key={item.id}
                            value={item.name}
                        >
                            {item.name}
                        </option>
            })}
        </select>
    </div>
  )
}
