import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hard-code login details
    const hardcodedUsername = "admin";
    const hardcodedPassword = "password123";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Save login status to localStorage
      localStorage.setItem("isLoggedIn", "true");
      dispatch({ type: "LOGIN_SUCCESS" });
    } else {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-[300px] mx-auto"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
