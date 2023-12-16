export function LoginButton() {
  return (
    <button className=" bg-gradient shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105">
      Log In
    </button>
  );
}

export function ViewAllButton() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-view-btn w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 hover:bg-[#F09E06]">
      View All
    </button>
  );
}
