import ArticleTitleField from '../components/create-post/ArticleTitleField';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import ArticleImageField from '../components/create-post/ArticleImageField';
import { useState } from 'react';
import TextEditor from '../components/create-post/TextEditor';
import { SubmitArticleBtn } from '../components/global/Button';
import ArticlePreview from '../components/create-post/ArticlePreview';

function CreatePost() {
  const [articleTitle, setArticleTitle] =
    useState('Big Sur');
  const [articleImageFileName, setArticleImageFileName] =
    useState('BigSurTakeII_Mac.jpg');
  const [articleImageSrc, setArticleImageSrc] = useState(
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQEBAgICAQEBAgIDAgICAgMDAwIDAwQDAwQFBQUGBggBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAQEBAQECAgIBAQECAgMCAgICAwMDAgMDBAMDBAUFBQYGCP/CABEIDTgXhAMBIgACEQEDEQH/xAAfAAACAgMBAQEBAQAAAAAAAAAFBgQHAwgJAgEKAAv/2gAIAQEAAAAA/LaFLOJr6ZzjsrYSWxRf1IxxM4M3hkhjvwcK8yzY/J/fIAzHlYIX3EWm5IeMpjAlpwnMayKyr59tMqN8C4ZxWEsM0Y8ZyfJESRkhu6/nh+m1TwTREY57zh52EfglSPcyBjn/ANJ+RsJGThnw5AmXF8DJ/uXA9CjTGQDxVoPk/phT0ygIWY4SlYRhbLKkR...',
  );
  const [articleBody, setArticleBody] = useState('');
  // const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="flex flex-col justify-start lg:flex-row ">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <PageTitle title="Create Post" />

        <div className="flex flex-col">
          <ArticleTitleField
            setArticleTitle={setArticleTitle}
          />
          <ArticleImageField
            articleImageFileName={articleImageFileName}
            setArticleImageFileName={
              setArticleImageFileName
            }
            setArticleImageSrc={setArticleImageSrc}
          />

          <TextEditor
            articleBody={articleBody}
            setArticleBody={setArticleBody}
          />
          <SubmitArticleBtn />

          <ArticlePreview
            articleTitle={articleTitle}
            articleImageSrc={articleImageSrc}
            articleBody={articleBody}
          />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
