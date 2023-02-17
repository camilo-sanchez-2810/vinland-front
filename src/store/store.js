import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Login/reducers';
import carouselReducers from "./Carousel/reducers";
import genreReducers from "./Genre/reducers";
import filterReducers from "./FilterGender/reducers";
import productReducers from "./Product/reducers";
import cartReducers from "./Cart/reducers";
import adminReducerAll from "./admin/reducers";
import userReducers from "./User/reducers";
import productsReducersAll from "./Products/reducers";
import buyerReducer from "./Buyer/reducers";
import alertReducer from "./Alert/reducers";

const { productsReducers , getproductsReducer } = productsReducersAll  

const {adminReducers} = adminReducerAll


const store = configureStore({
        reducer: {
        carousel: carouselReducers,
        genres: genreReducers,
        products: productsReducers,
        auth: authReducer,
        filter: filterReducers,
        product: productReducers,
        cart: cartReducers,
        admin: adminReducers,
        user: userReducers,
        buyer: buyerReducer,
        alert: alertReducer
        allProduct: getproductsReducer,
        buyer: buyerReducer
    }
})

export default store
