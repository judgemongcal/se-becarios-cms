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

// const defaultSnippetContent = `
// export default function App() {
// return (
// <div className="App">
// <h1>Hello CodeSandbox</h1>
// <h2>Start editing to see some magic happen!</h2>
// </div>
// );
// }
// `.trim();

// const simpleSandpackConfig = {
//   defaultPreset: 'react',
//   presets: [
//     {
//       label: 'React',
//       name: 'react',
//       meta: 'live react',
//       sandpackTemplate: 'react',
//       sandpackTheme: 'light',
//       snippetFileName: '/App.js',
//       snippetLanguage: 'jsx',
//       initialSnippetContent: defaultSnippetContent,
//     },
//   ],
// };

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
