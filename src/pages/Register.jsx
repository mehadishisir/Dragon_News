import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Register</h2>

          <form className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
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
            </div>

            {/* Register Button */}
            <div className="form-control mt-4">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <span className="link link-primary cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
