import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import Profile from "./routes/Profile";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />    
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}