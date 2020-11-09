import Login from "./Components/login";
import Logout from "./Components/logout";
import Auth from "./Services/auth";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";

function App() {
  function Home() {
    return <h2>Public</h2>;
  }

  function Protect() {
    return <h2>Protected</h2>;
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Auth.isAuthenticated ? (
          <Component path="/protect" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  const Logging = withRouter(({ history }) => {

    return Auth.isAuthenticated ? (
      <p>
        welcome{" "}
        <button onClick={() => Auth.logout(() => history.push("/home"))}>
          Logout
        </button>{" "}
      </p>
    ) : (
      <p>Please Log In for Access </p>
    );
  });
  return (
    <div className="App">
      <h1>React Auth</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Public</Link>
              </li>
              <Logging />
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protect">Protected</Link>
              </li>
            </ul>
          </nav>

          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protect" component={Protect} />
        </div>
      </Router>
    </div>
  );
}

export default App;
