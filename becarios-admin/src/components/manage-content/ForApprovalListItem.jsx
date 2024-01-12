import { FaCheck, FaEye, FaXmark } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ForApprovalListItemBtn } from '../global/Button';

function ForApprovalListItem() {
  return (
    <div className="req-container shadow-shadow-db rounded-8 flex flex-row gap-2 p-5">
      <div className="req-img w-full">
        <img
          src="./src/assets/org_logo.png"
          alt=""
          className="h-auto w-full"
        />
      </div>
      <div className="req-info">
        <p className="activity-label bg-brand-yellow rounded-8 mb-3 min-w-[50%] max-w-[200px] px-4 py-1 text-center text-[0.85rem] font-medium">
          Article Post Request
        </p>
        <h1 className="req-title mb-2 text-[0.95rem] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit
        </h1>
        <div className="time-info mb-1 flex flex-row gap-3 text-[0.75rem]">
          <p>February 7, 2024</p>
          <p>8:24 AM</p>
        </div>
        <p className="author text-[0.85rem]">
          Submitted by: Hannah Yu
        </p>
        <ForApprovalListItemBtn />
      </div>
    </div>
  );
}

export default ForApprovalListItem;
