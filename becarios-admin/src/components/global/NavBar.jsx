import {
  HiOutlineViewBoards,
  HiOutlinePlusCircle,
  HiOutlineFolderOpen,
  HiOutlineArchive,
  HiOutlineCog,
  HiOutlineClock,
  HiOutlineLogout,
} from 'react-icons/hi';

import { NavLink, useLocation } from 'react-router-dom';
import { useSignOutContext } from '../../hooks/useSignOutContext';
import UserInfo from './UserInfo';

function NavBar() {
  const { isSignOutClicked, setIsSignOutClicked } =
    useSignOutContext();

  const location = useLocation();

  function isActiveLink(path) {
    return location.pathname === path;
  }
  return (
    <nav className="bg-brand-black  fixed hidden h-[100%] min-h-[100vh] flex-col items-center justify-center gap-[3.5rem] text-white md:w-[20.5rem] lg:flex">
      <img
        src="./src/assets/org_logo.png"
        alt=""
        className="fixed top-[50px] mb-10 mt-[60px] w-[180px]"
      />

      <section className="navigation fixed top-[230px] -ml-5 flex flex-col items-center justify-center gap-[3rem] text-[1.15rem]">
        <UserInfo />

        <NavLink
          to="/dashboard"
          className={`dashboard ${
            !isActiveLink('/dashboard')
              ? 'hover:fill-brand-blue hover:text-brand-blue'
              : ''
          } rounded-10 flex items-center justify-center gap-2 ${
            isActiveLink('/dashboard')
              ? 'text-brand-yellow'
              : ''
          }`}
        >
          <HiOutlineViewBoards className=" h-auto w-[24px]" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          to="/create-article"
          className={`create-article ${
            !isActiveLink('/create-article')
              ? 'hover:fill-brand-blue hover:text-brand-blue'
              : ''
          } flex items-center justify-center gap-2 ${
            isActiveLink('/create-article')
              ? 'text-brand-yellow'
              : ''
          }`}
        >
          <HiOutlinePlusCircle className="ml-5 h-auto w-[24px]" />
          <p>Create Article</p>
        </NavLink>

        <NavLink
          to="/recent-activities"
          className={`recent-activities ${
            !isActiveLink('/recent-activities')
              ? 'hover:fill-brand-blue hover:text-brand-blue'
              : ''
          }  flex items-center justify-center gap-2 ${
            isActiveLink('/recent-activities')
              ? 'text-brand-yellow'
              : ''
          }`}
        >
          <HiOutlineClock className="ml-11 h-auto w-[24px]" />
          <p>Recent Activities</p>
        </NavLink>

        <NavLink
          to="/manage-content"
          className={`manage-content${
            !isActiveLink('/manage-content')
              ? 'hover:fill-brand-blue hover:text-brand-blue'
              : ''
          }  flex items-center justify-center gap-2 ${
            isActiveLink('/manage-content')
              ? 'text-brand-yellow'
              : ''
          }`}
        >
          <HiOutlineFolderOpen className="ml-10 h-auto w-[24px]" />
          <p>Manage Content</p>
        </NavLink>

        <NavLink
          to="/post-archives"
          className={`post-archives ${
            !isActiveLink('/post-archives')
              ? 'hover:fill-brand-blue hover:text-brand-blue'
              : ''
          }  flex items-center justify-center gap-2 ${
            isActiveLink('/post-archives')
              ? 'text-brand-yellow'
              : ''
          }`}
        >
          <HiOutlineArchive className="ml-5 h-auto w-[24px]" />
          <p>Post Archives</p>
        </NavLink>

        <NavLink
          to="/settings"
          className={`settings  ${
            !isActiveLink('/settings')
              ? 'hover:fill-brand-blue hover:text-brand-blue'
              : ''
          }  mb-[30px] flex items-center justify-center gap-2 ${
            isActiveLink('/settings')
              ? 'text-brand-yellow'
              : ''
          }`}
        >
          <HiOutlineCog className="-ml-5 h-auto w-[24px]" />
          <p>Settings</p>
        </NavLink>

        <NavLink
          // to="/sign-out"
          className="sign-out  hover:fill-brand-red hover:text-brand-red flex items-center justify-center gap-2"
          onClick={() =>
            setIsSignOutClicked(!isSignOutClicked)
          }
        >
          <HiOutlineLogout className="-ml-3.5 -mr-0.5 h-auto w-[24px]" />
          <p>Sign Out</p>
        </NavLink>
      </section>
    </nav>
  );
}

export default NavBar;
