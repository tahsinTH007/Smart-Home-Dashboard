import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const updateProfileSlice = createSlice({
    name: "updateProfile",
    initialState: {
      loading: false,
      Updateuser: {},
      error: null,
      isUpdated: false,
      message: null,
    },
    reducers: {
        updateRequest(state, action) {
            state.loading = true;
            state.isUpdated = false;
            state.Updateuser = {};
            state.error = null;
            state.message = null;
          },
          updateSuccess(state, action) {
            state.loading = false;
            state.isUpdated = true;
            state.Updateuser = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
          },
          updateFailed(state, action) {
            state.loading = false;
            state.isUpdated = false;
            state.Updateuser = {};
            state.error = action.payload;
            state.message = null;
          },
          clearAllErrors(state, action) {
            state.error = null;
            state.Updateuser = state.user;
        },
    }
});


export const update = (data) => async (dispatch) => {
    dispatch(updateProfileSlice.actions.updateRequest());
    try {
      const response = await axios.post(
        "/api/user/update",
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": 'multipart/form-data' },
        }
      );
      dispatch(updateProfileSlice.actions.updateSuccess(response.data));
      dispatch(updateProfileSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(updateProfileSlice.actions.updateFailed(error.response.data.error.message));
    }
};

export const clearAllUserErrors = () => (dispatch) => {
    dispatch(updateProfileSlice.actions.clearAllErrors());
};

export default updateProfileSlice.reducer;