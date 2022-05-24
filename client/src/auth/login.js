import Logo from "../components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Login() {
  const [visibility, setVisibility] = React.useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div class="login-box">
      <div
        style={{ marginBottom: "2em", display: "grid", justifyItems: "center" }}
      >
        <Logo />
        <h1>Dashboard kit</h1>
        <p class="login-p">Enter your email and password below</p>
      </div>

      <form class="login-form">
        <label>EMAIL</label>
        <input
          class="form-field"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <label>PASSWORD</label>
        <div style={{ position: "relative" }}>
          <input
            class="form-field"
            type={visibility ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
          {visibility ? (
            <FontAwesomeIcon
              icon={faEye}
              onClick={toggleVisibility}
              style={{
                position: "absolute",
                alignSelf: "center",
                cursor: "pointer",
                top: "1em",
                right: "1em",
              }}
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
        <a class="login-a">Forgot password?</a>
        <input class="button" type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;
