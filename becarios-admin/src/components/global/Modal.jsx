import { BsExclamationCircle } from 'react-icons/bs';
import {
  FaRegCircleXmark,
  FaRegCircleCheck,
} from 'react-icons/fa6';

import {
  AddAdminModalBtn,
  ApproveModalBtn,
  LogoutBtn,
  PostReqSuccessModalBtn,
  ProceedModalBtn,
  RejectModalBtn,
  SelectAdminRoleBtn,
  SubmitDeleteModalBtn,
  SubmitEditModalBtn,
  SubmitPostModalBtn,
} from '../global/Button';
import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';
import { FiUploadCloud } from 'react-icons/fi';

function ExceededLoginAttemptsModal() {
  return (
    <div className="mx-auto  mt-[35%] flex flex-col items-center self-center text-center md:mt-[20%] xl:mt-[-10%]">
      <img
        src="./src/assets/org_logo.png"
        alt=""
        className="mb-10 w-[25%]"
      />
      <h1 className="text-brand-red mx-5 mb-2 text-[1.5rem] font-bold xl:text-[1.85rem]">
        You&apos;ve reached the maximum number<br></br>of
        failed login attempts
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
              Lorem ipsum dolor sit amet consectetur ac id
              massa
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
              Lorem ipsum dolor sit amet consectetur ac id
              massa
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

function SubmitPostModal() {
  const {
    isSubmitBtnPressed,
    setIsSubmitBtnPressed,
    isSubmitConfirmed,
    setIsSubmitConfirmed,
  } = useCreateArticleContext();

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-yellow stroke-brand-yellow mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-yellow mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          You are about to send a
          <br /> post request.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitPostModalBtn
          isSubmitBtnPressed={isSubmitBtnPressed}
          setIsSubmitBtnPressed={setIsSubmitBtnPressed}
          isSubmitConfirmed={isSubmitConfirmed}
          setIsSubmitConfirmed={setIsSubmitConfirmed}
        />
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
          <br /> request for an existing post.
        </h1>
        <p className="mb-[2rem]text-[1rem] mx-[3rem] font-medium">
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
          <br /> request for an existing post.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitDeleteModalBtn />
      </div>
    </div>
  );
}

function PostReqSuccessModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-green stroke-brand-green mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-green mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          Post Request Submitted.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Your post request has been submitted. It is now
          pending for the approval of the super
          administrator. We appreciate your patience!
        </p>
        <PostReqSuccessModalBtn />
      </div>
    </div>
  );
}

function EditReqSuccessModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          Edit Request Submitted.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Your edit request has been submitted. It is now
          pending for the approval of the super
          administrator. We appreciate your patience!
        </p>
        <ProceedModalBtn />
      </div>
    </div>
  );
}

function DeleteReqSuccessModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          Delete Request Submitted.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Your delete request has been submitted. It is now
          pending for the approval of the super
          administrator. We appreciate your patience!
        </p>
        <ProceedModalBtn />
      </div>
    </div>
  );
}

function SignOutModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-red stroke-brand-red mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-red mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          You are about to sign out.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <LogoutBtn />
      </div>
    </div>
  );
}

function AddAdminModal() {
  return (
    <div className="modal-bg bg-brand-light md:bg-modal-bg fixed top-0 z-[1000] flex h-[100%] w-[100%] items-start justify-center overflow-scroll">
      <div className="modal-container md:bg-brand-light rounded-10 mx-auto flex w-[100%] flex-col justify-center px-[2rem]  py-[2.25rem] text-center md:my-[3rem]  md:w-[50%] xl:w-[50%] 2xl:w-[700px]">
        <h1 className="mb-[3rem] text-[1.25rem] font-semibold md:text-[1.5rem] lg:mb-[4rem]">
          Add New Administrator
        </h1>
        <form
          action=""
          className=" flex flex-col justify-center gap-2 text-left lg:px-[1rem] 2xl:px-[3rem]"
        >
          <h2 className="mb-2 text-[1.15rem] font-semibold lg:text-[1.35rem]">
            Personal Information
          </h2>
          {/* FIRST NAME */}
          <label
            htmlFor="first-name"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            First Name{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter first name"
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
          ></input>

          {/* LAST NAME */}
          <label
            htmlFor="last-name"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Last Name{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter last name"
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
          ></input>

          {/* CONTACT NUMBER */}
          <label
            htmlFor="contact-num"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Contact Number{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="contact-num"
            name="contact-num"
            placeholder="Sample Format: 09123456789"
            // Add number format validation
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
          ></input>

          {/* DISPLAY IMAGE */}
          <label
            htmlFor="admin-id"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Display Image{' '}
            <span className="text-brand-red">*</span>
          </label>
          <div className="image-upload flex items-center justify-between gap-4">
            <div className="flex w-full items-center">
              <label
                htmlFor="dropzone-file"
                className="hover:bg-brand-input rounded-8 shadow-shadow-db flex h-fit w-full cursor-pointer flex-col items-center justify-center bg-white p-2 text-center"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <FiUploadCloud className="mb-[0.5rem] h-auto w-[30px] md:mb-[1rem] md:w-[50px]" />
                  <p className=" mb-1 text-[0.75rem] md:mb-2 xl:text-[0.85rem]">
                    <span className="font-semibold">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </p>
                  <p className="text-[0.75rem] xl:text-[0.75rem]">
                    PNG or JPG files only. (MAX. 5mb)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
            </div>
            <img
              src="./src/assets/sample_admin.png"
              alt="admin image"
              className="shadow-shadow-db  border-brand-yellow h-[120px] w-auto rounded-[100px] border-4 md:h-36"
            />
          </div>

          {/* ROLE */}
          <label
            htmlFor="admin-role"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Role <span className="text-brand-red">*</span>
          </label>
          <SelectAdminRoleBtn />

          {/* ACCOUNT DETAILS */}

          <h2 className="mb-2 mt-[3rem] text-[1.15rem] font-semibold lg:text-[1.35rem]">
            Account Details
          </h2>

          {/* UST COLLEGE EMAIL */}
          <label
            htmlFor="ust-email"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            UST College Email{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="ust-email"
            name="ust-email"
            placeholder="Enter UST College Email"
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
          ></input>

          {/* PASSWORD */}
          <label
            htmlFor="password"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Password{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="rounded-8 shadow-shadow-db mb-[3rem] p-2"
            required
          ></input>

          <AddAdminModalBtn />
        </form>
      </div>
    </div>
  );
}

export {
  ExceededLoginAttemptsModal,
  ApprovePostModal,
  RejectPostModal,
  SubmitPostModal,
  EditPostModal,
  DeletePostModal,
  PostReqSuccessModal,
  EditReqSuccessModal,
  DeleteReqSuccessModal,
  SignOutModal,
  AddAdminModal,
};
