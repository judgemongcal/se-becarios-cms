import {
  GoSearch,
  GoArrowLeft,
  GoArrowRight,
} from 'react-icons/go';

function SearchField() {
  return (
    <div className=" flex w-full justify-evenly gap-3">
      <div className="search-box bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light flex w-full flex-row items-center gap-3 p-2.5 duration-300 md:p-4">
        <GoSearch className="fill-brand-gray h-auto w-[36px]" />
        <input
          type="text"
          id="search-query"
          name="search-query"
          placeholder="Search here"
          className="bg-brand-input hover:bg-brand-light w-full text-[18px] xl:mr-12"
        />
      </div>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light p-3 duration-300 md:hidden">
        <GoArrowLeft className="fill-brand-gray h-auto w-[24px]" />
      </button>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light p-3 duration-300 md:hidden">
        <GoArrowRight className="fill-brand-gray h-auto w-[24px]" />
      </button>
    </div>
  );
}

export default SearchField;
