import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './profile.module.css'
import userActions from '../../store/User/actions'
import carouselActions from '../../store/Carousel/actions';
import { Link as Anchor } from 'react-router-dom';
import axios from 'axios';
const {get_carousel} = carouselActions
const {get_one} = userActions

export default function Profile() {
    const products = useSelector(store => store.carousel.products)
    let { token } = useSelector(store => store?.auth)
    const user = useSelector(store => store.user.user)
    const dispatch = useDispatch()
    const [buyer, setBuyer] = useState({})

    const data = async() =>{
        let headers = {headers: {'Authorization':`Bearer ${token}`}}
        try{
            const response = await axios.get("http://localhost:8080/api/buyer", headers)
            setBuyer(response.data.response)
        }
        catch(error){
            console.log(error);
        }
    }

    console.log(buyer)
    useEffect(() => {
        dispatch(get_one(token))
        dispatch(get_carousel())
        data()
    },[])
  return (
    <div className={style.container}>
        <header className={style.header}>
            <h1 className={style.title}>Mi Perfil</h1>
        </header>
        <div className={style.allContent}>
        <div className={style.infoContainer}>
            <div className={style.imgBg}>
                <div className={style.mailContainer}>
                    <h2 className={style.text}>{user.first_name}</h2>
                    <h2 className={style.text}>{user.email}</h2>
                </div>
                <div className={style.btnContainer}>
                    <button className={style.btn}>Editar Perfil</button>
                </div>
            </div>
            <div className={style.purchase}>
            {buyer?.purchases?.length ? 
            <p>Hay elementos</p>
            :
            <p>Aun no realizaste compras</p>}
            </div>
        </div>
        <div className={style.recomendation}>
            <h2 className={style.recom}>Nuestras recomendaciones</h2>
                {products.map(product => 
                <div className={style.card} key={product._id}>
                    <img src={product.photo} alt="" className={style.img}/>
                    <h3>{product.name.slice(0, 12)}...</h3>
                    <div className={style.buttonContainer}>
                    <button className={style.button}>
								<img src='/assets/images/cart2.png' alt='' />
					</button>
                    </div>
                </div>)}
        </div>
        </div>
    </div>
  )
}
