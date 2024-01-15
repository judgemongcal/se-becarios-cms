function PaginationLabel() {
  return (
    <div className=" text-left">
      <p className="text-[0.9rem] text-black opacity-90 md:text-[1.25rem]">
        Showing Page <span className="font-bold"> X </span>
        of X
      </p>
    </div>
  );
}

export default PaginationLabel;
