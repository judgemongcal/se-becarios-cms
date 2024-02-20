import { BsExclamationCircle } from 'react-icons/bs';
import {
  FaRegCircleXmark,
  FaRegCircleCheck,
} from 'react-icons/fa6';

import {
  AddAdminModalBtn,
  ApproveModalBtn,
  RemoveAdminModalBtn,
  LogoutBtn,
  PostReqSuccessModalBtn,
  ProceedModalBtn,
  RejectModalBtn,
  SelectAdminRoleBtn,
  SubmitDeleteModalBtn,
  SubmitEditModalBtn,
  SubmitPostModalBtn,
  ConfirmAddAdminModalBtn,
  ConfirmEditAdminModalBtn,
  AssignSuperAdminBtn,
  ConfirmAssignSuperAdminModalBtn,
  SubmitArchiveModalBtn,
  TryAgainBtn,
  SubmitRetrieveArchiveModalBtn,
} from '../global/Button';
import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';
import { FiUploadCloud } from 'react-icons/fi';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { useAdminContext } from '../../hooks/useAdminContext';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';
import { useManageContentContext } from '../../hooks/useManageContentContext';

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
  const { currentDoc, currentReqType } =
    useManageContentContext();

  let date;
  if (
    currentDoc.datePosted &&
    currentDoc.datePosted.seconds
  ) {
    date = new Date(
      currentDoc.datePosted.seconds * 1000 +
        (currentDoc.datePosted.nanoseconds || 0) / 1000000,
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

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto w-[100%] px-[2rem] py-[2.25rem] md:w-[60%] xl:w-[60%] 2xl:w-[700px]">
        <h1 className="text-brand-green mx-5 mb-[2rem] text-center text-[1.5rem] font-bold xl:text-[1.85rem]">
          You are about to approve a {currentReqType}{' '}
          request.
        </h1>
        <div className="  mt- mx-[1rem] mb-[2rem] flex flex-col items-center justify-center gap-4 self-center text-center md:flex-row">
          <div className="modal-img flex justify-center">
            <img
              src={currentDoc.image}
              alt=""
              className="rounded-8 shadow-shadow-db h-[200px] w-[200px] md:h-[200px] md:w-[300px]"
            />
          </div>
          <div className="post-info text-center md:ml-[1rem] md:text-left">
            <h2 className="mb-[1rem] font-bold lg:mt-[-1rem] lg:text-[1.25rem]">
              {currentDoc.titleEdit
                ? currentDoc.titleEdit
                : currentDoc.title}
            </h2>
            <p className="text-[0.85rem] lg:text-[1.15rem]">
              {postDate} {postTime}
            </p>
            <p className="mb-2 text-[0.85rem] lg:text-[1.15rem]">
              Submitted by:{' '}
              {currentDoc.submittedBy
                ? currentDoc.submittedBy
                : currentDoc.author}
            </p>
            <p
              className={`${
                currentReqType == 'Article Post'
                  ? 'bg-brand-green text-white'
                  : currentReqType == 'Edit Article'
                    ? 'bg-brand-blue'
                    : 'bg-brand-yellow'
              } rounded-8 mx-auto inline-block px-4 py-1 text-[0.85rem] lg:text-[1rem]`}
            >
              {currentReqType}
            </p>
          </div>
        </div>
        <ApproveModalBtn />
      </div>
    </div>
  );
}

