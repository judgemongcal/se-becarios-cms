import { NavLink, useLocation } from 'react-router-dom';
import Greeting from '../components/dashboard/Greeting';
import UserInfo from '../components/global/UserInfo';
import { useSignOutContext } from '../hooks/useSignOutContext';
import {
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineCog,
  HiOutlineFolderOpen,
  HiOutlineLogout,
  HiOutlinePlusCircle,
  HiOutlineViewBoards,
} from 'react-icons/hi';

function Home() {
  const { isSignOutClicked, setIsSignOutClicked } =
    useSignOutContext();

  const location = useLocation();

  const pageHeight = window.innerHeight;
  function isActiveLink(path) {
    return location.pathname === path;
  }
  return (
    <>
      <div className=" z-50 mt-[5rem] flex h-full w-full flex-col items-center justify-center gap-4">
        <UserInfo type="home" />
        <Greeting type="home" />
        <h1 className=" text-[1.25rem] font-medium text-[#121214] md:text-[1.5rem] lg:mt-[2rem]">
          What do you want to do today?
        </h1>
        {/* NAV */}
        <nav
          className="  flex-col items-center justify-center gap-[3.5rem]
      overflow-auto text-black lg:flex"
        >
          <section
            className={`mt-[2rem] grid grid-cols-1 items-center justify-center gap-[1rem] p-2 text-[1.15rem] md:grid-cols-2 md:gap-[1.5rem] lg:mt-[2rem] lg:grid-cols-4 lg:gap-[2rem]`}
          >
            <NavLink
              to="/create-article"
              className={`bg-brand-light rounded-8 shadow-sm-btn2 create-article hover:bg-brand-black p-3 duration-300 ease-in hover:scale-105 ${
                !isActiveLink('/create-article')
                  ? 'hover:fill-brand-blue hover:text-brand-blue'
                  : ''
              } flex items-center justify-center gap-2 ${
                isActiveLink('/create-article')
                  ? 'text-brand-yellow'
                  : ''
              }`}
            >
              <HiOutlinePlusCircle className="-mt-[2px] h-auto w-[24px]" />
              <p>Create Article</p>
            </NavLink>

            {/* <NavLink
            to="/recent-activities"
            className={`recent-activities  ${
              !isActiveLink('/recent-activities')
                ? 'hover:fill-brand-blue hover:text-brand-blue'
                : ''
            }  flex items-center justify-center gap-2  ${
              isActiveLink('/recent-activities')
                ? 'text-brand-yellow'
                : ''
            }`}
          > */}
            {/* <HiOutlineClock className="-mt-[4px] ml-11 h-auto w-[24px] " />
            <p>Recent Activities</p>
          </NavLink> */}

            <NavLink
              to="/manage-content"
              className={`bg-brand-light rounded-8 shadow-sm-btn2 manage-content  hover:bg-brand-black p-3 duration-300 ease-in hover:scale-105 ${
                !isActiveLink('/manage-content')
                  ? 'hover:fill-brand-blue hover:text-brand-blue'
                  : ''
              }  flex items-center justify-center gap-2 ${
                isActiveLink('/manage-content')
                  ? 'text-brand-yellow'
                  : ''
              }`}
            >
              <HiOutlineFolderOpen className="-mt-[4px] h-auto w-[24px]" />
              <p>Manage Content</p>
            </NavLink>

            <NavLink
              to="/post-archives"
              className={`bg-brand-light rounded-8 shadow-sm-btn2 post-archives hover:bg-brand-black  p-3  duration-300 ease-in hover:scale-105 ${
                !isActiveLink('/post-archives')
                  ? 'hover:fill-brand-blue hover:text-brand-blue'
                  : ''
              }  flex items-center justify-center gap-2 ${
                isActiveLink('/post-archives')
                  ? 'text-brand-yellow'
                  : ''
              }`}
            >
              <HiOutlineArchive className="-mt-[4px] h-auto w-[24px]" />
              <p>Post Archives</p>
            </NavLink>

            <NavLink
              to="/settings"
              className={`bg-brand-light rounded-8 shadow-sm-btn2 settings hover:bg-brand-black p-3 duration-200 ease-in hover:scale-105 ${
                !isActiveLink('/settings')
                  ? 'hover:fill-brand-blue hover:text-brand-blue'
                  : ''
              }  flex items-center justify-center gap-2 ${
                isActiveLink('/settings')
                  ? 'text-brand-yellow'
                  : ''
              }`}
            >
              <HiOutlineCog className="-mt-[4px] h-auto w-[24px]" />
              <p>Settings</p>
            </NavLink>
          </section>
          <div className="flex justify-center">
            <NavLink
              // to="/sign-out"
              className="sign-out hover:fill-brand-red-dark hover:text-brand-red-dark text-brand-red my-[3rem]  flex items-center justify-center gap-2 duration-200 ease-in hover:scale-105"
              onClick={() =>
                setIsSignOutClicked(!isSignOutClicked)
              }
            >
              <HiOutlineLogout className="z-50 -mt-[4px] h-[24px] w-auto" />
              <p>Sign Out</p>
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="brand-img bg-login absolute left-0 top-0 -z-10  h-[100vh] w-[100%] bg-cover "></div>
      <div className="overlay-black bg-gradient-overlay  absolute left-0 top-0 -z-10 h-[100%] w-[100%] "></div>
      <div className="overlay-gradient absolute left-0 top-0 -z-10 h-[100%] w-[100%] bg-[rgba(24,23,23,0.5)] px-[7rem]  text-center leading-[60px]"></div>
    </>
  );
}

export default Home;
