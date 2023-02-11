import React, {useEffect, useState} from 'react'
import axios from 'axios'
import style from './product.module.css'
import Genre_button from './Genre_button'
import { useSelector, useDispatch } from 'react-redux'
import genreActions from '../../store/Genre/actions'
const {get_genres} = genreActions

export default function Product_genre() {
  const [genres, setGenres] = useState([])

  const getData = async() => {
    try{
      const response = await axios.get("http://localhost:8000/api/genre")
      setGenres(response.data.response)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{
    getData()
  }, [])

  return (
    <div className={style.container}>
      {genres?.map((genre, index) =>{
        return (
          <Genre_button
          key={index}
          name={genre.name}  
          id={genre._id}
          />
        )
      })}
    </div>
  )
}
