import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: {},
        error: null,
        isUpdated: false,
        message: null,
    },
    reducers: {
        registerRequest(state, action){
            state.loading = true;
            state.isAuthenticated = false;
            state.isUpdated = false;
            state.user = {};
            state.error = null;
            state.message = null;
        },
        registerSuccess(state, action){
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
            state.isUpdated = false;
        },
        registerFailed(state, action){
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
            state.error = action.payload;
            state.message = null;
            state.isUpdated = false;
        },
        loginRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
            state.error = null;
            state.message = null;
            state.isUpdated = false;
          },
          loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
            state.isUpdated = false;
          },
          loginFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
            state.error = action.payload;
            state.message = null;
            state.isUpdated = false;
          },
          updateRequest(state, action) {
            state.loading = true;
            state.isUpdated = false;
            state.Updateuser = {};
            state.error = null;
            state.message = null;
            state.isAuthenticated = false;
          },
          updateSuccess(state, action) {
            state.loading = false;
            state.isUpdated = true;
            state.Updateuser = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
            state.isAuthenticated = false;
          },
          updateFailed(state, action) {
            state.loading = false;
            state.isUpdated = false;
            state.Updateuser = {};
            state.error = action.payload;
            state.message = null;
            state.isAuthenticated = false;
          },
          clearAllErrors(state, action) {
            state.error = null;
            state.user = state.user;
        },
    }
});

export const register = (data) => async(dispatch) => {
    dispatch(userSlice.actions.registerRequest());

    try {
        const response = await axios.post("/api/auth/register", data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
        });

        dispatch(userSlice.actions.registerSuccess(response.data));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.registerFailed(error.response.data.error.message));
    }
};

export const login = (data) => async (dispatch) => {
    dispatch(userSlice.actions.loginRequest());
    try {
      const response = await axios.post(
        "/api/auth/login",
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(userSlice.actions.loginSuccess(response.data));
      dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(userSlice.actions.loginFailed(error.response.data.error.message));
    }
};


export const update = (data) => async (dispatch) => {
  dispatch(userSlice.actions.updateRequest());
  try {
    const response = await axios.put(
      "/api/user/update",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": 'multipart/form-data' },
      }
    );
    dispatch(userSlice.actions.updateSuccess(response.data));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.updateFailed(error.response.data.error.message));
  }
};


export const clearAllUserErrors = () => (dispatch) => {
    dispatch(userSlice.actions.clearAllErrors());
};
  
export default userSlice.reducer;