import React, {useEffect, useState, useRef} from 'react'
import style from './shopping.module.css'
import Product_genre from '../../components/Products/Product_genre'
import { useSelector, useDispatch } from 'react-redux'
import productsActions from '../../store/Products/actions'
import { Link as Anchor } from 'react-router-dom'
import genreActions from '../../store/Genre/actions'
const {get_all_products} = productsActions


export default function Shopping() {
    const allProducts = useSelector((store) => store.products.products);
    const text = useSelector((store) => store.products.text);
    const filter = useSelector((store) => store.filter?.filterGender);
    console.log(filter)
    const dispatch = useDispatch()
    const [pages, setPages] = useState(1);
    const inputText = useRef(text)
    const [load, setLoad] = useState(false);

    useEffect(() => {
        dispatch(get_all_products({ inputText:inputText.current?.value,
                                    genre: filter?.toString()
        }))
    }, [load, filter])

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
                    {allProducts?.map((product) => {
                       return (
                        <div className={style.card}>
                            <div>
                                <Anchor to={`/${product._id}`} className={style.productAnchor}><img className={style.productPhoto} src={product.photo} alt={product.name} /></Anchor>
                            </div>
                            <div className={style.legend}>
                                <h2 className={style.productName}>{product.name}$</h2>
                            </div>
                            <div className={style.containerCart}>

                                <h2 className={style.productName}>{product.price}$</h2>
                                <button className={style.carrito}><img src="/assets/images/cart2.png" alt="" /></button>
                            </div>
                        </div>
                       )
                    })}
            </div>
        </div>
    </div>
  )
}
