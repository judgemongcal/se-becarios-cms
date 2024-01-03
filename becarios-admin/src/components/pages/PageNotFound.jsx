import { VisitWebsiteBtn } from '../global/Button';

function PageNotFound() {
  return (
    <div className="mt-[15rem] flex flex-col items-center justify-center text-center">
      <h1 className="mb-[0.5rem] text-[1.85rem] font-extrabold lg:mb-[0.35rem] lg:text-[4rem]">
        Page not found!
      </h1>
      <p className="mb-[1.25rem] text-[1.25rem] leading-5 lg:mb-[2.5rem] lg:text-[2.25rem] lg:leading-10">
        We can&apos;t seem to find what
        <br /> you are looking for.{' '}
      </p>
      <VisitWebsiteBtn />
    </div>
  );
}

export default PageNotFound;
