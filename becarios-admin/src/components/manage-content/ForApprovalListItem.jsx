import { FaCheck, FaEye, FaXmark } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ForApprovalListItemBtn } from '../global/Button';

function ForApprovalListItem({ data, id }) {
  const {
    lastEditedBy,
    author,
    title,
    isPostApproved,
    isEditApproved,
    isEdited,
    isArchived,
    isArchiveApproved,
    image,
    datePosted,
  } = data;
  let date;
  if (datePosted && datePosted.seconds) {
    date = new Date(
      datePosted.seconds * 1000 +
        (datePosted.nanoseconds || 0) / 1000000,
    );
  } else {
    // Set a default date or handle the case where datePosted is not available
    date = new Date(); // Set a default date (e.g., current date/time)
  }
  const maxLength = 19;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const postDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} `;

  const postTime = `${
    date.getHours() % 12 ? date.getHours() % 12 : 12
  }:${
    date.getMinutes() < 10
      ? '0' + date.getMinutes()
      : date.getMinutes()
  } ${date.getHours() >= 12 ? 'PM' : 'AM'}`;

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
    type = 'Archive Article';
  }

  return (
    <div className="bg-brand-light req-container shadow-shadow-db rounded-8 flex flex-col gap-2 p-5 md:flex-row md:gap-4 lg:gap-5 2xl:gap-2">
      <div className="req-img mx-auto flex h-auto w-full items-center md:w-[70%] lg:max-w-fit">
        <img
          src={image}
          alt=""
          className="rounded-8 mx-auto h-[15rem] w-[20rem]"
        />
      </div>
      <div className="req-info mx-auto mt-2 flex w-full flex-col items-center md:items-start lg:w-[50%] ">
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
          {title.length <= maxLength
            ? title
            : title.slice(0, maxLength) + '...'}
        </h1>
        <div className="time-info mb-1 flex flex-row gap-3 text-[0.9rem] sm:items-center md:flex-col md:items-start md:gap-1 md:text-[1rem]">
          <p>{postDate}</p>
          <p>{postTime}</p>
        </div>
        <p className="author text-[0.9rem] md:text-[1rem]">
          Submitted by:{' '}
          {lastEditedBy ? lastEditedBy : author}
        </p>
        <ForApprovalListItemBtn id={id} />
      </div>
    </div>
  );
}

export default ForApprovalListItem;
