import { useAPI } from "../utils/useAPI";

export default function Login() {

  const { response, loading, error } = useAPI({
    method: "POST",
    url: "/user/login",
    headers: {
      // no need to stringify
      accept: "*/*",
    },
    data: {
      email: "tony@stark.com",
      password: "password123",
    },
  });

  return (
    <main className="main bg-dark">
      
      <div className='App'>
            <h1>Posts</h1>

            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <p>{response.message}</p>
                    <p>{response.body.token}</p>
                </div>
            )}
        </div>


      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