function RejectPostModal() {
  const { currentDoc, currentReqType } =
    useManageContentContext();

  let date;
  if (
    currentDoc.datePosted &&
    currentDoc.datePosted.seconds
  ) {
    date = new Date(
      currentDoc.datePosted.seconds * 1000 +
        (currentDoc.datePosted.nanoseconds || 0) / 1000000,
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

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto w-[100%] px-[2rem] py-[2.25rem] md:w-[60%] xl:w-[60%] 2xl:w-[700px]">
        <h1 className="text-brand-red mx-5 mb-[2rem] text-center text-[1.5rem] font-bold xl:text-[1.85rem]">
          You are about to reject a {currentReqType}{' '}
          request.
        </h1>
        <div className="  mt- mx-[1rem] mb-[2rem] flex flex-col items-center justify-center gap-4 self-center text-center md:flex-row">
          <div className="modal-img flex justify-center">
            <img
              src={currentDoc.image}
              alt=""
              className="rounded-8 shadow-shadow-db h-[200px] w-[200px] md:h-[200px] md:w-[300px]"
            />
          </div>
          <div className="post-info text-center md:ml-[1rem] md:text-left">
            <h2 className="mb-[1rem] font-bold lg:mt-[-1rem] lg:text-[1.25rem]">
              {currentDoc.titleEdit
                ? currentDoc.titleEdit
                : currentDoc.title}
            </h2>
            <p className="text-[0.85rem] lg:text-[1.15rem]">
              {postDate} {postTime}
            </p>
            <p className="mb-2 text-[0.85rem] lg:text-[1.15rem]">
              Submitted by:{' '}
              {currentDoc.submittedBy
                ? currentDoc.submittedBy
                : currentDoc.author}
            </p>
            <p
              className={`${
                currentReqType == 'Article Post'
                  ? 'bg-brand-green text-white'
                  : currentReqType == 'Edit Article'
                    ? 'bg-brand-blue'
                    : 'bg-brand-yellow'
              } rounded-8 mx-auto inline-block px-4 py-1 text-[0.85rem] lg:text-[1rem]`}
            >
              {currentReqType}
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

  const { userInfo } = useUserInfoContext();

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-yellow stroke-brand-yellow mb-4 h-[100px] w-auto stroke-[0.055px]" />
        {userInfo.role == 'Admin' && (
          <h1 className="text-brand-yellow mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
            You are about to send a
            <br /> post request.
          </h1>
        )}
        {userInfo.role == 'Super Admin' && (
          <h1 className="text-brand-yellow mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
            You are about to post
            <br /> an article.
          </h1>
        )}
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

function ArchivePostModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-red stroke-brand-red mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-red mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          You are about to archive
          <br /> an existing post.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitArchiveModalBtn />
      </div>
    </div>
  );
}

function RetrieveArchivedPostModal() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-red stroke-brand-red mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-red mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          You are about to retrieve an <br />
          archived an existing post.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitRetrieveArchiveModalBtn />
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
          You are about to delete
          <br /> an archived post.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <SubmitDeleteModalBtn />
      </div>
    </div>
  );
}

function PostReqSuccessModal({ type }) {
  const { userInfo } = useUserInfoContext();
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-green stroke-brand-green mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-green mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          {userInfo.role == 'Super Admin'
            ? `Article posted successfully.`
            : `Arcticle Post Request Submitted.`}
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          {userInfo.role === 'Super Admin' ? (
            <>
              It should be visible under Manage Content{' '}
              <br />
              tab and in your visitor website after a few
              moments. We appreciate your patience!
            </>
          ) : (
            <>
              Your article post request has been submitted.
              It is now pending for the approval of the
              super administrator.
              <br />
              We appreciate your patience!
            </>
          )}
        </p>
        {type ? (
          <ProceedModalBtn type={type} />
        ) : (
          <PostReqSuccessModalBtn />
        )}
      </div>
    </div>
  );
}

function PostReqRejectSuccessModal({ type }) {
  const { userInfo } = useUserInfoContext();
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-green stroke-brand-green mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-green mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          {userInfo.role == 'Super Admin'
            ? `Article post rejected successfully.`
            : `Arcticle Post Request Submitted.`}
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          {userInfo.role === 'Super Admin' ? (
            <>
              It should be visible under Post Archives{' '}
              <br />
              tab after a few moments. <br /> We appreciate
              your patience!
            </>
          ) : (
            <>
              Your article post request has been submitted.
              It is now pending for the approval of the
              super administrator.
              <br />
              We appreciate your patience!
            </>
          )}
        </p>
        {type ? (
          <ProceedModalBtn type={type} />
        ) : (
          <PostReqSuccessModalBtn />
        )}
      </div>
    </div>
  );
}

function EditReqSuccessModal() {
  const { userInfo } = useUserInfoContext();
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          {userInfo.role == 'Super Admin'
            ? `Article edited successfully.`
            : `Arcticle Edit Request Submitted.`}
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          {userInfo.role === 'Super Admin' ? (
            <>
              Changes made on the article should be visible
              after a few moments.
              <br /> We appreciate your patience!
            </>
          ) : (
            <>
              Your article post request has been submitted.
              It is now pending for the approval of the
              super administrator.
              <br />
              We appreciate your patience!
            </>
          )}
        </p>
        <ProceedModalBtn />
      </div>
    </div>
  );
}

