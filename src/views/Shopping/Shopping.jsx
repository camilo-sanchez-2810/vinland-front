import React, {useEffect} from 'react'
import style from './shopping.module.css'
import Product_genre from '../../components/Products/Product_genre'
import { useSelector, useDispatch } from 'react-redux'
import productsActions from '../../store/Products/actions'
import { Link as Anchor } from 'react-router-dom'
const {get_all_products} = productsActions


export default function Shopping() {
    const allProducts = useSelector((store) => store.products.products)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(get_all_products())
    }, [])

    return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <h1 className={style.title}>Nuestros Vinilos</h1>
        </div>
        <div className={style.inputContainer}>
            <input type="text" className={style.searcher} placeholder='Ingresa el producto'/>
        </div>
        <div>
            <Product_genre/>
        </div>
        <div className={style.shopContainer}>
            <div className={style.sndContainer}>
                    {allProducts.map((product) => {
                       return (
                        <div className={style.card}>
                            <div>
                                <Anchor to={`/${product._id}`} className={style.productAnchor}><img className={style.productPhoto} src={product.photo} alt={product.name} /></Anchor>
                            </div>
                            <div>
                                <p>{product.description}</p>
                                <h2 className={style.productName}>{product.name}</h2>
                            </div>
                        </div>
                       )
                    })}
            </div>
        </div>
    </div>
  )
}
