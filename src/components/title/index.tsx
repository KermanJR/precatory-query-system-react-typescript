import React from 'react'
import styles from './Title.module.scss'

interface Props{
    title: string | null;
}
const Title = (props: Props) => {
    const { title } = props;
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    )
}

export default Title;
