import React, { useEffect, useState } from "react";
import styles from "./adminPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import adminActions from "../../store/admin/actions";
import axios from "axios";
import Swal from "sweetalert2";
import { Link as Anchor } from 'react-router-dom'
import productsActions from "../../store/Products/actions";

const {getUsers} = adminActions
const { get_all_products} = productsActions

export default function AdminPanelP() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [ change, setChange ] = useState(false);
  

  useEffect(() => {
    dispatch(getUsers(token));
  }, [change]);
  
  const adminUser = useSelector((state) => state.admin.users);
  console.log(adminUser)
  const allProducts = useSelector((store) => store?.products?.products);
  console.log(allProducts)

  const lockUser = async (e) => {
    try {
      const data = {}
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`http://localhost:8080/api/admin/${e.target.value}`, data, headers,);
      
      setChange(!change)
     
    } catch (error) {
      console.log(error);
    }
  };
  const deleted = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Eliminacion Exitosa",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleClick = (userId) => {
    Swal.fire({
      title: "Delete",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
    }).then((resultado) => {
      if (resultado.value) {
        // Hicieron click en "Sí"
        deleteUser(userId);
        console.log(userId)
        deleted();
      } else {
        // Dijeron que no
        console.log("*Comics not delete*");
      }
    });
  };

  const deleteUser = async (id) => {
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:8080/api/admin/${id}`, headers);
      console.log(id)
      setChange(!change)
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <main className={styles.mainPanel}>
      <div className={styles.bgmain}>
      <div className={styles.navBar}>
        <div className={styles.button2}>
          <Anchor to={"/"} className={styles.buttones}>Inicio</Anchor>
        </div>
        <div className={styles.button2}>
          <Anchor className={styles.buttonesuser} to={"/admin"}>Usuarios</Anchor>
          <Anchor className={styles.buttonespro} to={"/admin-productos"}>Productos</Anchor>
          <Anchor className={styles.buttones3} to={"/admin-compras"}>Compras</Anchor>
        </div>
      </div>
          <h1 className={styles.h1Admin}>Panel de administrador</h1>
      </div>
      <div className={styles.bgmain2}>

      </div>

      <div className={styles.container2}>
        <div className={styles.h2contain}>
          <h3 className={styles.h2Admin}>Productos</h3>
        </div>
        <div className={styles.tableContain}>
            
        </div>
      </div>
    </main>
  );
}
