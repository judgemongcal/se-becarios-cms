import React from 'react';

function PaginationLabel({currentPage, totalPages, onPageChange }) {
  console.log('Current Page in PaginationLabel:', currentPage);
  console.log('Total Pages in PaginationLabel:', totalPages);
  return (
    <div className=" text-left">
      <p className="text-[0.9rem] text-black opacity-90 md:text-[1.25rem]">
        Showing Page <span className="font-bold">{currentPage}</span> of {totalPages}
      </p>
    </div>
  );
}

export default PaginationLabel;
