import { FaRegCircleXmark, FaRegCircleCheck } from 'react-icons/fa6';

const tries = 5;

function InvalidLoginCredentialsModal() {
  return (
    <div className="bg-brand-red rounded-10 my-4 flex flex-row items-center justify-around px-4 py-2 text-center text-white">
      <FaRegCircleXmark className="mx-1.5 h-auto w-12" />
      <p className=" text-[10px] md:text-[12px]">
        Incorrect username or/and password. You can try again{' '}
        <strong>{tries} more times </strong>or send a{' '}
        <strong>forgot password request</strong>.
      </p>
    </div>
  );
}

function SendPostReqSuccessModal() {
  return (
    <div className="bg-brand-green rounded-10  my-4 flex flex-row items-center  justify-center gap-2 px-2 py-3 text-center text-white">
      <FaRegCircleCheck className="mx-1.5 h-auto w-8 md:ml-4" />
      <p className=" p-0 text-[10px] md:mr-4  md:text-[12px]">
        Article post request has been approved successfully.
      </p>
    </div>
  );
}

export { InvalidLoginCredentialsModal, SendPostReqSuccessModal };
