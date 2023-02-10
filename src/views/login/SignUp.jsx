import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Anchor, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import authActions from "../../store/Login/actions";

const { registrar_usuario } = authActions;

export default function SignIn() {
  const { messages } = useSelector((store) => store.auth);
  console.log(messages);
  const dispatch = useDispatch();
  const email = useRef("");
  const firtName = useRef("");
  const lastName = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const capture_data = async (e) => {
    e.preventDefault();
    let data = {
      email: email.current.value,
      password: password.current.value,
      first_name: firtName.current.value,
      last_name: lastName.current.value,
    };
    let res = await dispatch(registrar_usuario(data));
    if (res.payload.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <main className={styles.mainContain}>
      <div className={styles.div1}></div>
      <div className={styles.div2}>
        <div className={styles.h3contain}>
          <h3 className={styles.h3form}>Crear usuario</h3>
        </div>
        <div>
          <form className={styles.form}>
            <label className={styles.labelform} htmlFor="">
              <input
                className={styles.inputt}
                type="text"
                id="title"
                placeholder="Nombre"
                ref={firtName}
              />
            </label>
            <label className={styles.labelform} htmlFor="">
              <input
                className={styles.inputt}
                type="text"
                id="description"
                placeholder="Apellido"
                ref={lastName}
              />
            </label>
            <label className={styles.labelform} htmlFor="">
              <input
                className={styles.inputt}
                type="text"
                id="description"
                placeholder="Email"
                ref={email}
              />
            </label>
            <label className={styles.labelform} htmlFor="">
              <input
                className={styles.inputt}
                type="text"
                id="description"
                placeholder="Contraseña"
                ref={password}
              />
            </label>
            <input onClick={(e)=>capture_data(e)} className={styles.ssubmit} type="submit" value="Crear usuario" />
          </form>
        </div>
        <p className={styles.p1}>¿Ya tienes una cuenta?</p>
        <Anchor className={styles.button} to="/signin">Iniciar sesión</Anchor>
      </div>
    </main>
  );
}