import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import usersReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;