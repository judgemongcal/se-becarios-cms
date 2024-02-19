import { FiUploadCloud } from 'react-icons/fi';
import {
  AddAdminModalBtn,
  AssignSuperAdminBtn,
  EditAdminModalBtn,
  LoginBtn,
  RemoveAdminModalBtn,
  SelectAdminRoleBtn,
} from '../global/Button';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';
import { useManageContentContext } from '../../hooks/useManageContentContext';

function ViewArticleModal() {
  const { userInfo } = useUserInfoContext();
  const {
    currentTitle,
    currentImage,
    currentBody,
    currentAuthor,
  } = useManageContentContext();

  const parser = new DOMParser();
  const content = parser.parseFromString(
    currentBody,
    'text/html',
  );
  const parsedContent = content.body.innerHTML;

  return (
    <div className="modal-bg bg-brand-light md:bg-modal-bg fixed top-0 z-[1000] flex h-[100%] w-[100%] items-start justify-center overflow-scroll">
      <div className="modal-container md:bg-brand-light rounded-10 mx-auto  flex w-[100%] flex-col justify-center px-[2rem]  py-[2.25rem] text-center md:my-[3rem]  md:w-[70%] xl:w-[60%] 2xl:w-[700px] ">
        <h1 className="mb-[3rem] text-center text-[1.25rem] font-medium md:text-[1.5rem] lg:mb-[4rem]">
          Article Preview
        </h1>
        <h1 className="mb-[3rem] text-center text-[1.25rem] font-semibold md:text-[1.65rem] lg:mb-[4rem]">
          {currentTitle}
        </h1>
        <div className=" mb-5 flex h-auto max-h-[500px] max-w-[1000px] self-center">
          <img
            src={currentImage}
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
        <h1 className="mb-[3rem] text-center text-[1.25rem] font-semibold md:text-[1.65rem] lg:mb-[4rem]">
          {currentAuthor}
        </h1>
      </div>
    </div>
  );
}

export default ViewArticleModal;
