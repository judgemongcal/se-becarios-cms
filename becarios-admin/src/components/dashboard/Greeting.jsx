function Greeting({ name }) {
  const currDate = new Date();
  const currHour = currDate.getHours();
  console.log(currHour);

  return (
    <h1 className=" mt-[10rem] text-[1.5rem] font-bold tracking-wide md:text-[2rem] lg:mt-[2rem]">
      {currHour < 12
        ? `Good morning`
        : currHour >= 12 && currHour < 18
          ? `Good Afternoon`
          : `Good Evening`}
      , {name}.
    </h1>
  );
}

export default Greeting;
