import {
  BsArrowUp,
  BsArrowDown,
  BsCalendarWeek,
  BsSortAlphaUp,
  BsSortAlphaDown,
} from 'react-icons/bs';

function ContentFilters() {
  return (
    <div className=" mt-2 flex flex-row justify-around gap-3 md:gap-5">
      <button className="alpha-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-2 py-3 duration-300 md:px-3  md:py-3">
        <BsSortAlphaUp className="fill-brand-black h-[22px] w-[28px]" />
      </button>
      <button className="alpha-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-2 py-3 duration-300 md:px-3  md:py-3">
        <BsSortAlphaDown className="fill-brand-black h-[22px] w-[28px]" />
      </button>
      <button className="date-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-2 py-3 duration-300 md:px-3  md:py-3">
        <BsArrowUp className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" />
      </button>
      <button className="date-desc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center px-2 py-3 duration-300 md:mr-6 md:px-3 md:py-4">
        <BsArrowDown className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" />
      </button>
    </div>
  );
}

export default ContentFilters;
