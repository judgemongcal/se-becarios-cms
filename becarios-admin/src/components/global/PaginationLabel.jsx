function PaginationLabel() {
  return (
    <div className="text-left">
      <p className="text-[1.25rem] text-black opacity-90">
        Showing Page <span className="font-bold"> X </span>
        of X
      </p>
    </div>
  );
}

export default PaginationLabel;
