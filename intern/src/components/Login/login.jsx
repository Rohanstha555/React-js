import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const userdata = {
    email: "stharohan00@gmail.com",
    password: "11111111",
  }
    const Navigate = useNavigate();

  const btnsubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if(email !== userdata.email || password !== userdata.password) {
      setError("Invalid email or password");
      // alert("Login failed");
      Navigate("/login");
      setEmail("")
      setPassword("")
        return;
    }
    alert("Login successful");
    Navigate("/");


    setError("");
  };

  return (
    <div className="flex justify-center py-16">
      <div className="w-full max-w-sm bg-white border border-gray-100 rounded-xl p-6">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-1">
          Welcome back
        </h2>
        <p className="text-sm text-gray-400 mb-6">Sign in to your account</p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium text-gray-500 block mb-1.5">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-gray-400 transition-colors"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 block mb-1.5">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-gray-400 transition-colors"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <button
            className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-semibold hover:opacity-85 transition-opacity mt-1"
            onClick={btnsubmit}
          >
            Sign In
          </button>
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
        </div>
      </div>
    </div>
  );
}

export default Login;
