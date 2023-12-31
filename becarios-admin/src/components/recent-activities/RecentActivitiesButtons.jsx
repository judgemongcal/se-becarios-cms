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

export { GenerateReportBtn, BacktoDashboardBtn };
