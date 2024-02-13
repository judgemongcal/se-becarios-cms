import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  GoSearch,
  GoArrowLeft,
  GoArrowRight,
} from 'react-icons/go';
import { useManageContentContext } from '../../hooks/useManageContentContext';
import { searchArticleByTitle } from '../../server/API/ManageContentAPI';

function SearchField({ type }) {
  const [searchInput, setSearchInput] = useState('');
  const { articles, setArticles } =
    useManageContentContext();

  async function handleSearch() {
    const fetched = await searchArticleByTitle(searchInput);
    setArticles(fetched);
  }

  return (
    <>
      <h1 className=" text-[1.5rem] font-semibold md:text-[1.75rem] ">
        {type && type != 'Activities'
          ? `${type} Articles`
          : ''}
      </h1>
      <div className=" mt-[1rem] flex w-full justify-evenly gap-4">
        <div className="search-box bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light flex w-full flex-row items-center gap-3 p-2.5 duration-300 md:p-4">
          {/* <GoSearch className="fill-brand-gray h-auto w-[36px]" /> */}
          <input
            type="text"
            id="search-query"
            name="search-query"
            value={searchInput}
            placeholder="Search here"
            className="bg-brand-input hover:bg-brand-light w-full text-[18px] xl:mr-12"
            onChange={(e) => {
              setSearchInput(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <button
          className=" bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light p-2.5 duration-300 md:p-4 md:px-8"
          onClick={handleSearch}
        >
          <GoSearch className="fill-brand-gray h-auto w-[30px]" />
        </button>
        {type != 'Activities' ? (
          <>
            <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light p-3 duration-300 md:hidden">
              <GoArrowLeft className="fill-brand-gray h-auto w-[24px]" />
            </button>
            <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light p-3 duration-300 md:hidden">
              <GoArrowRight className="fill-brand-gray h-auto w-[24px]" />
            </button>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default SearchField;
