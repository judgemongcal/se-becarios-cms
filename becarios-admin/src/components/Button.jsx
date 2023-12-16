function LoginBtn() {
  return (
    <button className=" bg-gradient shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105">
      Log In
    </button>
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

function ProceedModalBtn() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
      Proceed
    </button>
  );
}

export {
  LoginBtn,
  ViewAllBtn,
  ApproveModalBtn,
  RejectModalBtn,
  EditArticleBtn,
  SubmitEditModalBtn,
  SubmitDeleteModalBtn,
  ProceedModalBtn,
};
