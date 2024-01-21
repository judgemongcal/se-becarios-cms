import { FaImage, FaXmark } from 'react-icons/fa6';

function UploadIndicator({
  articleImageFileName,
  setArticleImageFileName,
  setArticleImageSrc,
}) {
  function handleRemoveImage() {
    setArticleImageFileName('');
    setArticleImageSrc('');
  }

  return (
    <div className="bg-brand-green rounded-8 shadow-shadow-db mb-4 flex h-auto w-fit flex-row items-center justify-evenly gap-3 p-2">
      <FaImage className="fill-brand-light h-auto w-[30px] md:w-[30px]" />
      <h1 className=" text-[0.75rem] text-white">
        {articleImageFileName}
      </h1>
      <button
        className="bg-brand-red rounded-8 float-right p-1"
        onClick={handleRemoveImage}
      >
        <FaXmark className="fill-brand-light h-auto w-[20px]" />
      </button>
    </div>
  );
}

export default UploadIndicator;
