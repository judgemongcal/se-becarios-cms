import { FaRegCircleXmark, FaRegCircleCheck } from 'react-icons/fa6';

const tries = 5;

function InvalidLoginCredentialsPopup() {
  return (
    <div className="bg-brand-red rounded-10 my-4 flex flex-row items-center justify-center gap-6 px-4 py-2 text-center text-white">
      <FaRegCircleXmark className=" h-auto w-8" />
      <p className=" ml-[-0.5rem] text-[10px] md:text-[12px]">
        Incorrect username or/and password.<br></br> You can try again
        <strong> {tries} more times</strong>.
      </p>
    </div>
  );
}

function ApprovePostReqSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className=" h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className=" ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Article post request has been approved successfully.
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
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Administrator has been added successfully.
      </p>
    </div>
  );
}

function EditAdminInfoSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Administrator details has been edited successfully.
      </p>
    </div>
  );
}

function RemoveAdminSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        Administrator has been removed successfully.
      </p>
    </div>
  );
}

function GenReportSuccessPopup() {
  return (
    <div className="bg-brand-green rounded-10 my-4 flex flex-row items-center justify-center gap-2 px-4 py-2 text-center text-white">
      <FaRegCircleCheck className="h-auto w-8 md:ml-[1rem] lg:ml-0" />
      <p className="ml-0 text-[10px] md:text-[12px] lg:ml-0">
        The report has been generated successfully. The download should start
        shortly.
      </p>
    </div>
  );
}

export {
  InvalidLoginCredentialsPopup,
  ApprovePostReqSuccessPopup,
  RejectPostReqSuccessPopup,
  AddAdminSuccessPopup,
  EditAdminInfoSuccessPopup,
  RemoveAdminSuccessPopup,
  GenReportSuccessPopup,
};
