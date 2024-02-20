import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';

function ArticlePreview() {
  const { articleTitle, articleBody, articleImageSrc } =
    useCreateArticleContext();
  const parser = new DOMParser();
  const content = parser.parseFromString(
    articleBody,
    'text/html',
  );
  const parsedContent = content.body.innerHTML;

  return (
    <div className="Preview mx-auto flex  w-[80%] flex-col gap-4 ">
      <h1 className="Title mb-4 self-center font-bold text-black">
        {articleTitle}
      </h1>
      <div className=" mb-5 flex h-auto max-h-[500px] max-w-[1000px] self-center">
        <img
          src={articleImageSrc}
          alt=""
          className="rounded-8 shadow-shadow-db"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: parsedContent,
        }}
        className=""
      />
    </div>
  );
}

export default ArticlePreview;
