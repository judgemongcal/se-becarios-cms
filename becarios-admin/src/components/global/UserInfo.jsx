import { useUserInfoContext } from '../../hooks/useUserInfoContext';

function UserInfo() {
  const { userInfo } = useUserInfoContext();

  return (
    <div className="user-info ml-5 flex flex-col items-center justify-center gap-4">
      <img
        src={`${
          userInfo.image
            ? userInfo.image
            : '../../src/assets/sample_admin.png'
        }`}
        alt=""
        className="border-brand-blue h-[100px] w-[100px] rounded-[100%] border-[5px]"
      />
      <h1>
        {userInfo && userInfo.firstName
          ? `${userInfo.firstName} ${userInfo.lastName}`
          : 'Loading...'}
      </h1>
    </div>
  );
}

export default UserInfo;
