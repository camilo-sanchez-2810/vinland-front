import React from 'react'
import style from './product.module.css'

export default function Genre_button(props) {
    const {name} = props
  return (
    <div className={style.btnContainer}>
        <button className={style.btn}>{name}</button>
    </div>
  )
}
