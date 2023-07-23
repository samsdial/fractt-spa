import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../config/auth";

const FormAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetFormEmail = () => {
    return setEmail("");
  };
  const resetFormPassword = () => {
    return setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInUser(email, password);
      if (userCredential) {
        resetFormEmail();
        resetFormPassword();
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <div className="text-center">
        <h1>login</h1>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAuth;
