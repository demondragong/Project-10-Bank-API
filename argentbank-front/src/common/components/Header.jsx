import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { argentBankApi, usePostUserProfileQuery } from "../../services/api";
import { logout } from "../../services/authSlice";
import logo from "../../static/img/argentBankLogo.png";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  // skip is used to prevent calling usePostUserProfileQuery when the user is not logged in
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    setSkip(true);
    if (isLoggedIn) {
      setSkip(false);
    }
  }, [isLoggedIn]);

  const {
    data: userData,
    error,
    isLoading,
  } = usePostUserProfileQuery(undefined, { skip: skip });

  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    setSkip(true);
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(argentBankApi.util.resetApiState());
  }, [dispatch]);



  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {isLoggedIn ? (
          <div className="navbar-nav ml-auto">
            <Link to={"/profile"} className="main-nav-item nav-link">
              <i className="fa fa-user-circle header-icon"></i>
              {userData ? userData.body.firstName : "Profile"}
            </Link>
            <Link to="/" className="main-nav-item nav-link" onClick={logOut}>
              <i className="fa fa-sign-out header-icon"></i>
              Sign out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle header-icon"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