function DeleteReqSuccessModal({ type }) {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          Archived Post has been deleted
        </h1>
        <ProceedModalBtn type={type} />
      </div>
    </div>
  );
}

function ArchiveReqSuccessModal({ type }) {
  const { userInfo } = useUserInfoContext();
  const isSuperAdmin = userInfo.role === 'Super Admin';

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          {isSuperAdmin
            ? 'Post has been archived.'
            : 'Your Archive Request has been submitted.'}
        </h1>
        {!isSuperAdmin && (
          <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
            It is now pending for the approval of the super
            administrator. We appreciate your patience!
          </p>
        )}
        <ProceedModalBtn type={type} />
      </div>
    </div>
  );
}

function RetrieveReqSuccessModal() {
  const { userInfo } = useUserInfoContext();
  const isSuperAdmin = userInfo.role === 'Super Admin';

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleCheck className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          {isSuperAdmin
            ? 'Post has been retrieved.'
            : 'Your Retrieve Request has been submitted.'}
        </h1>
        {!isSuperAdmin && (
          <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
            It is now pending for the approval of the super
            administrator. We appreciate your patience!
          </p>
        )}
        <ProceedModalBtn type="archive" />
      </div>
    </div>
  );
}

function ArchiveReqFailedModal() {
  const { userInfo } = useUserInfoContext();
  const isSuperAdmin = userInfo.role === 'Super Admin';

  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <FaRegCircleXmark className="fill-brand-red stroke-brand-red mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          An error has occured when processing your request.
        </h1>

        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          We apologize for the inconvenience. Please try
          again.
        </p>

        <TryAgainBtn />
      </div>
    </div>
  );
}

function RemoveAdminModal() {
  const { adminFirstName, adminLastName, adminRole } =
    useAdminContext();
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  justify-cente fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-red stroke-brand-red mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-red mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          WARNING: You are about to remove an Administrator.
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Are you sure you want to remove{' '}
          <strong>
            {adminFirstName} {adminLastName}
          </strong>{' '}
          from being an <strong>Administrator</strong>?
        </p>
        <RemoveAdminModalBtn />
      </div>
    </div>
  );
}

function AddAdminModal() {
  const { isEditingAdmin } = useSettingsContext();
  const { adminFirstName, adminRole } = useAdminContext();
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          ATTENTION:{' '}
          {isEditingAdmin
            ? 'You are about to edit an Administrator'
            : 'You are about to add an Administrator.'}
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          {isEditingAdmin
            ? `Are you sure you want to edit ${adminFirstName}'s information? `
            : `Are you sure you want to add ${adminFirstName} as a 
          ${adminRole}?`}
        </p>
        {isEditingAdmin ? (
          <ConfirmEditAdminModalBtn />
        ) : (
          <ConfirmAddAdminModalBtn />
        )}
      </div>
    </div>
  );
}

function AssignSuperAdminModal() {
  const { adminFirstName, adminLastName } =
    useAdminContext();
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <BsExclamationCircle className="fill-brand-blue stroke-brand-blue mb-4 h-[100px] w-auto stroke-[0.055px]" />
        <h1 className="text-brand-blue mb-6 text-[1.5rem] font-semibold leading-[1.65rem]">
          ATTENTION: You are about to assign{' '}
          <strong>
            {adminFirstName} {adminLastName}
          </strong>{' '}
          as a <strong>Super Administrator</strong>.{' '}
        </h1>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          <strong>
            As an effect, you will be automatically be
            assigned as an Administrator.
          </strong>
        </p>
        <p className="mx-[3rem] mb-[2rem] text-[1rem] font-medium">
          Do you want to proceed?
        </p>
        <ConfirmAssignSuperAdminModalBtn />
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

export {
  ExceededLoginAttemptsModal,
  ApprovePostModal,
  RejectPostModal,
  DeletePostModal,
  SubmitPostModal,
  EditPostModal,
  ArchivePostModal,
  ArchiveReqSuccessModal,
  ArchiveReqFailedModal,
  RetrieveArchivedPostModal,
  PostReqSuccessModal,
  PostReqRejectSuccessModal,
  EditReqSuccessModal,
  DeleteReqSuccessModal,
  RemoveAdminModal,
  AddAdminModal,
  AssignSuperAdminModal,
  SignOutModal,
  RetrieveReqSuccessModal,
};
