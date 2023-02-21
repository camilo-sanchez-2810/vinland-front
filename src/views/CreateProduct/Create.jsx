import React, {useEffect, useRef, useState} from 'react'
import style from './create.module.css'
import genreActions from '../../store/Genre/actions'
import { useSelector, useDispatch } from 'react-redux'
import productActions from '../../store/Product/actions'
import alertActions from '../../store/Alert/actions'
import Alerts from '../../components/Alert/Alert'
import { Link as Anchor } from 'react-router-dom'
const {Alert} = alertActions
const {create} = productActions
const {get_genres} = genreActions
export default function Create() {
    let { token } = useSelector(store => store.auth)
    const genres = useSelector(store => store.genres.genre)
    const product = useSelector(store => store.product)
    const dispatch = useDispatch()
    const genreValue = useRef()
    let inputName = useRef()
    let inputPhoto = useRef()
    let inputPrice = useRef()
    let inputStock = useRef()
    let inputDesc = useRef()
    let inputArtist = useRef()
    console.log(product);
    console.log(genres);
    useEffect(() => {
        dispatch(get_genres())
    },[])
    const createProduct = async(e) => {
        e.preventDefault()
        let data = {
            genre: genreValue.current.value,
            name: inputName.current.value,
            photo: inputPhoto.current.value,
            price: inputPrice.current.value,
            stock: inputStock.current.value,
            description: inputDesc.current.value,
            artist: inputArtist.current.value
        }
        console.log(data)
        const response = await dispatch(create({data, token}))
        console.log(response.payload?.success);
        if(response.payload?.success){
            let messages = response.payload.response
            dispatch(Alert({messages, success:true}))
        }
        if(!response.payload.success){
            let messages = (typeof response.payload.response === "string") ? response.payload.response : response.payload.response?.map(element => element.message)
            dispatch(Alert({messages, success: false}))
        }
    }
  return (
    <div className={style.container}>
        <Anchor to={"/admin-productos"} className={style.anchor}><img src="/assets/images/arrowSolid.png" alt="" /></Anchor>
        <form className={style.form} onSubmit={createProduct}>
            <select className={style.select} ref={genreValue}>
                {genres?.map(genre => 
                    <option value={genre._id} key={genre._id}>{genre.name}</option>
                    )}
            </select>
            <input type="text" placeholder='Ingresa el nombre de tu producto' className={style.input} ref={inputName}/>
            <input type="text" placeholder='Ingresa la portada de tu producto' className={style.input}ref={inputPhoto}/>
            <input type="number" placeholder='Ingresa el precio de tu producto' className={style.input} ref={inputPrice}/>
            <input type="number" placeholder='Ingresa el stock de tu producto' className={style.input} ref={inputStock}/>
            <input type="text" placeholder='Ingresa la descripcion de tu producto' className={style.input} ref={inputDesc}/>
            <input type="text" placeholder='Ingresa el artista de tu producto' className={style.input} ref={inputArtist}/>
            <input type="submit" className={style.submit}/>
        </form>
        <Alerts/>
    </div>
  )
}
