import './App.css';
import { indexRouter } from './services/routes';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={indexRouter}/>
  );
}

export default App;
