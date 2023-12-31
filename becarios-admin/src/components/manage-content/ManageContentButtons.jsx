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

export { SubmitEditModalBtn, SubmitDeleteModalBtn };
