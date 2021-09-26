import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import favoriteSlice from "./favoriteSlice";
import shopSlice from './shopSlice';

const store = configureStore({
    reducer: {
        shop: shopSlice,
        comment : commentSlice,
        favorite : favoriteSlice,
    }
})

export default store;