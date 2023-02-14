import React, {useEffect, useState, useRef} from 'react'
import style from './shopping.module.css'
import Product_genre from '../../components/Products/Product_genre'
import { useSelector, useDispatch } from 'react-redux'
import productsActions from '../../store/Products/actions'
import { Link as Anchor } from 'react-router-dom'
import ProductItem from '../../components/ProductItem/ProductItem'
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
    }, [load, filter])

    const prev = () => {
        setPages(pages - 1)
    }
    const next = () => {
        setPages(pages + 1)
    }
    const boton = () => {
        let productLimit = allProducts.length
        if(productLimit < 9){
            /* return <button className="noMore">No more comics</button>; */
        }else{
/*             return (
                <button onClick={next} className="buttonNext">
                Next
              </button>
            ) */
        }
    }

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
                        {allProducts?.map((product, index) => {
                       return (
                        <ProductItem key={index} id={product._id} name={product.name} price={product.price} photo={product.photo} />
                       )
                    })}
                    </div>
                    }
            </div>
        </div>
    </div>
  )
}
