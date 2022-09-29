import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../services/authSlice";
import { argentBankApi } from "../services/api";
import nameEditorReducer from "../features/nameEditor/nameEditor";


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
