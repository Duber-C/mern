import Logo from "../components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

function Login() {
  const [visibility, setVisibility] = React.useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <main
      style={{
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#363740",
      }}
    >
      <div className="login-box">
        <div
          style={{
            marginBottom: "2em",
            display: "grid",
            justifyItems: "center",
          }}
        >
          <Logo width="48" height="48" />
          <h1>Dashboard kit</h1>
          <p className="login-p">Enter your email and password below</p>
        </div>

        <form className="login-form" onSubmit={"/admin"}>
          <label>EMAIL</label>
          <input
            className="form-field"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <label>PASSWORD</label>
          <div style={{ position: "relative" }}>
            <input
              className="form-field"
              type={visibility ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            {visibility ? (
              <FontAwesomeIcon
                icon={faEye}
                onClick={toggleVisibility}
                style={{}}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                onClick={toggleVisibility}
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  cursor: "pointer",
                  top: "1em",
                  right: "1em",
                }}
              />
            )}
          </div>
          <a href="/admin" className="login-a">
            Forgot password?
          </a>
          {/* <input className="button" type="submit" value="Log In" /> */}
          <Link to="/admin" className="button" type="submit" value="Log in">
            Log In
          </Link>
        </form>
      </div>
    </main>
  );
}

export default Login;
