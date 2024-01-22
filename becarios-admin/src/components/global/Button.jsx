import {
  FaCheck,
  FaEllipsis,
  FaShareFromSquare,
  FaTrash,
} from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaGear } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useEffect } from 'react';
import { FiUpload } from 'react-icons/fi';

function LoginBtn() {
  const navigate = useNavigate();

  function goToDashboard() {
    navigate('/dashboard', { replace: false });
  }

  return (
    <button
      className=" bg-gradient shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105"
      onClick={goToDashboard}
    >
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

function SubmitArticleBtn({
  isPreview,
  setIsPreview,
  setIsButtonPressed,
}) {
  function handleClickPreview(e) {
    e.preventDefault();
    setIsPreview(!isPreview);
  }

  function handleClickSubmit(e) {
    e.preventDefault();
    setIsButtonPressed(true);
  }

  return (
    <div className="mt-[2rem] flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleClickPreview(e)}
      >
        {isPreview ? 'Back to Editing' : 'Preview Post'}
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleClickSubmit(e)}
      >
        Submit Post
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
    <button className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark px-4 py-2 text-[1rem] font-semibold text-[#FFFFFF] duration-300 md:px-5 md:text-[1.25rem]">
      Generate Report
    </button>
  );
}

function BacktoDashboardBtn() {
  return (
    <button className="bg-brand-black shadow-shadow-db rounded-10 hover:bg-brand-light min-w-[200px] max-w-[10%] p-3 text-[1.15rem] font-semibold text-white duration-300 hover:text-black lg:-mb-[2rem]">
      Back to Dashboard
    </button>
  );
}

function PostedSettingsBtn() {
  return (
    <button className=" bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light w-fit  items-center p-2 duration-300 ">
      <FaEllipsis className="fill-brand-black h-auto w-[30px] md:w-[36px]" />
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

function AdminSettingsBtn({
  isGearClicked,
  setIsGearClicked,
}) {
  function handleGearClick(e) {
    e.preventDefault();
    setIsGearClicked(!isGearClicked);
  }
  return (
    <button
      className="bg-brand-light hover:bg-brand-yellow rounded-8 shadow-sm-btn items-center p-2 duration-300"
      onClick={(e) => handleGearClick(e)}
    >
      <FaGear className="fill-brand-black stroke-brand-black  h-[24px] w-[28px] " />
    </button>
  );
}

function UploadImageBtn() {
  return (
    <button className="bg-brand-light hover:bg-brand-input rounded-8 shadow-sm-btn w-fit items-center p-2 duration-300">
      <FiUpload className=" stroke-brand-black  h-auto w-[28px] " />
    </button>
  );
}

function DeleteAdminBtn() {
  return (
    <button className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
      <FaXmark className="fill-brand-input h-auto w-[24px]" />
    </button>
  );
}

function VisitWebsiteBtn() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark px-6 py-2 text-[1.05rem] font-semibold text-[#FFFFFF] duration-300 lg:text-[1.5rem]">
      Visit our Website
    </button>
  );
}

function DashboardViewAllBtn({ path }) {
  return (
    <nav>
      <NavLink to={path}>
        <div className="view-all bg-brand-yellow hover:bg-brand-yellow-dark  rounded-b-8 w-full cursor-pointer px-2 py-5 text-center text-[1.25rem] font-semibold duration-300 hover:text-white">
          View All
        </div>
      </NavLink>
    </nav>
  );
}

function ForApprovalListItemBtn() {
  return (
    <div className="mt-4 flex flex-row justify-start gap-3">
      <button className="bg-brand-blue hover:bg-brand-blue-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
        <MdOutlineRemoveRedEye className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button>
      <button className="bg-brand-green hover:bg-brand-green-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
        <FaCheck className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button>
      <button className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
        <FaXmark className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button>
    </div>
  );
}

function ArchivedListItemBtn() {
  return (
    <div className="mt-4 flex flex-row justify-start gap-3">
      <button className="bg-brand-blue hover:bg-brand-blue-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
        <MdOutlineRemoveRedEye className="fill-brand-input h-auto w-[25px] md:w-[30px]" />
      </button>
      <button className="bg-brand-yellow hover:bg-brand-yellow-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
        <FaShareFromSquare className="fill-brand-input h-auto w-[25px] md:w-[30px]" />
      </button>
      <button className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn items-center p-2 duration-300">
        <FaTrash className="fill-brand-input h-auto w-[25px] md:w-[30px]" />
      </button>
    </div>
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
  AdminSettingsBtn,
  DeleteAdminBtn,
  VisitWebsiteBtn,
  LogoutBtn,
  DashboardViewAllBtn,
  ForApprovalListItemBtn,
  ArchivedListItemBtn,
  UploadImageBtn,
  SubmitArticleBtn,
};
