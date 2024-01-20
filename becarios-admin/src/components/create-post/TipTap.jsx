import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import {
  EditorProvider,
  useCurrentEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import {
  FaBold,
  FaItalic,
  FaListUl,
  FaParagraph,
  FaStrikethrough,
} from 'react-icons/fa6';
import { TbClearFormatting } from 'react-icons/tb';
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
} from 'react-icons/lu';

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="grid grid-cols-12 grid-rows-2 justify-evenly gap-3">
      <button
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
        disabled={
          !editor.can().chain().focus().toggleBold().run()
        }
        className={`${
          editor.isActive('bold') ? 'bg-brand-yellow' : ''
        } shadow-shadow-db rounded-8 flex items-center justify-center p-3`}
      >
        <FaBold className="h-[20px] w-[20px]" />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
        disabled={
          !editor.can().chain().focus().toggleItalic().run()
        }
        className={`${
          editor.isActive('italic') ? 'bg-brand-yellow' : ''
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <FaItalic className="h-[20px] w-[20px]" />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleStrike().run()
        }
        disabled={
          !editor.can().chain().focus().toggleStrike().run()
        }
        className={`${
          editor.isActive('strike') ? 'bg-brand-yellow' : ''
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <FaStrikethrough className="h-[20px] w-[20px]" />
      </button>

      <button
        onClick={() =>
          editor.chain().focus().unsetAllMarks().run()
        }
        className="shadow-shadow-db rounded-8 flex items-center justify-center p-2"
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
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <FaParagraph className="h-[20px] w-[20px]" />
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run()
        }
        className={`${
          editor.isActive('heading', { level: 1 })
            ? 'bg-brand-yellow'
            : ''
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <LuHeading1 className="h-auto w-[24px]" />
      </button>

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
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <LuHeading2 className="h-auto w-[24px]" />
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 3 })
            .run()
        }
        className={`${
          editor.isActive('heading', { level: 3 })
            ? 'bg-brand-yellow'
            : ''
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <LuHeading3 className="h-auto w-[24px]" />
      </button>

      <button
        onClick={() =>
          editor.chain().focus().toggleBulletList().run()
        }
        className={`${
          editor.isActive('bulletList')
            ? 'bg-brand-yellow'
            : ''
        } shadow-shadow-db rounded-8 flex items-center justify-center p-2`}
      >
        <FaListUl className="h-auto w-[24px]" />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
        className={
          editor.isActive('orderedList') ? 'is-active' : ''
        }
      >
        ordered list
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleCodeBlock().run()
        }
        className={
          editor.isActive('codeBlock') ? 'is-active' : ''
        }
      >
        code block
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleBlockquote().run()
        }
        className={
          editor.isActive('blockquote') ? 'is-active' : ''
        }
      >
        blockquote
      </button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can().chain().focus().undo().run()
        }
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can().chain().focus().redo().run()
        }
      >
        redo
      </button>
    </div>
  );
};

const extensions = [
  Document,
  Paragraph,
  Text,
  Color.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  TextStyle.configure({ types: [ListItem.name] }),
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

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

export default function TipTap() {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
}
