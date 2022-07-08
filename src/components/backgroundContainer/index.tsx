import React from "react"
import classNames from "classnames"
import styles from './BackgroundContainer.module.scss'

const BackgroundContainer = ({children}: any) => {
  return (
    <div className={classNames({
        [styles["background--container"]]: true
    })}>{children}</div>
  )
}

export default BackgroundContainer
