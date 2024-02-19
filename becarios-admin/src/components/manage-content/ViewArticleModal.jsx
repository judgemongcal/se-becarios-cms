import { FiUploadCloud } from 'react-icons/fi';
import {
  AddAdminModalBtn,
  AssignSuperAdminBtn,
  EditAdminModalBtn,
  ForApprovalListItemBtn,
  LoginBtn,
  RemoveAdminModalBtn,
  SelectAdminRoleBtn,
  ViewArticleModalBtn,
} from '../global/Button';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';
import { useManageContentContext } from '../../hooks/useManageContentContext';
import { useEffect, useState } from 'react';

function ViewArticleModal() {
  const { userInfo } = useUserInfoContext();
  const [type, setType] = useState('');
  const [editView, setEditView] = useState(false);
  const {
    currentTitle,
    currentImage,
    currentBody,
    currentAuthor,
    currentTitleEdit,
    currentImageEdit,
    currentBodyEdit,
    targetId,
    showOriginal,
    setShowOriginal,
    currentDoc,
  } = useManageContentContext();

  const parser = new DOMParser();
  const content = parser.parseFromString(
    currentBody,
    'text/html',
  );
  const parsedContent = content.body.innerHTML;

  let contentEdit, parsedContentEdit;

  if (currentBodyEdit != '') {
    contentEdit = parser.parseFromString(
      currentBodyEdit,
      'text/html',
    );
    parsedContentEdit = contentEdit.body.innerHTML;
  }

  useEffect(() => {
    if (
      currentTitleEdit != '' ||
      currentBodyEdit != '' ||
      currentImageEdit != ''
    ) {
      setShowOriginal(true);
    } else {
      setShowOriginal(false);
    }
  }, []);

  useEffect(() => {
    if (
      currentDoc.isEdited == true &&
      currentDoc.isEditApproved == false
    ) {
      setType('Edit Article');
    } else if (
      currentDoc.isArchived == true &&
      currentDoc.isArchiveApproved == false
    ) {
      setType('Archive Article');
    } else {
      setType('Article Post');
    }
  }, [currentDoc]);

  return (
    <div className="modal-bg bg-brand-light md:bg-modal-bg fixed top-0 z-[1000] flex h-[100%] w-[100%] items-start justify-center overflow-scroll">
      <div className="modal-container md:bg-brand-light rounded-10 mx-auto flex  w-[100%] flex-col justify-center overflow-scroll  px-[2rem] py-[2.25rem] text-center  md:my-[3rem] md:w-[100%] xl:w-[65%] 2xl:w-[700px] ">
        <h1 className="mb-[3rem] text-center text-[1.25rem] font-medium md:text-[1.5rem] lg:mb-[2rem]">
          Article Preview
        </h1>
        <p
          className={`activity-label ${
            type == 'Article Post'
              ? 'bg-brand-green text-white'
              : type == 'Edit Article'
                ? 'bg-brand-blue'
                : 'bg-brand-yellow'
          } rounded-8 mx-auto mb-3 min-w-[50%] max-w-[190px] px-4 py-2 text-center text-[0.9rem] font-medium md:w-[190px] lg:text-[1.2rem] `}
        >
          {type} Request
        </p>
        {showOriginal && (
          <div className=" mx-auto my-[2rem] flex flex-row justify-around gap-3 lg:w-[50%]">
            <h1
              className={`${
                !editView
                  ? 'bg-brand-black text-white'
                  : 'bg-brand-light'
              } rounded-8 shadow-shadow-db mx-auto w-full p-2 font-medium duration-300 hover:scale-105`}
              onClick={() => setEditView(false)}
            >
              Original
            </h1>
            <h1
              className={`${
                editView
                  ? 'bg-brand-black text-white'
                  : 'bg-brand-light'
              } rounded-8 shadow-shadow-db mx-auto w-full p-2 font-medium duration-300 hover:scale-105`}
              onClick={() => setEditView(true)}
            >
              Edited
            </h1>
          </div>
        )}
        <h1 className="mb-[3rem] text-center text-[1.25rem] font-semibold md:text-[1.65rem] lg:mb-[4rem]">
          {editView && currentTitleEdit
            ? currentTitleEdit
            : currentTitle}
        </h1>
        <div className=" mb-5 flex h-auto max-h-[500px] max-w-[1000px] self-center">
          <img
            src={
              editView && currentImageEdit
                ? currentImageEdit
                : currentImage
            }
            alt=""
            className="rounded-8 shadow-shadow-db"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: editView
              ? parsedContentEdit
              : parsedContent,
          }}
          className=""
        />
        <h1 className="mb-[3rem] text-center text-[1.25rem] font-semibold md:text-[1.65rem] lg:mb-[4rem]">
          {currentAuthor}
        </h1>
        <ViewArticleModalBtn id={targetId} />
      </div>
    </div>
  );
}

export default ViewArticleModal;
