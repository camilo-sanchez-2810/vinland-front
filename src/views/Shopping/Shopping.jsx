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
    const [productsPage, setProductsPage] = useState(6)
    const inputText = useRef(text)
    const [load, setLoad] = useState(false);

    useEffect(() => {
        dispatch(get_all_products({ 
            inputText:inputText.current?.value,
            genre: filter?.toString(),
            page: pages
        }))
    }, [load, filter, pages])


    const indexLastProduct = pages * productsPage
    const indexFirstProduct = indexLastProduct - productsPage
    const currentProducts = allProducts.slice(indexFirstProduct, indexLastProduct)
    const total = Math.ceil(allProducts.length, productsPage)

    const handlePageChange = (pageNumber) => {
      setPages(pageNumber)
    }

/*     const prev = () => {
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
      }; */


    return (
    <div className={style.container}>
        <header className={style.header}>
          <div className={style.titleContainer}>
            <h1 className={style.title}>Nuestros Vinilos</h1>
          </div>
          <div className={style.inputContainer}>
              <input type="text" className={style.searcher} placeholder='Ingresa el producto' ref={inputText} onKeyUp={() => setLoad(!load)}/>
          </div>
        </header>
        <div>
        </div>
        <div className={style.shopContainer}>
            <div className={style.sndContainer}>
            <Product_genre/>
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
                <div className={style.buttons}>
                    {pages > 1 ? 
                    <button className={style.prevNext} onClick={() => handlePageChange(pages - 1)}>             
                      <img src="/assets/images/arrowSolid.png" alt="" className={style.imageBtn}/> 
                    </button>
                    :
                    <div className={style.vacio}></div>
                    }
                    {pages < total ? (
                      <button className={style.prevNext} onClick={() => handlePageChange(pages + 1)}>
                        <img src="/assets/images/rightSolid.png" alt="" className={style.imageBtn}/>
                      </button>
                    )
                      :
                      <div  className={style.vacio}></div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
