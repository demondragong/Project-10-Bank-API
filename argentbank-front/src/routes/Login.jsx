import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../services/authSlice";
import { useLoginMutation } from "../services/api";

export default function Login(props) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const initialValues = {
    username: localStorage.getItem("username") || "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required."),
    password: Yup.string().required("This field is required."),
  });

  const [login, { isLoading }] = useLoginMutation()

  const handleLogin = async (formValue) => {
    try {
      const { username, password, rememberMe } = formValue;
      const user = await login({username, password}).unwrap()
      dispatch(setCredentials(user))
      localStorage.setItem("token", JSON.stringify(user.body.token));
      rememberMe && localStorage.setItem("username", username);
      props.history.push("/profile");
      window.location.reload();
    } catch(err) {
      console.log(err)
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                type="text"
                id="username"
                autoComplete="off"
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" id="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="input-remember">
              <Field name="rememberMe" type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button" disabled={isLoading}>
              Sign In
            </button>
            {/* {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )} */}
          </Form>
        </Formik>
      </section>
    </main>
  );
}
