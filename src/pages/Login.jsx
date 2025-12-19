import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="••••••••"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text-alt link link-hover">
                  Forgot password?
                </span>
              </label>
            </div>

            {/* Button */}
            <div className="form-control mt-4">
              <button className="btn btn-primary w-full">Login</button>
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
