import React, { useEffect, useState } from "react";
import styles from "./adminPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import adminActions from "../../store/admin/actions";
import axios from "axios";
import Swal from "sweetalert2";
import { Link as Anchor } from 'react-router-dom'
import productsActions from "../../store/Products/actions";

const {getUsers} = adminActions
const {getProducts} = productsActions

export default function AdminPanelP() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [ change, setChange ] = useState(false);
  const [ page, setPage] = useState(1);


  useEffect(() => {
    dispatch(getUsers(token));
    dispatch(getProducts(page));
  }, [change]);

  const allProducts = useSelector((store) => store?.products?.products);
  console.log(allProducts)



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
        deleteProduct(userId);
        deleted();
      } else {
        // Dijeron que no
        console.log("*Comics not delete*");
      }
    });
  };

  const deleteProduct = async (id) => {
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:8080/api/product/${id}`, headers);
      setChange(!change)
    } catch (error) {
      console.log(error);
    }
  };

  const prev = () => {
    setPage(page - 1)
    setChange(!change)
}
const next = () => {
  setPage(page + 1)
  setChange(!change)
}

  

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
          <Anchor className={styles.buttonCreate} to={"/create-product"}>Crear Producto</Anchor>
        </div>
        <div className={styles.tableContain}>
        <table className={styles.table1}>
             {allProducts?.map((card, index) => {
                    return (
                      <tr className={styles.trr} key={index}>
                        <td className={styles.email1}>
                          {card.artist}
                        </td>
                        <td className={styles.email1}>
                          {card.name}
                        </td>
                        <td className={styles.email1}>
                          {card.genre.name}
                        </td>
                        <td className={styles.email1}>
                          {card.stock}
                        </td>
                        <td  className={styles.lapiz}>
                        <img /*  onClick={ () => handleClick(card._id)}  */
                            className={styles.iconitolP}
                            src="assets/images/lapices.png"
                            alt=""
                          />
                        </td>
                        <td  className={styles.tacho1}>
                        <img  onClick={ () => handleClick(card._id)} 
                            className={styles.iconitoP}
                            src="assets/images/tacho.png"
                            alt=""
                          />
                        </td>
                      </tr>
                    );
                  })}
                  
            </table>
            <div className={styles.buttons}>
                    {page === 1 ?  <div></div>:<button className={styles.butprevnext} onClick={prev}>Prev</button> }
                    {page === 2 ?  <div></div> : <button className={styles.butprevnext} onClick={next}>Next</button>}
                </div>
        </div>
      </div>
    </main>
  );
}
