import { memo, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { ALeftSvg, googleIcon } from "../assets";

const SignIn = () => {
  const {
    handleAddUser,
    handleLogin,
    invalid,
    setInvalid,
    signUp,
    setSignUp,
    toggleNotAvailable,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const { state } = useParams();

  useEffect(() => {
    if (state === "create-account") {
      setSignUp(true);
    } else if (state === "auth") {
      setSignUp(false);
    } else {
    }
  });

  return (
    <div
      className="fixed inset-0 bg-zinc-200 z-[9999] flex items-center justify-center "
      onClick={() => {
        if (invalid) setInvalid(false);
      }}
    >
      <div className="absolute top-4 left-4" onClick={() => navigate("/")}>
        <img src={ALeftSvg} alt="back" className="h-6" />
      </div>
      <div className="relative flex flex-col gap-2 loginForm">
        <button
          className="w-full p-1 flex items-center rounded-full border-zinc-500 border hover:bg-zinc-400/30"
          onClick={toggleNotAvailable}
        >
          <img src={googleIcon} alt="google" className="h-8" />
          <p className="flex-1 flex place-content-center">
            Sign in with google
          </p>
        </button>
        <div className="relative h2 font-bold text-center mb-4">
          {signUp ? "Sign Up" : "Log In"}
        </div>
        <input
          type="text"
          placeholder="Full names"
          className={`py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "flex" : "hidden"
          }`}
          name="names"
          onChange={handleAddUser}
          required
        />
        <input
          type="text"
          name="imgUrl"
          placeholder="Enter a valid image Link"
          className={`py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "flex" : "hidden"
          }`}
          onChange={handleAddUser}
        />
        <input
          type="text"
          placeholder="Your email"
          className={`py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem]`}
          name="email"
          onChange={handleAddUser}
          required
        />
        <input
          type="text"
          placeholder={`${signUp ? "choose username" : "You username"} `}
          className={`py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "flex" : "hidden"
          }`}
          name="username"
          onChange={handleAddUser}
          required
        />
        <input
          type="password"
          name="password"
          placeholder={`${signUp ? "choose password" : "Your password"} `}
          className="py-2 px-4 outline-none lg:w-[25rem] md:w-[20rem] w-[15rem]"
          onChange={handleAddUser}
          required
        />
        {!signUp && (
          <span
            className={`${
              invalid ? "flex" : "hidden"
            } items-center justify-center text-red-400`}
          >
            -Invalid username or password-
          </span>
        )}
        <input
          type="submit"
          value="Login"
          className={`py-2 px-4 outline-none bg-color-1 lg:w-[25rem] md:w-[20rem] w-[15rem] ${
            signUp ? "hidden" : "flex"
          }`}
          onClick={handleLogin}
        />
        <span
          className={` ${signUp ? "hidden" : "flex"} w-full justify-center`}
        >
          -or-
        </span>
        <div>
          {signUp ? (
            <input
              type="submit"
              value="Sign Up"
              className="py-2 px-4 outline-none bg-color-1 lg:w-[25rem] md:w-[20rem] w-[15rem]"
              onClick={handleLogin}
            />
          ) : (
            <button
              className="py-2 px-4 outline-none border border-color-1 hover:bg-color-1 lg:w-[25rem] md:w-[20rem] w-[15rem]"
              onClick={() => navigate("/sign_in/create-account")}
            >
              Sign Up
            </button>
          )}
        </div>
        <button
          className={`py-2 px-4 outline-none justify-center border border-color-1 hover:bg-color-1 ${
            signUp ? "flex" : "hidden"
          }`}
          onClick={() => navigate("/sign_in/auth")}
        >
          Already have account
        </button>
      </div>
    </div>
  );
};

export default memo(SignIn);
