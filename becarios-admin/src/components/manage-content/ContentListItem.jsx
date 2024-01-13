import { PostedSettingsBtn } from '../global/Button';

function ContentListItem() {
  return (
    <div className="bg-brand-light req-container shadow-shadow-db rounded-8 flex flex-col items-center gap-2 p-5 md:flex-row md:gap-5">
      <div className="req-img mx-auto flex w-full max-w-[400px] items-center md:w-[70%]">
        <img
          src="./src/assets/sample_2.jpeg"
          alt=""
          className="rounded-8 h-auto  w-full "
        />
      </div>
      <div className="req-info mt-2 flex flex-col items-start">
        <h1 className="req-title mb-2 text-center text-[1.25rem] font-semibold md:text-start md:text-[1.5rem] ">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit
        </h1>
        <div className="time-info mx-auto mb-1 flex flex-row justify-center gap-3 text-[1rem] md:mx-0 md:text-[1.25rem]">
          <p>February 7, 2024</p>
          <p>8:24 AM</p>
        </div>
        <p className="author mx-auto text-[1rem] md:mx-0 md:text-[1.25rem]">
          Submitted by: Hannah Yu
        </p>
        <div className="btn mt-[1rem] flex w-full flex-row justify-end">
          <PostedSettingsBtn />
        </div>
      </div>
    </div>
  );
}

export default ContentListItem;
