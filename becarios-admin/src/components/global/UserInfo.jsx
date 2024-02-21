import { useUserInfoContext } from '../../hooks/useUserInfoContext';

function UserInfo({ type }) {
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
        className={`${
          type == 'home' ? 'shadow-shadow-db' : ''
        } border-brand-blue h-[100px] w-[100px] rounded-[100%] border-[5px] `}
      />
      {type != 'home' && (
        <h1>
          {userInfo && userInfo.firstName
            ? `${userInfo.firstName} ${userInfo.lastName}`
            : 'Loading...'}
        </h1>
      )}
    </div>
  );
}

export default UserInfo;
