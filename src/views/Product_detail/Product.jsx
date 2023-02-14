import React, {useEffect, useState} from 'react'
import style from './product.module.css'
import Navbar from '../../layout/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import productActions from '../../store/Product/actions'
import axios from 'axios'
import { Link as Anchor } from 'react-router-dom'
const {get_one} = productActions

export default function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const data = async() => {
        try{
            let response = await axios.get(`http://localhost:8080/api/product/${id}`)
            setProduct(response.data.response)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        data()
    },[])
    console.log(product);
/*     const product = useSelector(store => store.product)
    const dispatch = useDispatch()
    console.log(product);

    useEffect(() => {
        dispatch(get_one(id))
    },[]) */

  return (
    <>
    <div className={style.container}>
        <div>
            <div className={style.vinylbg}>
                <Anchor className={style.back} to={'/shopping'}><img src='/assets/images/arrowSolid.png'/></Anchor>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <div className={style.imgContainer}>
                        <img className={style.img} src={product.photo} alt="" />
                        <h3>{product.name}</h3>
                        <audio preload="true" controls src='/assets/audio/nunca_quise.mp3' className={style.audio}/>
                    </div>
                    <div className={style.textContainer}>
                        <p className={style.text}>{product.description}</p>
                        <div className={style.priceContainer}>
                            <p className={style.price}>{product.price}$</p>
                            <button className={style.cart}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.brown}>

            </div>
        </div>
    </div>
    </>
  )
}
