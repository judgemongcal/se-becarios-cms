function ArticleTitleField() {
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
        className="bg-brand-light rounded-8 shadow-shadow-db w-full p-3 text-[1rem]"
      />
    </div>
  );
}

export default ArticleTitleField;
