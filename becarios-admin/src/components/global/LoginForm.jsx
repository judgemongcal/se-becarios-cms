import { LoginBtn, PostedSettingsBtn } from './Button';
import { FiKey, FiMail } from 'react-icons/fi';
import { IoEyeSharp } from 'react-icons/io5';

import { ExceededLoginAttemptsModal } from './Modal';
import AdminListItem from '../settings/AdminListItem';
import NavBarMobile from './NavBarMobile';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { UserAuth } from '../../hooks/useAuthContext';
import { auth } from '../../server/firebase';
import { useNavigate } from 'react-router-dom';
import { InvalidLoginCredentialsPopup } from './Popup';

const hasNotExceed = true;
const limit = 5;

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { signIn } = UserAuth();

  useEffect(() => {
    if (isInvalid) {
      const timer = setTimeout(
        () => setIsInvalid(!isInvalid),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isInvalid]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsInvalid(!isInvalid);

    try {
      await signIn(username, password);
      navigate('/dashboard', { replace: false });
    } catch (error) {
      setError(error.message);
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/invalid-credentials'
      ) {
        setIsInvalid(!isInvalid);
      }
    }
  }

  return (
    <div className="main-div flex flex-row justify-around gap-10">
      <div className="brand-img bg-login rounded-login hidden h-[100vh] w-[50%] bg-cover xl:block"></div>
      <div className="overlay-black bg-gradient-overlay rounded-login absolute left-0 top-0 z-10 hidden h-[100%] w-[50%] xl:block"></div>
      <div className="overlay-gradient rounded-login absolute left-0 top-0 z-10 hidden h-[100%] w-[50%] bg-[rgba(0,0,0,0.75)] px-[7rem] py-[10rem] text-center leading-[60px] xl:block"></div>
      <div className="brand-info rounded-login absolute left-0 z-50 hidden h-[100%] w-[50%] justify-center px-[7rem] py-[10rem] text-center leading-[60px] xl:flex xl:flex-col">
        <h1 className="text-[40px] font-bold text-white ">
          {/* md:mt-[-10%] xl:text-[56px] 2xl:mt-[5%] */}
          WELCOME TO
        </h1>
        <h1 className="bg-gradient-text mb-[40px] bg-clip-text text-[46px] font-bold text-transparent xl:text-[56px]">
          ESCOLARIO
        </h1>
        <h2 className="text-[28px] leading-[36px] text-white xl:text-[36px] xl:leading-[44px]">
          The Premier University
        </h2>
        <h2 className="  text-[28px] leading-[36px] text-white xl:text-[36px] xl:leading-[44px] ">
          {/* 2xl:mb-[50%] mb-[30%]*/}
          News Article Platform
        </h2>
        <p className=" mb-[-2rem] mt-[25%] text-[18px] font-medium text-white">
          {/* mb-[-2rem] mt-[15rem] */}
          Founded by
        </p>
        <p className="bg-gradient-text  bg-clip-text text-[18px] font-semibold text-transparent xl:text-[21px]">
          {/* mb-[90%] */}
          UST - Becarios de Santo Tomas
        </p>
      </div>

      {hasNotExceed ? (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mx-auto  mt-[25%] flex flex-col items-center self-center xl:mt-[-2%]"
        >
          <img
            src="./src/assets/org_logo.png"
            alt=""
            className="mb-10 w-[25%]"
          />
          <h1 className="mb-10 text-[1.75rem] font-bold">
            ADMIN LOGIN
          </h1>

          <div className="credentials flex w-[20rem] flex-col justify-center lg:w-[27rem]">
            {isInvalid && <InvalidLoginCredentialsPopup />}
            <label htmlFor="username" className="mb-2">
              UST College Email
            </label>
            <div
              className={`username-input  bg-brand-input shadow-shadow-db rounded-8 mb-5 flex flex-row gap-4 p-2.5 ${
                isInvalid && 'border-brand-invalid border-4'
              }`}
            >
              <FiMail className="ml-2 h-auto w-8" />

              <input
                type="email"
                id="username"
                name="username"
                placeholder="juan.delacruz.med@ust.edu.ph"
                className="bg-brand-input ${ w-full text-[18px] xl:mr-12
                  "
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />
            </div>

            <label htmlFor="password" className=" mb-2">
              Password
            </label>
            <div
              className={`password-input  bg-brand-input shadow-shadow-db rounded-8 mb-5 flex flex-row gap-4 p-2.5 ${
                isInvalid && 'border-brand-invalid border-4'
              }`}
            >
              <FiKey className="ml-2 h-auto w-8" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password here"
                className=" bg-brand-input w-full text-[18px]"
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
              <IoEyeSharp className="mr-2 h-auto w-8" />
            </div>
            <p className="mb-2 cursor-pointer self-center text-gray-500">
              Forgot Password?
            </p>
            <LoginBtn />
          </div>
        </form>
      ) : (
        <ExceededLoginAttemptsModal />
      )}
    </div>
  );
}

export default LoginForm;
