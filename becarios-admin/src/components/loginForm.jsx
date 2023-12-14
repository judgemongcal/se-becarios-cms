import Button from './Button';

function loginForm() {
  return (
    <form action="" className="mx-auto flex flex-col items-center">
      <h1 className="mb-10 text-[1.75rem] font-bold">ADMIN LOGIN</h1>
      <div className="credentials flex w-[22rem] flex-col justify-center md:w-[27rem]">
        <label htmlFor="username" className=" mb-2">
          UST College Email
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="juan.delacruz.med@ust.edu.ph"
          className=" mb-5 rounded-md bg-slate-300 p-2.5"
        />
        <label htmlFor="username" className=" mb-2">
          Password
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your password here"
          className=" mb-5 rounded-md bg-slate-300 p-2.5"
        />
        <Button action="Log In" />
      </div>
    </form>
  );
}

export default loginForm;
