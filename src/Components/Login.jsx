/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { TbBrandGithub, TbBrandGoogle, TbEye } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "./firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const { handleGoogleSignIn, handleGitHubSignIn, signIn } =
    useContext(AuthContext);
  const [error, seterror] = useState()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        seterror(err.message);
      });
  };

  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => { })
      .catch((err) => {
        seterror(err.message);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold text-color mb-8">
        Login to your account
      </h1>
      <form onSubmit={handleSignIn}>
        <div className="display: inline-block mt-2">
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <p className="error">{error}</p>
        <p className="
        mt-4 cursor-pointer hover:blue-400 decoration-1">
          <span className="mr-7"  onClick={handleResetPassword}>Forgot password?</span>
          <button
            className="btn btn-outline btn-ghost "
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? "Show Password" : "Hide password"}
          </button>
          
        </p>
        <p className="mb-4">
          <span className="text-2xl text-color">New here?</span> Sign up and
          discover our great amount of new recipes{" "}
          <Link
            to="/register"
            className="text-xl hover:underline decoration-1 text-sky-500"
          >
            Sign Up
          </Link>
        </p>

        <button className="btn-primary">Sign In</button>
      </form>
      <hr className="my-3" />
      <p>Or login</p>
      <div className="flex justify-center items- gap-8 mt-4 mb-2">
        
        <div>
          <button
            className="text-4xl p-2 bg-slate-100 rounded-full"
            onClick={handleGoogleSignIn}
          >
            {" "}
            <TbBrandGoogle />{" "}
          </button>
        </div>
        <div>
          <button
            className="text-4xl p-2 bg-slate-100 rounded-full"
            onClick={handleGitHubSignIn}
          >
            <TbBrandGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
