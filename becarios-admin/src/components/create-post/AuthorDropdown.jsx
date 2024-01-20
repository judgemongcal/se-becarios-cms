function AuthorDropdown() {
  return (
    <div className="bg-brand-yellow shadow-shadow-db rounded-8 my-[3rem] grid grid-cols-2 items-center justify-between px-5 py-3">
      <p className=" text-[1.25rem] font-semibold tracking-wide">
        Article Author{' '}
        <span className="text-brand-red align-middle text-[1.5rem]">
          *
        </span>
      </p>
      <select
        name="cars"
        id="cars"
        className="bg-brand-yellow rounded-8 p-4 text-[1.15rem] font-medium"
      >
        <option value="John Doe">John Doe</option>
        <option value="Hannah Yu">Hannah Yu</option>
      </select>
    </div>
  );
}

export default AuthorDropdown;
