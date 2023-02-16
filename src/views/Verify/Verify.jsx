import React, { useEffect } from 'react'
import style from './verify.module.css'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Verify() {
  const {id} = useParams()
  console.log(id);
  const data = async() => {
    const response = await axios.put(`http://localhost:8080/api/users/verify/${id}`)
    return response
  }
  useEffect(() => {
    data()
  })
  return (
    <div className={style.container}>
      <div>
        <h1>Tu cuenta esta verificada, ya puedes navegar con libertad</h1>
        <Anchor className={style.anchor} to={"/"}>Volver al inicio</Anchor>
      </div>
    </div>
  )
}
