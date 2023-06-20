/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from "../../store/Login/actions";
import "./Styles.css";
import logo from "./logo.svg";

const { registrar_usuario } = authActions;

const strengthLabels = ["weak", "medium", "strong"];

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);

  const [strength, setStrength] = useState("");
  const [page, setPage] = useState("one");

  const getStrength = (password) => {
    let strengthIndicator = -1,
      upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }
    setStrength(strengthLabels[strengthIndicator]);
  };

  const handleChange = (event) => {
    getStrength(event.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };
    const res = await dispatch(registrar_usuario(data));
    console.log(res?.payload?.success);
    if (res?.payload?.success) {
      navigate("/", { replace: true });
    }
  };

  const togglePage = () => {
    setPage(page === "one" ? "two" : "one");
  };

  return (
    <>
      <div className="container">
        <div className={page}>
          <img
            src="https://diarioinforme.com/wp-content/uploads/2022/10/3e017507-1.png"
            alt=""
          />
        </div>
        <div className="contain-form">
          <h2 className="h2">
            hey, <br /> <span> what's up!</span>
          </h2>
          <form>
            <img src={logo} />
            <h3>login your account </h3>
            <input
              name="email"
              className="control"
              type="email"
              placeholder="email"
              spellCheck="false"
            />
            <input
              name="password"
              spellCheck="false"
              className="control"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <button className="control" type="button">
              JOIN NOW
            </button>
          </form>
          <h2 className="h2 link" onClick={() => togglePage()}>
            <span>sign up</span>
          </h2>
        </div>
        <div className="contain-form">
          <h2 className="h2">
            hey ,<br /> <span>welcome!</span>
          </h2>
          <form>
            <img src={logo} />
            <h3>create account</h3>
            <input
              name="name"
              className="control "
              type="text"
              placeholder="name"
              ref={nameRef}
            />
            <input
              name="last-name"
              className="control"
              type="text"
              placeholder="last name"
              ref={lastNameRef}
            />
            <input
              name="email"
              className="control"
              type="email"
              placeholder="email"
              spellCheck="false"
              ref={emailRef}
            />
            <input
              ref={passwordRef}
              name="password"
              spellCheck="false"
              className="control"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <div className={`bars ${strength}`}>
              <div></div>
            </div>
            <div className="strength">
              {strength && <>{strength} password</>}
            </div>
            <button
              className="control"
              onClick={(e) => handleSignup(e)}
              type="submit"
            >
              JOIN NOW
            </button>
          </form>
          <h2 className="h2 link" onClick={() => togglePage()}>
            <span>sign in</span>
          </h2>
        </div>
      </div>
    </>
  );
};
