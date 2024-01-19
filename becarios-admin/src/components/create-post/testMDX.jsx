import {
  MDXEditor,
  toolbarPlugin,
  quotePlugin,
  listsPlugin,
  headingsPlugin,
  tablePlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ListsToggle,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

function MDXTest({ ref }) {
  return (
    <MDXEditor
      onChange={console.log()}
      className="shadow-shadow-db"
      markdown="> hello world"
      plugins={[
        quotePlugin(),
        listsPlugin(),
        headingsPlugin(),
        tablePlugin(),
        // codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
        // // sandpackPlugin({
        // //   sandpackConfig: simpleSandpackConfig,
        // // }),
        // codeMirrorPlugin({
        //   codeBlockLanguages: {
        //     js: 'JavaScript',
        //     css: 'CSS',
        //   },
        // }),
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
    />
  );
}

export default MDXTest;
