import React, { useEffect, useState } from 'react'
import styles from './payment.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import BuyerData from '../../components/BuyerData/BuyerData'
import moment from 'moment'
import BuyData from '../../components/BuyData/BuyData'

const Payment = () => {
  const { purchase_id } = useParams()
  const { token } = useSelector(store => store.auth)
  const [purchase, setPurchase] = useState()
  const [buyer, setBuyer] = useState()
  const [send, setSend] = useState(false)
  const [edit, setEdit] = useState(false)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const getPurchase = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/purchase/${purchase_id}`, config)
      setPurchase(response?.data?.response)
    } catch (error) {
      console.log(error);
    }
  }
  const getBuyer = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/buyer`, config)
      setBuyer(response?.data?.response)
    } catch (error) {
      console.log(error);
    }
  }
  const handleEdit = () => {
    setEdit(!edit)
  }
  const handleSubmit = async (e, data) => {
    e.preventDefault()
    await axios.put('http://localhost:8080/api/buyer/edit-buyer', data, config)
    await getBuyer()
    setEdit(!edit)
  }
  const handlePayment = async() => {
    const data = purchase.products.map(product => ({_id: product.product_id._id, quantity: product.quantity}))
    const response = await axios.post('http://localhost:8080/api/payment', data, config)
    window.location.href = response.data.url
  }
  useEffect(()=> {
    getPurchase()
    getBuyer()
    
  },[token])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comprar</h1>
      <div className={styles.data}>
        <div className={styles.buyer}>
          <h3 className={styles.title}>datos del comprador</h3>
          {
            !edit ? 
            <BuyerData handleEdit={handleEdit} buyer={buyer}/> :
            <PaymentForm handleSubmit={handleSubmit} buyer={buyer}/>
          }
        </div>
        <div className={styles.pay}>
          <h3 className={styles.title}>datos de la compra</h3>
          <BuyData purchase={purchase} handlePayment={handlePayment}/>
        </div>
      </div>
    </div>
  )
}

export default Payment