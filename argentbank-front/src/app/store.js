import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import { argentBankApi } from "../slices/api";
import nameEditorReducer from "../features/nameEditor/nameEditor";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  nameEditor: nameEditorReducer,
  [argentBankApi.reducerPath]: argentBankApi.reducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(argentBankApi.middleware),
  devTools: true,
});

export default store;
