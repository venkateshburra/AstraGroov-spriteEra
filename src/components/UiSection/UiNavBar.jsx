import bgbig from "../UiSection/bgBig.svg";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function UiNavBar() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordHide = useRef();

  function handlePasswordHide() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(email);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    console.log(password);
  }
  function showToast() {
    if (email.trim() === "" || password.trim() === "") {
      toast.error("Please fill in all fields.");
    } else {
      toast.success("you are successfully logged");
    }
  }

  let inputCss =
    "border-[1.4px] border-[#cfcccc] w-full h-[40px] placeholder:text-[#757575] text-[#757575] text-[15px] p-3 mt-1";
  let labelCss = "text-[15px] font-semibold text-[#333333]";

  return (
    <div className="my-12 max-w-[1700px] mx-auto">
      <div className="max-w-[440px] md:max-w-[540px] lg:max-w-none flex flex-col lg:flex-row lg:items-center mx-auto">
        <div className="relative mx-7 lg:w-[60%] overflow-hidden">
          <img
            src={bgbig}
            alt=""
            className="max-w-[440px] md:max-w-[540px] lg:max-w-full mr-[7px]"
          />
          <div className="absolute top-0 text-white mt-20 ml-12 lg:mt-24 xl:mt-28 lg:ml-20">
            <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium md:font-bold lg:font-extrabold">
              Welcome,
            </h2>
            <h1 className="text-[25px] md:text-[30px] lg:text-[35px] lg:mb-8 font-bold my-[8px]">
              AstraGrove International Public School
            </h1>
            <p className="text-xl md:text-[30px] lg:text-[35px] font-light">
              Admin Panel
            </p>
            <p className="text-[15px] font-light absolute -top-10 lg:-top-[50px] right-[30px]">
              Go To Website
            </p>
          </div>
        </div>
        <div className="mx-7 ml-16 -mt-12 lg:-mt-20 relative lg:w-[40%] lg:max-w-[350px]">
          <h2 className="mb-8 text-[22px] font-bold text-[#333333]">
            Login to your account
          </h2>
          <p>
            <label htmlFor="" className={labelCss}>
              Email
            </label>

            <input
              type="email"
              onChange={handleEmailChange}
              placeholder="Please enter your email"
              className={inputCss}
            />
          </p>
          <div className="mt-5">
            <label className={labelCss}>Password</label>

            <p className="relative">
              <input
                ref={passwordHide}
                onChange={handlePasswordChange}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Please enter your password"
                className={`${inputCss} pr-10`} // Add padding to the right for the icon
              />
              <button
                onClick={handlePasswordHide}
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isPasswordVisible ? (
                    <>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  ) : (
                    <>
                      <path d="M3.98 8.223A10.477 10.477 0 0112 5c4.478 0 8.268 2.943 9.542 7-.597 1.902-1.69 3.593-3.111 4.912M3.98 8.223a9.94 9.94 0 00-1.525 3.777c1.274 4.057 5.064 7 9.542 7 2.214 0 4.265-.723 5.962-1.945M3.98 8.223l12.04 12.04M15 12a3 3 0 01-6 0 3 3 0 016 0z" />
                    </>
                  )}
                </svg>
              </button>
            </p>
          </div>

          <p>
            <button
              className="bg-[#002855] hover:bg-[#0d3563] text-white text-[16px] font-bold w-full my-5 p-2 rounded-[4px]"
              onClick={showToast}
            >
              Login
            </button>
          </p>
          <a className="text-[15px] font-normal cursor-pointer text-[#002855] underline">
            Forget Password?
          </a>
        </div>
      </div>
    </div>
  );
}
