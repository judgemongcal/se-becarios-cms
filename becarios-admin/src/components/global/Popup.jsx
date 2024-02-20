import {
  FaRegCircleXmark,
  FaRegCircleCheck,
} from 'react-icons/fa6';
import { useAdminContext } from '../../hooks/useAdminContext';

const tries = 5;

function InvalidLoginCredentialsPopup() {
  return (
    <div className="bg-brand-red rounded-10 my-4 flex w-full flex-row items-center justify-center gap-6 px-4 py-2 text-center text-white">
      <FaRegCircleXmark className=" h-auto w-8" />
      <p className=" ml-[-0.5rem] text-[14px] md:text-[16px]">
        Incorrect username or/and password. Try again.
      </p>
    </div>
  );
}

function ApprovePostReqSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-3 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className=" h-auto w-10 md:ml-[1rem] lg:ml-0" />
      <p className=" ml-0 text-[12px] md:text-[14px] lg:ml-0">
        Article post request has been approved successfully.
      </p>
    </div>
  );
}

function EmailResetSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-3 px-4 py-3 text-center text-white">
      <FaRegCircleCheck className=" h-auto w-14 md:ml-[1rem] lg:ml-0" />
      <p className=" ml-0 text-[12px] md:text-[14px] lg:ml-0">
        Your password has been reset! Please check your
        email for further instructions.
      </p>
    </div>
  );
}

function EmailResetInvalidPopup() {
  return (
    <div className="bg-brand-invalid rounded-10 my-4 flex flex-row items-center justify-center gap-3 px-4 py-3 text-center text-white">
      <FaRegCircleXmark className=" h-auto w-12 md:ml-[1rem] lg:ml-0" />
      <p className=" ml-0 text-[12px] md:text-[14px] lg:ml-0">
        Error! The email you entered is invalid. Please try
        again.
      </p>
    </div>
  );
}

function PostReqFailedPopup() {
  return (
    <div className="bg-brand-red rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className=" h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className=" ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Error! There has been an issue with sending your
        request. Try again.
      </p>
    </div>
  );
}

function RejectPostReqSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className=" h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className=" ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Article post request has been rejected successfully.
      </p>
    </div>
  );
}

function AddAdminSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 mx-auto my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white lg:max-w-[500px]">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Administrator has been added successfully.
      </p>
    </div>
  );
}

function AdminErrorPopup() {
  return (
    <div className="bg-brand-red rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleXmark className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Error! There has been an issue with processing the
        changes. <br />
        Please try again.
      </p>
    </div>
  );
}

function EditAdminInfoSuccessPopup() {
  const { adminFirstName, adminLastName } =
    useAdminContext();
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Administrator information of {adminFirstName}{' '}
        {adminLastName} has been edited successfully.
      </p>
    </div>
  );
}

function RemoveAdminSuccessPopup() {
  const { adminFirstName, adminLastName } =
    useAdminContext();
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        {adminFirstName} {adminLastName} has been removed as
        an Administrator successfully.
      </p>
    </div>
  );
}

function AssignSuperAdminSuccessPopup() {
  const { adminFirstName, adminLastName } =
    useAdminContext();
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Successfully assigned {adminFirstName}{' '}
        {adminLastName} as a Super Administrator.
      </p>
    </div>
  );
}

function GenReportSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        The report has been generated successfully. The
        download should start shortly.
      </p>
    </div>
  );
}

export {
  InvalidLoginCredentialsPopup,
  EmailResetSuccessPopup,
  EmailResetInvalidPopup,
  ApprovePostReqSuccessPopup,
  PostReqFailedPopup,
  RejectPostReqSuccessPopup,
  AddAdminSuccessPopup,
  AdminErrorPopup,
  EditAdminInfoSuccessPopup,
  RemoveAdminSuccessPopup,
  GenReportSuccessPopup,
  AssignSuperAdminSuccessPopup,
};
