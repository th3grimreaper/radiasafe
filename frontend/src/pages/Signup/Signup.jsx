import Main from "../../constants/Main";
import Button from "../../components/buttons/Button";

const Signup = () => {
  return (
    <>
      <Main className="bg-white">
        <section className="mainWrapper w-full flex justify-center items-center mt-14 h-auto">
          <form className="wrapper mt-8 mb-8 p-4 flex flex-col justify-center items-center rounded-md text-gray-900 shadow-xl">
            <div className="mt-8">
              <div className="text-2xl ">Sign Up</div>
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
                className="border-b-2 border-gray-900 focus:border-sky-600 focus:outline-none p-1"
                type="password"
                name="password"
                id="pswd"
              />
            </div>
            <div className="inputContainer flex flex-col text-base mt-4">
              <label htmlFor="cnfpswd">Confirm Password</label>
              <input
                className=" border-b-2 border-gray-900 focus:border-sky-600 focus:outline-none p-1"
                type="password"
                name="password"
                id="cnfpswd"
              />
            </div>
            <div className="checkContainer flex gap-1 text-sm mt-8">
              <input
                className=""
                type="checkbox"
                name="checkbox"
                id="cbox"
              />
              <label htmlFor="cbox">I agree to the terms and conditions.</label>
            </div>
            <div className="btnContainer flex justify-center mt-8">
              <Button type="submit" name="Sign Up"></Button>
            </div>
          </form>
        </section>
      </Main>
    </>
  );
};

export default Signup;