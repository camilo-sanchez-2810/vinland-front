import React, {useEffect, useState} from 'react'
import style from './product.module.css'
import Navbar from '../../layout/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import productActions from '../../store/Product/actions'
import axios from 'axios'
import { Link as Anchor } from 'react-router-dom'
import Swal from 'sweetalert2'
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

    const description = () => {
        Swal.fire({
            title: 'Descripcion',
            background: ' #2e2e2e',
            color: '#fff',
            text: `${product.description}`,
            imageUrl: `${product.photo}`,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
      };

      const demo = () => {
        Swal.fire({
            title: `${product.name}`,
            color: '#fff',
            background: ' #2e2e2e',
            html:
              `<iframe width="400" height="300" src="https://www.youtube.com/embed/${product.demo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
        
        
       
      }
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
            <div className={style.vinylbg}>
                <Anchor className={style.back} to={'/shopping'}><img src='/assets/images/arrow-black.png' className={style.anchorImg}/></Anchor>
            </div>
            <div className={style.cardContainer}>
                <div className={style.imgCont}>
                <img className={style.img} src={product.photo} alt="" />
                </div>
                <div className={style.textCont}>
                    <h3 className={style.h31}>{product.artist}</h3>
                    <h3 className={style.h32}>{product.name}</h3>
                    <button onClick={description} className={style.cart}>Descripcion</button>
                    <div className={style.demo}>
                    <button onClick={demo} className={style.cart}>DEMO</button>
                      <img className={style.vol} src="/assets/images/auri1.png" alt="" />
                    </div>
                    <div className={style.carritoCOnt}>
                    <img className={style.vinImg} src="/assets/images/vinilo.png" alt="" />
                    
                    <button className={style.cartbut}> <img  className={style.cartImg} src="/assets/images/cart.png" alt="" /></button>
                    </div>
                    
                    <p className={style.price}>{Math.trunc(product.price)}$</p>
                    
                </div>
            </div>
    </div>
    </>
  )
}


//<div className={style.imgContainer}>
  //                      <img className={style.img} src={product.photo} alt="" />
    //                </div>
      //              <div className={style.textContainer}>
        //                <div className={style.h3Container}>
          //                  <h3 className={style.h31}>{product.artist}</h3>
            //                 <h3 className={style.h32}>{product.name}</h3>
            //          </div>
             
            
                        {/* <p className={style.text}>{product.description}</p> */}
            //            <div className={style.priceContainer}>
              //              <div className={style.asdContainer}> 
                //                <img className={style.vinImg} src="/assets/images/vinilo.png" alt="" />
              //                  <p className={style.price}>{product.price}$</p></div>
                //           <div>
                  //          <button className={style.cart}>Añadir al carrito</button>
                    //        </div>
                      //  </div>
                    //</div>