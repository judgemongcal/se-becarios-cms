import Button from './Button';

function loginForm() {
  return (
    <div className="main-div flex flex-row">
      <div className="brand-info bg-login bg-slate-500 px-[7rem] py-[10rem] text-center leading-[60px]">
        <h1 className="text-[56px] font-bold">WELCOME TO</h1>
        <h1 className="bg-gradient bg-clip-text text-[56px] font-bold text-transparent">
          ESCOLARIO
        </h1>
      </div>
      <form action="" className="mx-auto flex flex-col items-center">
        <h1 className="mb-10 text-[1.75rem] font-bold">ADMIN LOGIN</h1>
        <div className="credentials flex w-[22rem] flex-col justify-center md:w-[27rem]">
          <label htmlFor="username" className="mb-2">
            UST College Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="juan.delacruz.med@ust.edu.ph"
            className=" bg-brand-input mb-5 rounded-md p-2.5"
          />
          <label htmlFor="username" className=" mb-2">
            Password
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your password here"
            className=" bg-brand-input mb-5 rounded-md p-2.5"
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
