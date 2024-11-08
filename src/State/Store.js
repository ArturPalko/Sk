import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./reducerc/dialogs-reducer";

let store = configureStore({
    reducer: {
        dialogs: dialogsReducer, // Оборачиваем редюсер в ключ `reducer`
    },
});

export default store;
