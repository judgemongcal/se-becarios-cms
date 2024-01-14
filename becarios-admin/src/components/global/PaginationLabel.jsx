function PaginationLabel() {
  return (
    <div className="mt-[2rem] text-left">
      <p className="text-[1.15rem] text-black opacity-90 md:text-[1.25rem]">
        Showing Page <span className="font-bold"> X </span>
        of X
      </p>
    </div>
  );
}

export default PaginationLabel;
