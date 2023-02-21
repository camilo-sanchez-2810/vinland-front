import React, {useEffect, useRef} from 'react'
import style from './form.module.css'
import { Link as Anchor } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import buyerActions from '../../store/Buyer/actions'
import userActions from '../../store/User/actions'
import Alerts from '../Alert/Alert'
import alertActions from '../../store/Alert/actions'
const {Alert} = alertActions
const {get_buyer, update_buyer} = buyerActions
const {update_one} = userActions

export default function Editform() {
  let { token } = useSelector(store => store?.auth)
  let buyer = useSelector(store => store.buyer.buyer)
  const user = useSelector(store => store.user.user)
  const dispatch = useDispatch()
  const inputName = useRef()
  const inputLast = useRef()
  const inputEmail = useRef()
  const inputAdd = useRef()
  const inputCity = useRef()
  const inputCountry = useRef()

  useEffect(() => {
    dispatch(get_buyer(token))
  },[])



  const sendData = async(e) => {
    e.preventDefault()
    let user = {
      first_name: inputName.current.value,
      last_name: inputLast.current.value,
      email: inputEmail.current.value  
    }
    let buyer = {
      address: inputAdd.current.value,
      city: inputCity.current.value,
      country: inputCountry.current.value
    }
    let data1 = {} 
    let data2 = {}
    for (let prop in user) {
      if (user[prop] !== '') {
        data1[prop] = user[prop];
      }
    }
    for (let prop in buyer) {
      if (buyer[prop] !== '') {
        data2[prop] = buyer[prop];
      }
    }
    console.log(data1);
    console.log(data2);
    const response1 = await dispatch(update_one({token, data: data1}))
    const response2 = await dispatch(update_buyer({token, data: data2}))
    console.log(response1.payload.response);
    console.log(response2);
    if(response1.payload?.success && response2.payload?.success){
      let messages = [response1.payload.response]
      dispatch(Alert({messages, success:true}))
  }
  }

  
  return (
    <div className={style.formContainer}>
      <div className={style.back}>
            <Anchor to={"/profile"} className={style.anchorBack}> <img src="/assets/images/arrowSolid.png" className={style.img} alt="" /> </Anchor>
      </div>
      <form onSubmit={sendData} className={style.form}>
        <h1>Editar mi perfil</h1>
        <input type="text" placeholder={user.first_name} ref={inputName} className={style.input}/>
        <input type="text" placeholder={user.last_name} ref={inputLast} className={style.input}/>
        <input type="text" placeholder={user.email} ref={inputEmail} className={style.input}/>
        <input type="text" placeholder={buyer.address} ref={inputAdd} className={style.input}/>
        <input type="text" placeholder={buyer.city} ref={inputCity} className={style.input}/>
        <input type="text" placeholder={buyer.country} ref={inputCountry} className={style.input}/>
        <input type="submit" value='Enviar' className={style.submit} />
      </form>
      <Alerts/>
</div>
  )
}
