function PageNotFound() {
  return (
    <div className="mt-[10rem] flex flex-col items-center justify-center text-center">
      <h1 className="mb-[0.5rem] text-[1.85rem] font-extrabold">
        Page not found!
      </h1>
      <p className="text-[1.25rem] leading-5">
        We can&apos;t seem to find what
        <br /> you are looking for.{' '}
      </p>
    </div>
  );
}

export default PageNotFound;
