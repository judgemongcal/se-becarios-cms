import {
  BsCalendarWeek,
  BsArrowUp,
  BsArrowDown,
} from 'react-icons/bs';

function ActivityFilters() {
  return (
    <div className=" mt-2 flex flex-row justify-evenly gap-3 md:gap-5">
      <button className="date-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center  py-3 duration-300">
        <BsArrowUp className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" />
      </button>
      <button className="date-desc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center py-3 duration-300 md:mr-6 md:py-4">
        <BsArrowDown className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" />
      </button>
      <button className="filter-posts bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center duration-300">
        <p className="text-[0.75rem]  font-semibold md:px-3 md:text-[1rem]">
          Post Activities
        </p>
      </button>
      <button className="filter-edits bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center  duration-300">
        <p className="text-[0.75rem]  font-semibold md:px-3 md:text-[1rem]">
          Edit Activities
        </p>
      </button>
      <button className="filter-delete bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex flex-row items-center justify-center   duration-300">
        <p className="text-[0.75rem] font-semibold md:px-3 md:text-[1rem]">
          Delete Activities
        </p>
      </button>
    </div>
  );
}

export default ActivityFilters;
