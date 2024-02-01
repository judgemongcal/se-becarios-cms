import { useUserInfoContext } from '../../hooks/useUserInfoContext';

function Greeting() {
  const { userInfo } = useUserInfoContext();

  const currDate = new Date();
  const currHour = currDate.getHours();

  return (
    <h1 className=" mt-[10rem] text-[1.5rem] font-bold tracking-wide md:text-[2rem] lg:mt-[2rem]">
      {userInfo && userInfo.first_name
        ? `${
            currHour < 12
              ? `Good morning`
              : currHour >= 12 && currHour < 18
                ? `Good Afternoon`
                : `Good Evening`
          }
      , ${userInfo.first_name}.`
        : `Loading...`}
    </h1>
  );
}

export default Greeting;
