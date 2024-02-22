import { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import UploadIndicator from './UploadIndicator';
import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';
import { useParams } from 'react-router-dom';

function ArticleImageField() {
  const [hasImage, setHasImage] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const {
    articleImageFileName,
    setArticleImageFileName,
    articleImgFile,
    setArticleImageSrc,
    setArticleImgFile,
    articleImageSrc,
  } = useCreateArticleContext();

  const { id } = useParams();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleArticleImageSrcChange(files[0]);
    }
  };

  function handleArticleImageSrcChange(e) {
    let file;
  if (e.target) {
    console.log(e.target.value);
    file = e.target.files[0];
  } else {
    file = e;
  }
  console.log(file);
  if (file) {
    setArticleImageFileName(file.name);
    setArticleImgFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setArticleImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
    setHasImage(true);
  }
}

  useEffect(() => {
    setArticleImageSrc(articleImageSrc);
    console.log(articleImageSrc);
  }, [articleImageSrc, setArticleImageSrc]);

  return (
    <div className="mb-[3rem] flex flex-col justify-between">
      <p className="mb-[0.5rem] text-[1.25rem] font-semibold tracking-wide">
        Article Image{' '}
        <span className="text-brand-red align-middle text-[1.5rem]">
          *
        </span>
      </p>
      {id && !hasImage && (
        <p className="bg-brand-yellow rounded-8 mb-[1.5rem] w-fit px-3 py-2 text-[1rem] font-medium tracking-wide">
          NOTE: This article has an existing image. View
          image by clicking the{' '}
          <strong>Preview Article</strong> button below.
        </p>
      )}
      {articleImageFileName && (
        <UploadIndicator
          articleImageFileName={articleImageFileName}
          setArticleImageFileName={setArticleImageFileName}
          setArticleImageSrc={setArticleImageSrc}
        />
      )}
      <div
        className={`rounded-8 flex w-full items-center justify-center bg-opacity-50 ${
          isDragging ? 'border-dashed border-2 border-blue-500' : ''
        }`}
        style={{
          backgroundImage: articleImageSrc
            ? `url(${articleImageSrc})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8, // Adjust the opacity here // Ensure the background stays behind the content
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
      <label
        htmlFor="dropzone-file"
        className={`hover:bg-brand-input rounded-8  shadow-shadow-db flex h-64 w-full cursor-pointer flex-col items-center justify-center ${
          articleImageSrc ? articleImageSrc : 'bg-brand-light'
        }`}
      >
          <div className=" z-50 flex flex-col items-center justify-center pb-6 pt-5 opacity-100">
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
            name="article-image"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleArticleImageSrcChange(e)}
          />
        </label>
      </div>
    </div>
  );
}

export default ArticleImageField;
