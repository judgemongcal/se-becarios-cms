import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';

function ArticleTitleField() {
  const { articleTitle, setArticleTitle } =
    useCreateArticleContext();
  function handleTitleChange(e) {
    setArticleTitle(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="mb-[2rem] flex flex-col justify-start">
      <label
        htmlFor="article-title"
        className="text-[1.25rem] font-semibold tracking-wide"
      >
        Article Title{' '}
        <span className="text-brand-red align-middle text-[1.5rem]">
          *
        </span>
      </label>
      <input
        type="text"
        id="article-title"
        name="article-title"
        placeholder="Enter article title here"
        value={articleTitle}
        className="bg-brand-light rounded-8 shadow-shadow-db w-full p-3 text-[1rem]"
        onChange={(e) => handleTitleChange(e)}
      />
    </div>
  );
}

export default ArticleTitleField;
