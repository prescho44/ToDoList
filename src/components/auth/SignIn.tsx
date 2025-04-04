import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../../../supabase.config";
import { useNavigate } from "react-router";
import useAuthSession from "../../hooks/useAuthSession";

const SignIn = () => {
  const navigate = useNavigate();
  const session = useAuthSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpNewUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message || "Loging in failed. Please try again.");
    } else {
      setSuccessMessage("Logging in successful!");
    }
    navigate("/");
    setLoading(false);
  };

  useEffect(() => {
    if (!session) {
      navigate("/sign-in");
    } else {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center bg-white px-6 py-12 text-gray-900 transition-colors duration-200 lg:px-8 dark:bg-gray-900 dark:text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sign in your account!
        </h2>
        {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
        {successMessage && (
          <p className="mt-2 text-center text-green-500">{successMessage}</p>
        )}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={signUpNewUser} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
              loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-500"
            } focus:ring-2 focus:ring-indigo-600 focus:outline-none`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
