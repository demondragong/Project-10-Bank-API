import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../slices/auth";
import logo from "../static/img/argentBankLogo.png";

export default function Header() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
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
              Profile{currentUser.username}
            </Link>
            <a href="/" className="main-nav-item nav-link" onClick={logOut}>
              Sign out
            </a>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
