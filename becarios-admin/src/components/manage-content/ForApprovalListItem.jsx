import { FaCheck, FaEye, FaXmark } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ForApprovalListItemBtn } from '../global/Button';

function ForApprovalListItem({ data, id }) {
  const {
    author,
    title,
    isPostApproved,
    isEditApproved,
    isEdited,
    isArchived,
    isArchiveApproved,
    image,
  } = data;
  let type;
  if (
    isPostApproved == false &&
    isEditApproved == false &&
    isArchiveApproved == false
  ) {
    type = 'Article Post';
  } else if (isEditApproved == false && isEdited == true) {
    type = 'Edit Article';
  } else if (
    isArchiveApproved == false &&
    isArchived == true
  ) {
    type = 'Archive';
  }

  return (
    <div className="bg-brand-light req-container shadow-shadow-db rounded-8 flex flex-col gap-2 p-5 md:flex-row lg:gap-5">
      <div className="req-img mx-auto flex h-auto w-full items-center md:w-[70%] lg:max-w-fit">
        <img
          src={image}
          alt=""
          className="rounded-8 mx-auto h-[15rem] w-[20rem]"
        />
      </div>
      <div className="req-info mx-auto mt-2 flex w-full flex-col items-center lg:w-[50%] lg:items-start">
        <p
          className={`activity-label ${
            type == 'Article Post'
              ? 'bg-brand-green text-white'
              : type == 'Edit Article'
                ? 'bg-brand-blue'
                : 'bg-brand-yellow'
          } rounded-8 mb-3 min-w-full max-w-[190px] px-4 py-1 text-center text-[0.9rem] font-medium md:w-[190px] `}
        >
          {type} Request
        </p>
        <h1 className="req-title mb-2 text-center text-[1.05rem] font-semibold md:text-start md:text-[1.25rem]">
          {title}
        </h1>
        <div className="time-info mb-1 flex flex-row gap-3 text-[0.9rem] md:flex-col md:gap-1 md:text-[1rem]">
          <p>February 7, 2024</p>
          <p>8:24 AM</p>
        </div>
        <p className="author text-[0.9rem] md:text-[1rem]">
          Submitted by: Hannah Yu
        </p>
        <ForApprovalListItemBtn />
      </div>
    </div>
  );
}

export default ForApprovalListItem;
