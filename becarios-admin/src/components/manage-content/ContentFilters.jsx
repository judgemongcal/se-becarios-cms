import {
  BsArrowUp,
  BsArrowDown,
  BsCalendarWeek,
  BsSortAlphaUp,
  BsSortAlphaDown,
} from 'react-icons/bs';

import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

function ContentFilters() {
  return (
    <div className=" mt-2 flex w-[100%] flex-row justify-between gap-2  md:gap-5">
      <button className="alpha-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-[4%] py-3 duration-300   md:py-4">
        <BsSortAlphaUp className="fill-brand-black h-[22px] w-[32px]" />
      </button>
      <button className="alpha-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-[4%] py-3 duration-300  md:py-4">
        <BsSortAlphaDown className="fill-brand-black h-[22px] w-[28px]" />
      </button>
      <button className="date-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-[4%] py-3 duration-300   md:py-4">
        <BsArrowUp className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" />
      </button>
      <button className="date-desc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-[4%] py-3 duration-300  md:py-4">
        <BsArrowDown className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" />
      </button>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light hidden px-[5%] py-3 duration-300 md:block">
        <GoArrowLeft className="fill-brand-gray h-auto w-[24px]" />
      </button>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light duration-30 hidden px-[5%] py-3 md:block">
        <GoArrowRight className="fill-brand-gray h-auto w-[24px]" />
      </button>
    </div>
  );
}

export default ContentFilters;
