import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Anchor, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import authActions from "../../store/Login/actions";

const { iniciar_sesion } = authActions

export default function SignIn() {
  const { messages } = useSelector((store) => store.auth);
  console.log(messages);
  const dispatch = useDispatch();
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const capture_data = async (e) => {
    e.preventDefault();
    let data = {
      email: email.current.value,
      password: password.current.value
    };
    let res = await dispatch(iniciar_sesion(data));
    if (res.payload.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <main className={styles.mainContain}>
      <div className={styles.div1}></div>
      <div className={styles.div2}>
        <div className={styles.h3contain}>
          <h3 className={styles.h3form}>Sign In</h3>
        </div>
        <div>
          <form className={styles.form1}>
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
                id="password"
                placeholder="Contraseña"
                ref={password}
              />
            </label>
            <input onClick={(e)=>capture_data(e)} className={styles.ssubmit} type="submit" value="Iniciar Sesión" />
          </form>
        </div>
        <div>
        <p className={styles.p1}>Still don't have an account?</p>
         <Anchor className={styles.button1} to={"/signup"}>Crear usario!</Anchor>
         </div>
        <Anchor className={styles.button} to="/">Ir al inicio</Anchor>
      </div>
    </main>
  );
}
