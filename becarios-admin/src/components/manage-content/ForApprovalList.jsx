import ForApprovalListItem from './ForApprovalListItem';
import React, { useState, useEffect } from 'react';
import * as ManageContentAPI from '../../server/API/ManageContentAPI';

function ForApprovalList() {
  const [pendingArticleCount, setPendingArticleCount] =
    useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count =
          await ManageContentAPI.getCurrentPendingArticleCount();
        setPendingArticleCount(count);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-brand-input shadow-shadow-db rounded-8 mt-[1rem] flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      <div className="header flex flex-row items-center justify-between p-8 py-4 lg:mt-4 lg:py-3">
        <h1 className="text-[1.25rem] font-bold lg:text-[1.5rem]">
          Pending for Approval
        </h1>
        {pendingArticleCount && (
          <h1 className="bg-brand-red flex h-12 w-12 items-center justify-center rounded-[100%] p-4 text-[1.5rem] font-bold tracking-wide text-white">
            {pendingArticleCount}
          </h1>
        )}
      </div>
      <div className="req-items -mt-5 mb-4 flex flex-col gap-6 p-8 xl:grid xl:grid-cols-2">
        {/* CONVERT INTO ARRAY.MAP */}
        <ForApprovalListItem />
        <ForApprovalListItem />
        <ForApprovalListItem />
      </div>
    </div>
  );
}

export default ForApprovalList;
