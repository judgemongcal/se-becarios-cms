import { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <form action="" className="mx-auto flex flex-col items-center">
        <h1 className="mb-5 text-[1.75rem] font-bold">ADMIN LOGIN</h1>
        <div className="credentials flex min-w-[50%] flex-col justify-center">
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
            className=" rounded-md bg-slate-300 p-2.5"
          />
        </div>

        <button>Log In</button>
      </form>
    </>
  );
}

export default App;
