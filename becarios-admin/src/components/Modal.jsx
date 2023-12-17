import { FaRegCircleXmark } from 'react-icons/fa6';

const tries = 5;

function InvalidLoginCredentials() {
  return (
    <div className="bg-brand-red rounded-10 my-4 flex flex-row items-center justify-around px-4 py-2 text-center text-white">
      <FaRegCircleXmark className="mx-1.5 h-auto w-12" />
      <p className=" text-[12px]">
        Incorrect username or/and password. You can try again{' '}
        <strong>{tries} more times </strong>or send a{' '}
        <strong>forgot password request</strong>.
      </p>
    </div>
  );
}

export { InvalidLoginCredentials };
