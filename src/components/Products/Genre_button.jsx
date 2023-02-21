import React, {useEffect, useState} from 'react'
import style from './product.module.css'
import filterActions from '../../store/FilterGender/actions'
import { useDispatch, useSelector } from 'react-redux'
const {filterGender} = filterActions

export default function Genre_button(props) {
  const { id, name } = props;
  const [click, setClick] = useState(true);
  const dispatch = useDispatch();

  const getId = () => {
  setClick(!click)
  dispatch(filterGender(id))
  }

  return (
    <div className={style.btnContainer}>
      {click ?         
      <button onClick={getId} id={id} className={style.btn}>{name}</button> 
      :
      <button onClick={getId} id={id} className={style.btnClicked}>{name}</button>
      }
    </div>
  )
}
