import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";

interface UsersState {
    loading: boolean;
  }

const initialState: UsersState = {
    loading: false,
};

export const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
          state.loading = action.payload;
       },
    }
})

// add api getters here...

export const { setLoading} = slice.actions;

export const selectIsLoading = (state: { users: UsersState }) =>
  state.users.loading;

export default slice.reducer;