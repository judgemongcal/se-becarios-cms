function AuthorDropdown() {
  return (
    <div className="mb-[3rem] flex flex-col justify-between">
      <p className="mb-[0.5rem] text-[1.25rem] font-semibold tracking-wide">
        Article Author{' '}
        <span className="text-brand-red align-middle text-[1.5rem]">
          *
        </span>
      </p>
      <div className="flex w-full items-center justify-center">
        <select name="cars" id="cars">
          <option value="volvo">
            <a className="bg-brand-red">Volvo</a>
          </option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
}

export default AuthorDropdown;
