import { BsExclamationCircle } from 'react-icons/bs';

import {
  ApproveModalBtn,
  RejectModalBtn,
  SubmitDeleteModalBtn,
  SubmitEditModalBtn,
} from './Button';

function ExceededLoginAttemptsModal() {
  return (
    <div className="mx-auto  mt-[35%] flex flex-col items-center self-center text-center md:mt-[20%] xl:mt-[-10%]">
      <img src="./src/assets/org_logo.png" alt="" className="mb-10 w-[25%]" />
      <h1 className="text-brand-red mx-5 mb-2 text-[1.5rem] font-bold xl:text-[1.85rem]">
        You&apos;ve reached the maximum number<br></br>of failed login attempts
      </h1>
      <p className="text-[1.25rem] font-medium xl:text-[1.5rem]">
        Please try again later.
      </p>
    </div>
  );
}

function ApprovePostModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto w-[100%] px-[2rem] py-[2.25rem] md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <h1 className="text-brand-green mx-5 mb-[2rem] text-center text-[1.5rem] font-bold xl:text-[1.85rem]">
          You are about to approve a post request.
        </h1>
        <div className="  mt- mx-[1rem] mb-[2rem] flex flex-col items-center justify-center gap-4 self-center text-center md:flex-row">
          <div className="modal-img flex justify-center">
            <img
              src="./src/assets/sample_2.jpeg"
              alt=""
              className="h-auto w-[200px] md:h-auto md:w-[300px]"
            />
          </div>
          <div className="post-info text-center md:ml-[1rem] md:text-left">
            <h2 className="mb-[1rem] font-bold lg:mt-[-1rem] lg:text-[1.25rem]">
              Lorem ipsum dolor sit amet consectetur ac id massa
            </h2>
            <p className="text-[0.85rem] lg:text-[1.15rem]">
              December 12, 2023 9:12PM
            </p>
            <p className="mb-2 text-[0.85rem] lg:text-[1.15rem]">
              Submitted by: Hannah Yu
            </p>
            <p className="bg-brand-yellow rounded-8 mx-auto inline-block px-4 py-1 text-[0.85rem] lg:text-[1rem]">
              Article Post
            </p>
          </div>
        </div>
        <ApproveModalBtn />
      </div>
    </div>
  );
}

function RejectPostModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto w-[100%] px-[2rem] py-[2.25rem] md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <h1 className="text-brand-red mx-5 mb-[2rem] text-center text-[1.5rem] font-bold xl:text-[1.85rem]">
          You are about to reject a post request.
        </h1>
        <div className="  mt- mx-[1rem] mb-[2rem] flex flex-col items-center justify-center gap-4 self-center text-center md:flex-row">
          <div className="modal-img flex justify-center">
            <img
              src="./src/assets/sample_2.jpeg"
              alt=""
              className="h-auto w-[200px] md:h-auto md:w-[300px]"
            />
          </div>
          <div className="post-info text-center md:ml-[1rem] md:text-left">
            <h2 className="mb-[1rem] font-bold lg:mt-[-1rem] lg:text-[1.25rem]">
              Lorem ipsum dolor sit amet consectetur ac id massa
            </h2>
            <p className="text-[0.85rem] lg:text-[1.15rem]">
              December 12, 2023 9:12PM
            </p>
            <p className="mb-2 text-[0.85rem] lg:text-[1.15rem]">
              Submitted by: Hannah Yu
            </p>
            <p className="bg-brand-yellow rounded-8 mx-auto inline-block px-4 py-1 text-[0.85rem] lg:text-[1rem]">
              Article Post
            </p>
          </div>
        </div>
        <RejectModalBtn />
      </div>
    </div>
  );
}

function EditPostModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          You are about to send an edit
          <br /> reuqest for an existing post.
        </h1>
        <p className="mb-4 text-[1.25rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitEditModalBtn />
      </div>
    </div>
  );
}

function DeletePostModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-red stroke-brand-red mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-red mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          You are about to send a delete
          <br /> reuqest for an existing post.
        </h1>
        <p className="mb-4 text-[1.25rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitDeleteModalBtn />
      </div>
    </div>
  );
}

export {
  ExceededLoginAttemptsModal,
  ApprovePostModal,
  RejectPostModal,
  EditPostModal,
  DeletePostModal,
};
