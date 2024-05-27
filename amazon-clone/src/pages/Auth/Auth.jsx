import React, { useState, useContext } from "react";
import classes from "./auth.module.css";
import amazonlogo from "../../components/Assets/logos/amazon-logo-transparent.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/Dataproider/Dataprovider";
import { Type } from "../../Utility/Actiontype";
import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [{ user }, dispatch] = useState(DataContext);
  const [loading, setLoading] = useState({
    signup: false,
    signin: false,
  });
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const oathHandler = async (e) => {
    e.preventDefault();

    if (e.target.name == "signin") {
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signin: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setErr(err.message);
          setLoading({ ...loading, signin: false });
        });
    } else {
      setLoading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signup: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setErr(err.message);
          setLoading({ ...loading, signup: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img src={amazonlogo} alt="amazon logo" className={classes.logo} />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign in</h1>
        {navStateData.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label for="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            name="signin"
            type="submit"
            onClick={oathHandler}
            className={classes.login_signinbtn}
          >
            {loading.signin ? (
              <ClipLoader color="#36d7b7" size={15} />
            ) : (
              "Sign in"
            )}
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy,
          our cookies noticed and our interest-based ads notice.
        </p>
        <button
          name="signup"
          type="submit"
          onClick={oathHandler}
          className={classes.login_createbtn}
        >
          {loading.signup ? (
            <ClipLoader color="#36d7b7" size={15} />
          ) : (
            "Create your account"
          )}
        </button>
        {err && (
          <small style={{ paddingTop: "5px", color: "red" }}>{err}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
