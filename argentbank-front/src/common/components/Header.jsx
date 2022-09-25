import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { argentBankApi, usePostUserProfileQuery } from "../../slices/api";
import { logout } from "../../slices/auth";
import logo from "../../static/img/argentBankLogo.png";

export default function Header() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loggedIn = currentUser ? true : false

  useEffect(() => {
    console.log(currentUser)
    console.log(loggedIn)
  })

  const { data, error, isLoading } = usePostUserProfileQuery(undefined, {skip: loggedIn!== true});

  const logOut = useCallback(() => {
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

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <Link to={"/profile"} className="main-nav-item nav-link">
              <i className="fa fa-user-circle header-icon"></i>
              {data ? data.body.firstName : "Profile"}
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
