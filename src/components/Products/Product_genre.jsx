import React, {useEffect} from 'react'
import style from './product.module.css'
import Genre_button from './Genre_button'
import { useSelector, useDispatch } from 'react-redux'
import genreActions from '../../store/Genre/actions'
const {get_genres} = genreActions

export default function Product_genre() {
  const genres = useSelector((store) => store.genres.genre)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(get_genres())
  }, [])

  return (
    <div className={style.container}>
      {genres?.map((genre, index) =>{
        return (
          <Genre_button
          index={index}
          key={index}
          name={genre.name}  
          />
        )
      })}
    </div>
  )
}
