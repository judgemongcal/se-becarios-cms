import { useClickAway } from 'react-use';
import { useRef, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
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

  useClickAway(ref, () => setOpen(false));
  return (
    <div className="lg:hidden">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
      />
      {isOpen && (
        <div className="shadow-4xl bg-brand-black rounded-10 fixed left-0 right-0 top-[3.5rem] flex flex-col items-center gap-5 border-4 border-b-white/20 py-10 pt-10 text-[#c9c9c9]">
          <button className="dashboard hover:fill-brand-yellow hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.55rem] py-4">
            <HiOutlineViewBoards className=" -ml-2 h-auto w-[36px]" />
            <p className="-ml-2 text-[1.5rem]">Dashboard</p>
          </button>
          <button className="create-post  hover:fill-brand-yellow hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-2 border-4 px-20 py-4">
            <HiOutlinePlusCircle className=" h-auto w-[36px]" />
            <p className="text-[1.5rem]">Create Post</p>
          </button>
          <button className="manage-content hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-0.5 border-4 px-[1.95rem] py-4">
            <HiOutlineFolderOpen className="ml-12 h-auto w-[36px]" />
            <p className="text-[1.5rem]">Manage Content</p>
          </button>
          <button className="post-archives hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-2 border-4 px-[3.6rem] py-4">
            <HiOutlineArchive className="ml-5 h-auto w-[36px]" />
            <p className="text-[1.5rem]">Post Archives</p>
          </button>
          <button className="settings  hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-7 border-4 px-[7.35rem] py-4">
            <HiOutlineCog className=" -ml-10 h-auto w-[36px]" />
            <p className="-ml-3 text-[1.5rem]">Settings</p>
          </button>
          <button className="sign-out hover:text-brand-yellow hover:border-brand-yellow border-brand-gray rounded-10 grid grid-cols-2 items-center gap-7 border-4 px-[6.95rem] py-4">
            <HiOutlineLogout className="-ml-7 h-auto w-[36px]" />
            <p className="-ml-2.5 text-[1.5rem]">
              Sign Out
            </p>
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBarMobile;
