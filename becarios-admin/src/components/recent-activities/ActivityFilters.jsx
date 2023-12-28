import {
  BsCalendarWeek,
  BsArrowUp,
  BsArrowDown,
} from 'react-icons/bs';

function ActivityFilters() {
  return (
    <div className="mt-2 flex flex-row justify-evenly">
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light inline-flex flex-row items-center justify-center px-3 py-3 duration-300">
        <BsArrowUp className="fill-brand-black ml-[-0.25rem] h-auto w-[28px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[24px]" />
      </button>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light inline-flex flex-row items-center justify-center px-3 py-4 duration-300">
        <BsArrowDown className="fill-brand-black ml-[-0.25rem] h-auto w-[28px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[24px]" />
      </button>
    </div>
  );
}

export default ActivityFilters;
