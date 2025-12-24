import React, { use } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();
  const { logIn } = use(AuthContext);

  // ✅ error state ADD
  const [error, setError] = useState("");

  // ✅ firebase error message mapper
  const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
      case "auth/invalid-credential":
        return "Invalid email or password";
      case "auth/user-not-found":
        return "User not found";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/invalid-email":
        return "Invalid email address";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // আগের error clear

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(getFirebaseErrorMessage(error));
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="input input-bordered"
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text-alt link link-hover">
                  Forgot password?
                </span>
              </label>
            </div>

            {/* ✅ Error message SHOW */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-2">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="link link-primary cursor-pointer"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
