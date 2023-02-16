import React, {useEffect, useState} from 'react'
import style from './product.module.css'
import Navbar from '../../layout/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import productActions from '../../store/Product/actions'
import axios from 'axios'
import { Link as Anchor } from 'react-router-dom'
/* import YouTube from "react-youtube" */
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

/*     const opts = {
        height: '50',
        width: '300',
        borderRadius: 20,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }; */

  return (
    <>
    <div className={style.container}>
        <div>
            <div className={style.vinylbg}>
                <Anchor className={style.back} to={'/shopping'}><img src='/assets/images/arrow-black.png' className={style.anchorImg}/></Anchor>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <div className={style.imgContainer}>
                        <img className={style.img} src={product.photo} alt="" />
                        <h3>{product.name}</h3>
                        {/* <audio preload="true" controls src='/assets/audio/nunca_quise.mp3' className={style.audio}/> */}
                        {/* <YouTube className={style.youtube} videoId={'GL56LY6fE0E'} opts={opts}/> */}
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
