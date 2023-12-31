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
    <nav className="bg-brand-black  hidden h-[100%] min-h-[100vh] flex-col items-center gap-[3.5rem] text-white md:w-[20.5rem] lg:flex">
      <img
        src="./src/assets/org_logo.png"
        alt=""
        className="fixed top-[50px] mb-10 mt-[80px] w-[180px]"
      />
      <div className="user-details"></div>
      <section className="navigation fixed top-[250px] -ml-5 flex flex-col items-center justify-center gap-[3rem] text-[1.15rem]">
        <NavLink
          to="/dashboard"
          className="dashboard hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2"
        >
          <HiOutlineViewBoards className=" h-auto w-[24px]" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          to="/create-post"
          className="create-post hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2"
        >
          <HiOutlinePlusCircle className="ml-1 h-auto w-[24px]" />
          <p>Create Post</p>
        </NavLink>

        <NavLink
          to="/manage-content"
          className="manage-content hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2"
        >
          <HiOutlineFolderOpen className="ml-10 h-auto w-[24px]" />
          <p>Manage Content</p>
        </NavLink>

        <NavLink
          to="/post-archives"
          className="post-archives  hover:fill-brand-yellow hover:text-brand-yellow flex items-center justify-center gap-2"
        >
          <HiOutlineArchive className="ml-5 h-auto w-[24px]" />
          <p>Post Archives</p>
        </NavLink>

        <NavLink
          to="/settings"
          className="settings  hover:fill-brand-yellow hover:text-brand-yellow mb-[70px] flex items-center justify-center gap-2"
        >
          <HiOutlineCog className="-ml-5 h-auto w-[24px]" />
          <p>Settings</p>
        </NavLink>

        <NavLink
          to="/sign-out"
          className="sign-out  hover:fill-brand-red hover:text-brand-red flex items-center justify-center gap-2"
        >
          <HiOutlineLogout className="-ml-3.5 -mr-0.5 h-auto w-[24px]" />
          <p>Sign Out</p>
        </NavLink>
      </section>
    </nav>
  );
}

export default NavBar;
