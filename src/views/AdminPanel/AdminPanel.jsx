import React, { useEffect, useState } from "react";
import styles from "./adminPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import adminActions from "../../store/admin/actions";

const {getUsers} = adminActions

export default function AdminPanel() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUsers(token));
  }, []);
  const adminUser = useSelector((state) => state);
  console.log(adminUser)

  return (
    <main className={styles.mainPanel}>
      <div className={styles.navBar}>
        <div className={styles.button2}>
          <button className={styles.buttones}>Inicio</button>
        </div>
        <div className={styles.button2}>
          <button className={styles.buttones}>Compras</button>
          <button className={styles.buttones}>Productos</button>
        </div>
      </div>
      <div className={styles.bgmain}>
        <div className={styles.containH1P}>
          <h1 className={styles.h1Admin}>Panel de administrador</h1>
        </div>
      </div>
      <div className={styles.bgmain2}>

      </div>

      <div className={styles.container2}>
        <div className={styles.h2contain}>
          <h3 className={styles.h2Admin}>Usuarios</h3>
        </div>

      </div>
    </main>
  );
}
