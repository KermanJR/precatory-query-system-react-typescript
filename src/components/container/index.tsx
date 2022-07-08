import React from 'react'
import styles from './Container.module.scss'
const Container = ({children}: any) => {
  return (
    <section className={styles.container}>{children}</section>
  )
}


export default Container;
