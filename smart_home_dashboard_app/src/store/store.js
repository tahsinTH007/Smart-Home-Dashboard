import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slice/userSlice"
import updateProfileReducer from "./slice/updateProfileSlice"

const store = configureStore({
    reducer:{
        user: userReducer,
        updateProfile: updateProfileReducer,
    }
});

export default store;