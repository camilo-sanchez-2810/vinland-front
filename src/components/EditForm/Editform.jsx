import React, {useEffect, useRef} from 'react'
import style from './form.module.css'
import { Link as Anchor } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import buyerActions from '../../store/Buyer/actions'
import userActions from '../../store/User/actions'
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
  console.log(user);
  console.log(buyer);

  useEffect(() => {
    dispatch(get_buyer(token))
  },[])



  const sendData = (e) => {
    e.preventDefault()
    let data1 = {
      first_name: inputName.current.value,
      last_name: inputLast.current.value,
      email: inputEmail.current.value  
    }
    let data2 = {
      address: inputAdd.current.value,
      city: inputCity.current.value,
      country: inputCountry.current.value
    }
    dispatch(update_one({token, data: data1}))
    dispatch(update_buyer({token, data: data2}))

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
</div>
  )
}
