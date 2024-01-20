import { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

function ArticleImageField() {
  const [imageFile, setImageFile] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setImageFile(file);
    console.log(file);
  }

  return (
    <div className="mb-[3rem] flex flex-col justify-between">
      <p className="mb-[0.5rem] text-[1.25rem] font-semibold tracking-wide">
        Article Image{' '}
        <span className="text-brand-red align-middle text-[1.5rem]">
          *
        </span>
      </p>
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="hover:bg-brand-input rounded-8 bg-brand-light shadow-shadow-db flex h-64 w-full cursor-pointer flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <FiUploadCloud className="mb-[1rem] h-auto w-[50px]" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">
                Click to upload
              </span>{' '}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG or JPG files only. (MAX. 5mb)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}

export default ArticleImageField;
