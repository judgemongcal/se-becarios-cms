import { useUserInfoContext } from '../../hooks/useUserInfoContext';
import ListSpinner from './ListSpinner';

function UserInfo({ type }) {
  const { userInfo } = useUserInfoContext();

  return (
    <div className="user-info ml-5 flex flex-col items-center justify-center gap-4">
      {!userInfo.firstName && <ListSpinner />}
      {userInfo.image && (
        <img
          src={`${
            userInfo.image
              ? userInfo.image
              : '../../src/assets/sample_admin.png'
          }`}
          alt=""
          className={`${
            type == 'home'
              ? 'shadow-sm-btn2 lg:-mb-[2rem] lg:mt-[2rem]'
              : ''
          } border-brand-blue h-[100px] w-[100px] rounded-[100%] border-[5px] ${
            type == 'home' && 'h-[150px] w-[150px]'
          }`}
        />
      )}
      {type != 'home' && userInfo && userInfo.firstName && (
        <h1>
          {userInfo.firstName} {userInfo.lastName}
        </h1>
      )}
    </div>
  );
}

export default UserInfo;
