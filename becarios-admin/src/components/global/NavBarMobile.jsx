import { useClickAway } from 'react-use';
import { useRef, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineViewBoards,
  HiOutlinePlusCircle,
  HiOutlineFolderOpen,
  HiOutlineArchive,
  HiOutlineCog,
  HiOutlineLogout,
} from 'react-icons/hi';

function NavBarMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickAway = () => {
    if (isOpen) {
      setOpen(false);
    }
  };

  useClickAway(ref, handleClickAway);

  const closeMenuOnClick = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div className="bg-brand-black rounded-b-8 flex flex-row items-center justify-between p-8">
        <img
          src="./src/assets/org_logo.png"
          alt=""
          className="w-[150px] "
        />
        <Hamburger
          toggled={isOpen}
          size={32}
          toggle={setOpen}
          color="#f6f6f6"
          label="Show men"
          rounded
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="shadow-4xl bg-brand-black rounded-10 border-brand-black fixed left-0 right-0 top-[6.15rem] flex flex-col items-center gap-5 border-4 py-10 pt-10 text-[1rem] text-[#c9c9c9] md:text-[1.25rem]"
        >
          {/* DASHBOARD */}
          <NavLink
            to="/dashboard"
            onClick={closeMenuOnClick}
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard hover:fill-brand-yellow hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.5rem] py-4"
            >
              <HiOutlineViewBoards className=" -ml-2 h-auto w-[36px]" />
              <p className="-ml-2 ">Dashboard</p>
            </motion.button>
          </NavLink>

          {/* CREATE POST */}
          <NavLink
            to="/create-post"
            onClick={closeMenuOnClick}
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2 + 1 / 10,
              }}
              className="create-post  hover:fill-brand-yellow hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-2 border-4 px-[5rem] py-4"
            >
              <HiOutlinePlusCircle className=" h-auto w-[36px]" />
              <p className=" ">Create Post</p>
            </motion.button>
          </NavLink>

          {/* MANAGE CONTENT */}
          <NavLink
            to="/manage-content"
            onClick={closeMenuOnClick}
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.3 + 1 / 10,
              }}
              className="manage-content hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-0.5 border-4 px-[2.95rem] py-4 md:px-[2.6rem]"
            >
              <HiOutlineFolderOpen className="ml-8 h-auto w-[36px] md:ml-10" />
              <p className="">Manage Content</p>
            </motion.button>
          </NavLink>

          {/* POST ARCHIVES */}
          <NavLink
            to="/post-archives"
            onClick={closeMenuOnClick}
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.4 + 1 / 10,
              }}
              className="post-archives hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-2 border-4 px-[4rem] py-4"
            >
              <HiOutlineArchive className="ml-4 h-auto w-[36px] md:ml-4" />
              <p className="">Post Archives</p>
            </motion.button>
          </NavLink>

          {/* SETTINGS */}
          <NavLink
            to="/settings"
            onClick={closeMenuOnClick}
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.5 + 1 / 10,
              }}
              className="settings  hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-7 border-4 px-[6.6rem] py-4 md:px-[7.15rem]"
            >
              <HiOutlineCog className=" -ml-6 h-auto w-[36px] md:-ml-9" />
              <p className="-ml-3">Settings</p>
            </motion.button>
          </NavLink>

          {/* SIGN OUT */}
          <NavLink
            to="/sign-out"
            onClick={closeMenuOnClick}
          >
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.6 + 1 / 10,
              }}
              className="sign-out hover:text-brand-red hover:border-brand-red border-brand-gray rounded-10 grid grid-cols-2 items-center gap-7 border-4 px-[6.25rem] py-4 md:px-[6.8rem]"
            >
              <HiOutlineLogout className="-ml-4 h-auto w-[36px] md:-ml-6" />
              <p className="-ml-2.5 ">Sign Out</p>
            </motion.button>
          </NavLink>
        </motion.div>
      )}
    </div>
  );
}

export default NavBarMobile;
