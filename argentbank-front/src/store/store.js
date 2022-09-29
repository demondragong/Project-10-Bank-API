import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import nameEditorReducer from "./nameEditorSlice";
import { argentBankApi } from "../services/api";



const store = configureStore({
  reducer: {
    auth: authReducer,
    nameEditor: nameEditorReducer,
    [argentBankApi.reducerPath]: argentBankApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(argentBankApi.middleware),
  devTools: true,
});

export default store;
