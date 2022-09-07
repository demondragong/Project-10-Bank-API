import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Profile from "./routes/Profile";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />    
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}