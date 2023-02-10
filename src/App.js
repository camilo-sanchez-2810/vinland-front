import './App.css';
import { indexRouter } from './services/routes';
import { RouterProvider } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import authActions from "./store/Login/actions"
const { iniciar_sesion_con_token } = authActions

function App() {
  //useSelector(store => console.log(store))
  let dispatch = useDispatch()

  useEffect(() => {
      let token = localStorage.getItem('token')
      //console.log(token)
      if (token) {
          dispatch(iniciar_sesion_con_token(token))
      }
  },[])
  return (
    <RouterProvider router={indexRouter}/>
  );
}

export default App;
