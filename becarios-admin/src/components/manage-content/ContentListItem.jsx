import {
  ArchivedListItemBtn,
  PostedSettingsBtn,
} from '../global/Button';

function ContentListItem({ type, id, data }) {
  const { author, dateCreated, image, title } = data;
  const date = new Date(
    dateCreated.seconds * 1000 +
      dateCreated.nanoseconds / 1000000,
  );
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

  console.log(postDate, postTime);
  return (
    <div className="bg-brand-light req-container shadow-shadow-db rounded-8 flex flex-col items-center gap-2 p-5 md:gap-5 2xl:flex-row">
      <div className="req-img mx-auto flex w-full max-w-[400px] items-center md:w-[70%]">
        <img
          src="./src/assets/sample_2.jpeg"
          alt=""
          className="rounded-8 h-auto  w-full "
        />
      </div>
      <div className="req-info mt-2 flex flex-col items-start ">
        <h1 className="req-title mb-2 self-center text-center text-[1.05rem] font-semibold md:text-[1.25rem] 2xl:text-start ">
          {title}
        </h1>
        <div className="time-info mx-auto mb-1 flex flex-row justify-center gap-3 text-[0.9rem] md:text-[1rem] 2xl:mx-0">
          <p>{postDate}</p>
          <p>{postTime}</p>
        </div>
        <p className="author mx-auto text-[0.9rem] md:text-[1rem] 2xl:mx-0">
          Written by: {author}
        </p>
        <div className="btn mt-[1rem] flex w-full flex-row justify-end">
          {type === 'Posted' ? (
            <PostedSettingsBtn id={id} />
          ) : type === 'Archived' ? (
            <ArchivedListItemBtn />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentListItem;
