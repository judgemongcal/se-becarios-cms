function ExceededLoginAttemptsModal() {
  return (
    <div className="mx-auto  mt-[35%] flex flex-col items-center self-center text-center md:mt-[20%] xl:mt-[-10%]">
      <img src="./src/assets/org_logo.png" alt="" className="mb-10 w-[25%]" />
      <h1 className="text-brand-red mx-5 mb-2 text-[1.5rem] font-bold xl:text-[1.85rem]">
        You&apos;ve reached the maximum number<br></br>of failed login attempts
      </h1>
      <p className="text-[1.25rem] font-medium xl:text-[1.5rem]">
        Please try again later.
      </p>
    </div>
  );
}

export { ExceededLoginAttemptsModal };
