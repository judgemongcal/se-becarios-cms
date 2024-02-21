import { useUserInfoContext } from '../../hooks/useUserInfoContext';

function Greeting({ type }) {
  const { userInfo } = useUserInfoContext();

  const currDate = new Date();
  const currHour = currDate.getHours();

  return (
    <h1
      className={`${
        type === 'home' ? 'text-[#F6F6F6]' : 'mt-[10rem]'
      } text-[2rem] font-semibold tracking-wider md:text-[2.5rem] lg:mt-[2rem]`}
    >
      {userInfo && userInfo.firstName ? (
        <>
          {currHour < 12
            ? `Good morning`
            : currHour >= 12 && currHour < 18
              ? `Good Afternoon,`
              : `Good Evening,`}{' '}
          {type === 'home' ? (
            <span className="custom-text-gradient">
              {userInfo.firstName}
            </span>
          ) : (
            userInfo.firstName
          )}
          .
        </>
      ) : (
        `Loading...`
      )}
    </h1>
  );
}

export default Greeting;
