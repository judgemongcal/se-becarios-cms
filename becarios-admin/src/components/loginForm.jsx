import Button from './Button';

function loginForm() {
  return (
    <div className="main-div flex flex-row justify-around gap-10">
      <div className="brand-info bg-login rounded-login hidden h-[100vh] w-[50%] bg-cover px-[7rem] py-[10rem] text-center leading-[60px] md:block">
        <h1 className="text-[56px] font-bold text-white">WELCOME TO</h1>
        <h1 className="bg-gradient mb-[40px] bg-clip-text text-[56px] font-bold text-transparent">
          ESCOLARIO
        </h1>
        <h2 className="text-[36px] leading-[44px] text-white">
          The Premier University News Article Platform
        </h2>
      </div>
      <form
        action=""
        className="mx-auto  mt-[5rem] flex flex-col items-center self-center md:mt-[-5rem]"
      >
        <h1 className="mb-10 text-[1.75rem] font-bold">ADMIN LOGIN</h1>
        <div className="credentials flex w-[20rem] flex-col justify-center lg:w-[27rem]">
          <label htmlFor="username" className="mb-2">
            UST College Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="juan.delacruz.med@ust.edu.ph"
            className=" bg-brand-input shadow-shadow-db rounded-8 mb-5 p-2.5"
          />
          <label htmlFor="password" className=" mb-2">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password here"
            className=" bg-brand-input shadow-shadow-db rounded-8 mb-5 p-2.5"
          />
          <p className="mb-2 cursor-pointer self-center text-gray-500">
            Forgot Password?
          </p>
          <Button action="Log In" />
        </div>
      </form>
    </div>
  );
}

export default loginForm;
