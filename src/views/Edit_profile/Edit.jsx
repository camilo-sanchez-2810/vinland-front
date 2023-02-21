import React from 'react'
import style from './edit.module.css'
import Editform from '../../components/EditForm/Editform'
export default function Edit() {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Editform/>
            <img src="/assets/images/editPhoto.jpg" alt="" className={style.img}/>
        </div>
    </div>
  )
}
