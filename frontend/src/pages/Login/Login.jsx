import { Link } from "react-router-dom";
import Main from "../../constants/Main";
import Button from "../../components/buttons/Button";

const Login = () => {
  return (
    <>
      <Main className="bg-white">
        <section className="mainWrapper w-full flex justify-center items-center mt-14 h-auto">
          <form className="wrapper mt-8 mb-8 p-4 flex flex-col justify-center items-center rounded-md text-gray-900 shadow-xl">
            <div className="mt-8">
              <div className="text-2xl ">Login</div>
            </div>
            <div className="inputContainer flex flex-col text-base mt-4">
              <label htmlFor="mail">Email</label>
              <input
                className="border-b-2 border-gray-900 focus:border-sky-600 focus:outline-none p-1"
                type="email"
                name="email"
                id="mail"
              />
            </div>
            <div className="inputContainer flex flex-col text-base mt-4">
              <label htmlFor="pswd">Password</label>
              <input
                className=" border-b-2 border-gray-900 focus:border-sky-600 focus:outline-none p-1"
                type="password"
                name="password"
                id="pswd"
              />
            </div>
            <div className="checkContainer flex gap-1 text-sm mt-8">
              <input
                className="accent-zinc-500"
                type="checkbox"
                name="checkbox"
                id="cbox"
              />
              <label htmlFor="cbox">Remember your login credentials?</label>
            </div>
            <div className="btnContainer flex justify-center mt-8">
              <Button type="submit" name="Login"></Button>
            </div>
            <div className="signupContainer flex justify-center text-sm mt-8">
              <div>
                Don't have and account?
                <span className="not-visited:text-sky-600">
                  <Link to="/signup"> Sign Up here!</Link>
                </span>
              </div>
            </div>
          </form>
        </section>
      </Main>
    </>
  );
};

export default Login;