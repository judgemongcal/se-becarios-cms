import { useCreatePostContext } from '../../hooks/CreatePostContext';

function ArticlePreview() {
  const { articleTitle, articleBody, articleImageSrc } =
    useCreatePostContext();
  const parser = new DOMParser();
  const content = parser.parseFromString(
    articleBody,
    'text/html',
  );
  const parsedContent = content.body.innerHTML;

  return (
    <div className="Preview flex flex-col gap-4">
      <h1 className="Title bg-red  mb-4 font-bold text-black">
        {articleTitle}
      </h1>
      <img src={articleImageSrc} alt="" />
      <div
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
    </div>
  );
}

export default ArticlePreview;
