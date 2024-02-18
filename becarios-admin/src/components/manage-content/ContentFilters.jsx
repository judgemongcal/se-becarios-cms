import {
  BsSortAlphaUp,
  BsSortAlphaDown,
} from 'react-icons/bs';
import React from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useManageContentContext } from '../../hooks/useManageContentContext';

function ContentFilters() {
  const {
    handleSortAlphaUp,
    handleSortAlphaDown,
    handleSortDateAsc,
    handleSortDateDesc,
    handleNavigateLeft,
    handleNavigateRight,
  } = useManageContentContext() || {};

  return (
    <div className=" mt-2 flex w-[100%] flex-row justify-between gap-3  md:gap-5">
      <button
        className="alpha-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex w-full flex-row items-center justify-center py-3  duration-300 md:py-4"
        onClick={handleSortAlphaUp}
        title="Sort Alphabetically (A-Z)"
      >
        <BsSortAlphaDown className="fill-brand-black h-[22px] w-[28px]" />
      </button>
      <button
        className="alpha-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex w-full flex-row items-center justify-center py-3 duration-300   md:py-4"
        onClick={handleSortAlphaDown}
        title="Sort Alphabetically (Z-A)"
      >
        <BsSortAlphaUp className="fill-brand-black h-[22px] w-[32px]" />
      </button>
      <button
        className="date-desc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex w-full flex-row items-center justify-center py-3  duration-300 md:py-4"
        onClick={handleSortDateDesc}
      >
        {/* <BsArrowDown className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" /> */}
        <p>Newest to Oldest</p>
      </button>
      <button
        className="date-asc bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-yellow inline-flex w-full flex-row items-center justify-center py-3   duration-300 md:py-4"
        onClick={handleSortDateAsc}
      >
        {/* <BsArrowUp className="fill-brand-black ml-[-0.25rem] h-auto w-[20px]" />
        <BsCalendarWeek className="fill-brand-black h-auto w-[16px]" /> */}
        <p>Oldest to Newest</p>
      </button>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light hidden w-full items-center py-3 duration-300 md:flex md:flex-row md:justify-center" title="Previous Page">
        <GoArrowLeft className="fill-brand-gray h-auto w-[24px]" />
      </button>
      <button className="bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light hidden w-full items-center py-3 duration-300 md:flex md:flex-row md:justify-center" title="Next Page">
        <GoArrowRight className="fill-brand-gray h-auto w-[24px]" />
      </button>
    </div>
  );
}

export default ContentFilters;
