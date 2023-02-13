import React, {useEffect, useState, useRef} from 'react'
import style from './shopping.module.css'
import Product_genre from '../../components/Products/Product_genre'
import { useSelector, useDispatch } from 'react-redux'
import productsActions from '../../store/Products/actions'
import { Link as Anchor } from 'react-router-dom'
import genreActions from '../../store/Genre/actions'
const {get_all_products} = productsActions


export default function Shopping() {
    const allProducts = useSelector((store) => store?.products?.products);
    const text = useSelector((store) => store.products?.text);
    const filter = useSelector((store) => store.filter?.filterGender);
    const dispatch = useDispatch()
    const [pages, setPages] = useState(1);
    const inputText = useRef(text)
    const [load, setLoad] = useState(false);

    useEffect(() => {
        dispatch(get_all_products({ 
            inputText:inputText.current?.value,
            genre: filter?.toString(),
            page: pages
        }))
    }, [load, filter, pages])

    const prev = () => {
        setPages(pages - 1)
    }
    const boton2 = () => {
        if (pages>1) {
          return (
            <button onClick={prev} className={style.prevNext}>
              <img src="/assets/images/arrowSolid.png" alt="" className={style.imageBtn}/>
            </button>
          );
            
        }else{
            return(
                <div></div>
            )
        }
      };
    const next = () => {
        setPages(pages + 1)
    }
    const boton = () => {
    
        let productLimit = allProducts.length

        if (pages === 2) {
          return (
            <div></div>
          );
        } else {
          return (
            <button onClick={next} className={style.prevNext}>
              <img src="/assets/images/rightSolid.png" alt="" className={style.imageBtn}/>
            </button>
          );
        }
      };


    return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <h1 className={style.title}>Nuestros Vinilos</h1>
        </div>
        <div className={style.inputContainer}>
            <input type="text" className={style.searcher} placeholder='Ingresa el producto' ref={inputText} onKeyUp={() => setLoad(!load)}/>
        </div>
        <div>
            <Product_genre/>
        </div>
        <div className={style.shopContainer}>
            <div className={style.sndContainer}>
                    {allProducts.length === 0 
                    ? 
                    <div className={style.sorryContainer}>
                        <h2>Lo sentimos, no encontramos el producto que esta buscando</h2>
                    </div>
                    :
                    <div className={style.products}>
                        {allProducts?.map((product) => {
                       return (
                        <div className={style.card}>
                            <div>
                                <Anchor to={`/product/${product._id}`} className={style.productAnchor}><img className={style.productPhoto} src={product.photo} alt={product.name} /></Anchor>
                            </div>
                            <div className={style.legend}>
                                <h2 className={style.productName}>{product.name}</h2>
                            </div>
                            <div className={style.containerCart}>

                                <h2 className={style.productPrice}>{product.price}$</h2>
                                <button className={style.carrito}><img src="/assets/images/cart2.png" alt="" /></button>
                            </div>
                        </div>
                       )
                    })}
                    </div>
                    }
                <div className={style.buttons}>
                    {boton2()}
                    {boton()}
                    
                </div>
            </div>
        </div>
    </div>
  )
}
