import {
  HiOutlineViewBoards,
  HiOutlinePlusCircle,
  HiOutlineFolderOpen,
  HiOutlineArchive,
  HiOutlineCog,
  HiOutlineLogout,
} from 'react-icons/hi';

import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-brand-black  fixed flex h-[100vh] flex-col items-center gap-[3.5rem] text-white md:w-[17.5rem]">
      <img
        src="./src/assets/org_logo.png"
        alt=""
        className="mb-10 mt-[80px] w-[50%]"
      />
      <div className="user-details"></div>
      <section className="navigation mx-auto flex flex-col items-center justify-center gap-[3rem]">
        <button className="dashboard hover:fill-brand-yellow hover:text-brand-yellow justify-baseline flex items-center gap-2">
          <HiOutlineViewBoards className=" h-auto w-[24px]" />
          <p>Dashboard</p>
        </button>

        <button className="create-post hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2">
          <HiOutlinePlusCircle className="ml-1 h-auto w-[24px]" />
          <p>Create Post</p>
        </button>

        <button className="manage-content hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2">
          <HiOutlineFolderOpen className="ml-10 h-auto w-[24px]" />
          <p>Manage Content</p>
        </button>

        <button className="post-archives  hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2">
          <HiOutlineArchive className="ml-5 h-auto w-[24px]" />
          <p>Post Archives</p>
        </button>

        <button className="settings  hover:fill-brand-yellow hover:text-brand-yellow mb-[90px] flex items-center justify-center gap-2">
          <HiOutlineCog className="-ml-5 h-auto w-[24px]" />
          <p>Settings</p>
        </button>

        <button className="sign-out  hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2">
          <HiOutlineLogout className="-ml-3.5 -mr-0.5 h-auto w-[24px]" />
          <p>Sign Out</p>
        </button>
      </section>
    </div>
  );
}

export default NavBar;
