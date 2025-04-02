import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import connectionReducer from "./connectionsSlice"
import requestReducer from "./requestSlice"

const appStore = configureStore({
    reducer: {
        user: useReducer,
        connection: connectionReducer,
        request: requestReducer
    }
})


export default appStore;