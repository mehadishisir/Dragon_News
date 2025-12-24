import React, { use } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { registerUser, setUser, updateUser } = use(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getRegisterErrorMessage = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "Email already in use";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/weak-password":
        return "Password should be at least 6 characters";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            // console.log(user);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setError(getRegisterErrorMessage(error));
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered"
                required
              />
            </div>

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
                required
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
                required
                minLength={6}
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Register Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to="/auth/login" className="link link-primary cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
