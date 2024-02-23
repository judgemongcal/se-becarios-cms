import Spinner from '../components/global/Spinner';

function Sample() {
  return (
    <div className="modal-bg bg-brand-input md:bg-modal-bg  fixed top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center">
      <div className="modal-container bg-brand-input rounded-10 3xl:w-[25%] mx-auto flex w-[100%] flex-col justify-center px-[2rem] py-[2.25rem] text-center md:w-[50%] xl:w-[35%] 2xl:w-[500px]">
        <Spinner />
      </div>
    </div>
  );
}

export default Sample;
