import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Underline from '@tiptap/extension-underline';
import HardBreak from '@tiptap/extension-hard-break';
import Text from '@tiptap/extension-text';
import {
  EditorProvider,
  useCurrentEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  FaBold,
  FaCode,
  FaItalic,
  FaListOl,
  FaListUl,
  FaParagraph,
  FaQuoteLeft,
  FaStrikethrough,
  FaUnderline,
} from 'react-icons/fa6';
import { FaRedo, FaUndo } from 'react-icons/fa';
import { TbClearFormatting } from 'react-icons/tb';
import { CgSpaceBetweenV } from 'react-icons/cg';
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
} from 'react-icons/lu';
import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      // Add any other handling you need for the keypress event
    }
  };

  return (
    <div
      className="main-container flex flex-col"
      onClick={(e) => e.preventDefault()}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <p className="mb-[0.5rem] text-[1.25rem] font-semibold tracking-wide">
        Article Body{' '}
        <span className="text-brand-red align-middle text-[1.5rem]">
          *
        </span>
      </p>

      <div
        className="bg-brand-black rounded-t-8 -mb-0.5 grid grid-cols-4 grid-rows-2 justify-evenly gap-4 p-4 md:grid-cols-7"
        onClick={(e) => e.preventDefault()}
      >
        <button
          onClick={(e) => {
            e.preventDefault(e);
            editor.chain().focus().undo().run();
          }}
          disabled={
            !editor.can().chain().focus().undo().run()
          }
          className="shadow-sm-btn bg-brand-light rounded-8 flex items-center justify-center p-2"
        >
          <FaUndo className="h-auto w-[20px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          disabled={
            !editor.can().chain().focus().redo().run()
          }
          className="shadow-sm-btn  rounded-8 bg-brand-light  flex items-center justify-center p-2"
        >
          <FaRedo className="h-auto w-[20px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault(e);
            editor.chain().focus().toggleBold().run();
          }}
          disabled={
            !editor.can().chain().focus().toggleBold().run()
          }
          className={`${
            editor.isActive('bold') ? 'bg-brand-yellow' : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-3`}
        >
          <FaBold className="h-[20px] w-[20px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          disabled={
            !editor
              .can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`${
            editor.isActive('italic')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaItalic className="h-[20px] w-[20px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault(e);
            editor.chain().focus().toggleUnderline().run();
          }}
          className={`${
            editor.isActive('underline') ? 'is_active' : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaUnderline className="h-[20px] w-[20px]" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleStrike().run()
          }
          disabled={
            !editor
              .can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={`${
            editor.isActive('strike')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaStrikethrough className="h-[20px] w-[20px]" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().unsetAllMarks().run();
          }}
          className="shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2"
        >
          <TbClearFormatting className="h-[24px] w-[24px]" />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().setParagraph().run()
          }
          className={`${
            editor.isActive('paragraph')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaParagraph className="h-[20px] w-[20px]" />
        </button>

        <div
          onClick={(e) => {
            e.preventDefault();
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 1 })
              .run();
          }}
          className={`${
            editor.isActive('heading', { level: 1 })
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <LuHeading1 className="h-auto w-[24px]" />
        </div>

        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 2 })
              .run()
          }
          className={`${
            editor.isActive('heading', { level: 2 })
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <LuHeading2 className="h-auto w-[24px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 3 })
              .run();
          }}
          className={`${
            editor.isActive('heading', { level: 3 })
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <LuHeading3 className="h-auto w-[24px]" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={`${
            editor.isActive('bulletList')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaListUl className="h-auto w-[24px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run();
          }}
          className={`${
            editor.isActive('orderedList')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaListOl className="h-auto w-[24px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCodeBlock().run();
          }}
          className={`${
            editor.isActive('codeBlock')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaCode className="h-auto w-[24px]" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={`${
            editor.isActive('blockquote')
              ? 'bg-brand-yellow'
              : ''
          } shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2`}
        >
          <FaQuoteLeft className="h-auto w-[24px]" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setHardBreak().run();
          }}
          className="shadow-sm-btn rounded-8 bg-brand-light flex items-center justify-center p-2"
        >
          <CgSpaceBetweenV className="h-[24px] w-[24px]" />
        </button>
      </div>
    </div>
  );
};

const extensions = [
  Document,
  Underline,
  HardBreak,
  Paragraph,
  Text,
  Color.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  TextStyle.configure({ types: [ListItem.name] }),
  HardBreak.configure({
    keepMarks: false,
  }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

export default function TextEditor() {
  const { articleBody, setArticleBody } =
    useCreateArticleContext();

  function handleArticleBodyChange({ editor }) {
    const updatedBody = editor.getHTML();
    setArticleBody(updatedBody);
    console.log(updatedBody);
  }
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={articleBody}
      onUpdate={handleArticleBodyChange}
    ></EditorProvider>
  );
}
