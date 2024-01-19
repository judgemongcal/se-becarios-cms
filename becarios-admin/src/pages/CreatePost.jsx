import ArticleTitleField from '../components/create-post/ArticleTitleField';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import ArticleImageField from '../components/create-post/ArticleImageField';
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  tablePlugin,
  toolbarPlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ListsToggle,
  UndoRedo,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import Markdown from 'react-markdown';
import { Suspense, useState } from 'react';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import MDXTest from '../components/create-post/testMDX';
import TipTap from '../components/create-post/TipTap';

function CreatePost() {
  const markdown = '';

  const [articleBody, setArticleBody] = useState('');
  // const markdownRef = useRef < MDXEditorMethods > null;

  return (
    <div className="flex flex-col justify-start lg:flex-row ">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <PageTitle title="Create Post" />
        {/* <form
          action=""
          method=""
          encType="multipart/form-data"
        > */}
        <div className="flex flex-col">
          <ArticleTitleField />
          <ArticleImageField />

          {/* <MDXEditor
            markdown={articleBody}
            className="shadow-shadow-db rounded-8"
            plugins={[
              quotePlugin(),
              listsPlugin(),
              headingsPlugin(),
              tablePlugin(),
              thematicBreakPlugin(),
              markdownShortcutPlugin(),
              toolbarPlugin({
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                    <ListsToggle />
                  </>
                ),
              }),
            ]}
            onChange={(e) => {
              setArticleBody(e);
              console.log(e);
            }}
          /> */}
          <TipTap />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default CreatePost;

{
  /* <Suspense
            fallback={
              <>
                <p>Loading</p>
              </>
            }
          >
            <MDXEditor
              markdown={articleBody}
              className="shadow-shadow-db rounded-8"
              plugins={[
                quotePlugin(),
                listsPlugin(),
                headingsPlugin(),
                tablePlugin(),
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      <UndoRedo />
                      <BoldItalicUnderlineToggles />
                      <BlockTypeSelect />
                      <ListsToggle />
                    </>
                  ),
                }),
              ]}
              onChange={(e) => {
                setArticleBody(e);
                console.log(e);
              }}
            />
          </Suspense>

          <ReactMarkdown remarkPlugins={[gfm]}>
            {articleBody}
          </ReactMarkdown> */
}
