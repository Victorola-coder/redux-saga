import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an async login process
    setTimeout(() => {
      const hardcodedUsername = "user";
      const hardcodedPassword = "password123";

      if (username === hardcodedUsername && password === hardcodedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        dispatch({ type: "LOGIN_SUCCESS" });
        navigate("/");
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
      }
      setIsLoading(false);
    }, 1000); // Simulate a network request delay
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full min-h-[100dvh] items-center_ justify-center max-w-[300px] mx-auto"
    >
      <h3 className="text-2xl font-bold mb-4">Login</h3>
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
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
