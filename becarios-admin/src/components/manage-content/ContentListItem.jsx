import {
  ArchivedListItemBtn,
  PostedSettingsBtn,
} from '../global/Button';

function ContentListItem({ type, id, data }) {
  const {
    author = 'Unknown Author',
    datePosted = { seconds: 0, nanoseconds: 0 },
    image,
    title = 'Untitled',
  } = data || {};
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

  const maxLength = 9;

  return (
    <div className="bg-brand-light req-container shadow-shadow-db rounded-8 flex flex-col items-center gap-2 p-3 md:gap-5 xl:gap-0 2xl:grid 2xl:grid-cols-2 2xl:gap-0">
      <div className="req-img mx-auto flex h-[80%] w-full max-w-[400px] items-center md:w-[100%] xl:row-span-2  xl:w-[100%]">
        <img
          src={image}
          alt=""
          className="rounded-8 mx-auto   h-[15rem] max-h-full w-[20rem]"
          // min-h-[200px] w-full min-w-full
        />
      </div>
      <div className="req-info mt-2 flex flex-col py-5 pl-3 pr-2 text-center lg:text-start">
        <h1 className="req-title mb-2 self-center text-center text-[1.05rem] font-semibold md:text-[1.15rem] xl:text-start  2xl:self-start ">
          {title.length <= maxLength
            ? title
            : title.slice(0, maxLength) + '...'}
        </h1>
        <div className="time-info mx-auto mb-1 flex flex-row justify-center gap-3 text-[0.9rem] md:text-[1rem]  2xl:mx-0 2xl:flex-col">
          <p>{postDate}</p>
          <p>{postTime}</p>
        </div>
        <p className="author mx-auto text-[0.9rem]  2xl:mx-0">
          Written by: {author}
        </p>
      </div>
      <div className="btn mt-[1rem] flex w-full flex-row justify-end 2xl:col-start-2">
        {type === 'Posted' ? (
          <PostedSettingsBtn id={id} />
        ) : type === 'Archived' ? (
          <ArchivedListItemBtn id={id} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default ContentListItem;
