import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, photo, email, password });
    registerUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
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
            </div>

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
