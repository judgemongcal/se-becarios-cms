import { FaCheck, FaEye, FaXmark } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ForApprovalListItemBtn } from '../global/Button';

function ForApprovalListItem() {
  return (
    <div className="req-container shadow-shadow-db rounded-8 flex flex-col gap-2 p-5 md:flex-row md:gap-5">
      <div className="req-img mx-auto flex w-full max-w-[400px] items-center md:w-[70%]">
        <img
          src="./src/assets/sample_2.jpeg"
          alt=""
          className="rounded-8 h-auto  w-full "
        />
      </div>
      <div className="req-info mt-2 flex flex-col items-center md:items-start">
        <p className="activity-label bg-brand-yellow rounded-8 mb-3 min-w-[80%] max-w-[200px] px-4 py-1 text-center text-[0.9rem] font-medium ">
          Article Post Request
        </p>
        <h1 className="req-title mb-2 text-center text-[1.25rem] font-semibold md:text-start md:text-[1.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit
        </h1>
        <div className="time-info mb-1 flex flex-row gap-3 text-[1rem] md:text-[1.25rem]">
          <p>February 7, 2024</p>
          <p>8:24 AM</p>
        </div>
        <p className="author text-[1rem] md:text-[1.25rem]">
          Submitted by: Hannah Yu
        </p>
        <ForApprovalListItemBtn />
      </div>
    </div>
  );
}

export default ForApprovalListItem;
