import { FaEllipsis } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';

function LoginBtn() {
  return (
    <button className=" bg-gradient shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105">
      Log In
    </button>
  );
}

function LogoutBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Sign Out
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
    </div>
  );
}

function ViewAllBtn() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-view-btn hover:bg-brand-yellow-dark w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100">
      View All
    </button>
  );
}

function ApproveModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Approve Post
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
    </div>
  );
}

function RejectModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Reject Post
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
    </div>
  );
}

function EditArticleBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Delete Post
      </button>
      <button className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Preview Post
      </button>
      <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Submit Edit
      </button>
    </div>
  );
}

function SubmitPostModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
      <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Submit Post
      </button>
    </div>
  );
}

function PostReqSuccessModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Create Another
      </button>
      <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Back to Home
      </button>
    </div>
  );
}

function ProceedModalBtn() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
      Proceed
    </button>
  );
}

function AddAdminModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Add Admin
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Discard Changes
      </button>
    </div>
  );
}

function EditAdminModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Edit Admin Details
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Discard Changes
      </button>
    </div>
  );
}

function DeleteAdmiModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-yellow shadow-shadow-db rounded-1 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Delete Admin
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
    </div>
  );
}

function SubmitEditModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
      <button className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Submit Request
      </button>
    </div>
  );
}

function SubmitDeleteModalBtn() {
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Go Back
      </button>
      <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Submit Request
      </button>
    </div>
  );
}

function GenerateReportBtn() {
  return (
    <button className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-300">
      Generate Report
    </button>
  );
}

function BacktoDashboardBtn() {
  return (
    <button className="bg-brand-black shadow-shadow-db rounded-10 hover:bg-brand-light py-3 text-[1.15rem] font-semibold text-white duration-300 hover:text-black">
      Back to Dashboard
    </button>
  );
}

function PostedSettingsBtn() {
  return (
    <button className=" bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light w-fit  items-center p-2 duration-300 ">
      <FaEllipsis className="fill-brand-black h-auto w-[24px]" />
    </button>
  );
}

function EditItemBtn() {
  return (
    <button className="bg-brand-light hover:bg-brand-black rounded-8 shadow-sm-btn items-center p-2 duration-300">
      <LuPencil className="fill-brand-input stroke-brand-black  h-[20px] w-[24px] " />
    </button>
  );
}

export {
  LoginBtn,
  ViewAllBtn,
  ApproveModalBtn,
  RejectModalBtn,
  EditArticleBtn,
  SubmitPostModalBtn,
  PostReqSuccessModalBtn,
  ProceedModalBtn,
  AddAdminModalBtn,
  EditAdminModalBtn,
  DeleteAdmiModalBtn,
  SubmitEditModalBtn,
  SubmitDeleteModalBtn,
  GenerateReportBtn,
  BacktoDashboardBtn,
  PostedSettingsBtn,
  EditItemBtn,
  LogoutBtn,
};
