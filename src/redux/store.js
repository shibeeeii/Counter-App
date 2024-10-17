import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({
    reducer:{
        // its the name of the reducer to update the state
        counter:counterSlice

    }
})