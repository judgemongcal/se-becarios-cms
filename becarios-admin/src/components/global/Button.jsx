import {
  FaCheck,
  FaEllipsis,
  FaPlus,
  FaShareFromSquare,
  FaTrash,
} from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';
import {
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { FaGear } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { useSignOutContext } from '../../hooks/useSignOutContext';
import { useManageContentContext } from '../../hooks/useManageContentContext';
import { UserAuth } from '../../hooks/useAuthContext';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';
import { useAdminContext } from '../../hooks/useAdminContext';
import {
  assignAsSuperAdmin,
  fetchAdminById,
} from '../../server/API/SettingsAPI';
import {
  approveArchiveArticlebyID,
  approveEditArticlebyID,
  approvePostArticlebyID,
  archiveArticlebyID,
  deleteArticlebyID,
  fetchArticleById,
  rejectArchiveArticlebyID,
  rejectEditArticlebyID,
  rejectPostArticlebyID,
  retrieveArticlebyID,
} from '../../server/API/ManageContentAPI';
import { useEditArticleContext } from '../../hooks/useEditArticleContext';
import { useArchiveContext } from '../../hooks/useArchiveContext';
import { logActivity } from '../../server/API/GlobalAPI';

function LoginBtn() {
  return (
    <button className=" bg-gradient shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105">
      Log In
    </button>
  );
}

function ResetPasswordBtn() {
  return (
    <button className=" bg-brand-yellow hover:bg-brand-yellow-dark shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105">
      Reset Password
    </button>
  );
}

function LogoutBtn() {
  const navigate = useNavigate();
  const { logOut } = UserAuth();

  const { isSignOutClicked, setIsSignOutClicked } =
    useSignOutContext();
  const { userInfo, setUserInfo } = useUserInfoContext();

  async function handleSignOut(e) {
    e.preventDefault();
    try {
      await logOut();
      setIsSignOutClicked(false);
      navigate('/', { replace: true });
      setUserInfo({});
    } catch (error) {
      console.log(error);
    }
  }

  function handleBack(e) {
    e.preventDefault();
    setIsSignOutClicked(!isSignOutClicked);
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleSignOut(e)}
      >
        Sign Out
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function ViewAllBtn() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-view-btn hover:bg-brand-yellow-dark w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100">
      View All
    </button>
  );
}

function ApproveModalBtn() {
  const {
    setIsPendingItemClicked,
    setIsApproveBtnClicked,
    currentReqType,
    targetId,
    currentDoc,
    currentAuthor,
    setIsPostApproveSuccess,
    setIsEditApproveSuccess,
    setIsArchiveApproveSuccess,
    setIsLoading,
    setIsRequestFailed,
  } = useManageContentContext();

  const { userInfo } = useUserInfoContext();

  function handleBack(e) {
    e.preventDefault(e);
    setIsPendingItemClicked(true);
    setIsApproveBtnClicked(false);
  }

  async function handleConfirmApprove(e) {
    e.preventDefault(e);
    setIsLoading(true);
    setIsApproveBtnClicked(false);
    try {
      if (currentReqType == 'Article Post') {
        const response =
          await approvePostArticlebyID(targetId);
        if (response.success) {
          const data = {
            user: `${userInfo.firstName} ${userInfo.lastName}`,
            actionType: 'ARTICLE_ACTION',
            actionSubtype: 'APPROVE_POST_ARTICLE',
            description: `${userInfo.firstName} ${userInfo.lastName} approved a request to post an article with the title of ${currentDoc.title}, which was submitted by ${currentAuthor}`,
          };
          await logActivity(data);
        } else {
          throw new Error(
            'Failed to approve article post: ' +
              response.statusText,
          );
        }
        setIsPostApproveSuccess(true);
      } else if (currentReqType == 'Edit Article') {
        const response = await approveEditArticlebyID(
          targetId,
          currentDoc,
        );
        if (response.success) {
          const data = {
            user: `${userInfo.firstName} ${userInfo.lastName}`,
            actionType: 'ARTICLE_ACTION',
            actionSubtype: 'APPROVE_EDIT_ARTICLE',
            description: `${userInfo.firstName} ${userInfo.lastName} approved a request to edit an article with the title of ${currentDoc.title}, which was submitted by ${currentAuthor}`,
          };
          await logActivity(data);
        } else {
          throw new Error(
            'Failed to approve article post: ' +
              response.statusText,
          );
        }
        setIsEditApproveSuccess(true);
      } else {
        const response =
          await approveArchiveArticlebyID(targetId);
        if (response.success) {
          const data = {
            user: `${userInfo.firstName} ${userInfo.lastName}`,
            actionType: 'ARTICLE_ACTION',
            actionSubtype: 'APPROVE_ARCHIVE_ARTICLE',
            description: `${userInfo.firstName} ${userInfo.lastName} approved a request to archive an article with the title of ${currentDoc.title}, which was submitted by ${currentAuthor}`,
          };
          await logActivity(data);
        } else {
          throw new Error(
            'Failed to approve article post: ' +
              response.statusText,
          );
        }
        setIsArchiveApproveSuccess(true);
      }
      setIsApproveBtnClicked(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsRequestFailed(true);
      setIsApproveBtnClicked(false);
      console.log('Error with Approving Request: ' + error);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleConfirmApprove(e)}
      >
        Approve Post
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function RejectModalBtn() {
  const {
    setIsPendingItemClicked,
    setIsApproveBtnClicked,
    currentReqType,
    targetId,
    currentDoc,
    currentAuthor,
    setIsPostRejectSuccess,
    setIsEditRejectSuccess,
    setIsArchiveRejectSuccess,
    setIsRejectBtnClicked,
    setIsLoading,
    setIsRequestFailed,
  } = useManageContentContext();

  const { userInfo } = useUserInfoContext();

  function handleBack(e) {
    e.preventDefault(e);
    setIsPendingItemClicked(true);
    setIsRejectBtnClicked(false);
  }

  async function handleConfirmReject(e) {
    setIsLoading(true);
    setIsRejectBtnClicked(false);
    e.preventDefault(e);
    console.log(currentReqType);
    try {
      if (currentReqType == 'Article Post') {
        const response =
          await rejectPostArticlebyID(targetId);
        if (response.success) {
          const data = {
            user: `${userInfo.firstName} ${userInfo.lastName}`,
            actionType: 'ARTICLE_ACTION',
            actionSubtype: 'REJECT_POST_ARTICLE',
            description: `${userInfo.firstName} ${userInfo.lastName} rejected a request to post an article with the title of ${currentDoc.title}, which was submitted by ${currentAuthor}`,
          };
          await logActivity(data);
        } else {
          throw new Error(
            'Failed to reject article post: ' +
              response.statusText,
          );
        }
        setIsPostRejectSuccess(true);
      } else if (currentReqType == 'Edit Article') {
        const response = await rejectEditArticlebyID(
          targetId,
          currentDoc,
        );
        if (response.success) {
          const data = {
            user: `${userInfo.firstName} ${userInfo.lastName}`,
            actionType: 'ARTICLE_ACTION',
            actionSubtype: 'REJECT_EDIT_ARTICLE',
            description: `${userInfo.firstName} ${userInfo.lastName} rejected a request to edit an article with the title of ${currentDoc.title}, which was submitted by ${currentAuthor}`,
          };
          await logActivity(data);
        } else {
          throw new Error(
            'Failed to reject edit article: ' +
              response.statusText,
          );
        }
        setIsEditRejectSuccess(true);
      } else {
        const response =
          await rejectArchiveArticlebyID(targetId);
        if (response.success) {
          const data = {
            user: `${userInfo.firstName} ${userInfo.lastName}`,
            actionType: 'ARTICLE_ACTION',
            actionSubtype: 'REJECT_ARCHIVE_ARTICLE',
            description: `${userInfo.firstName} ${userInfo.lastName} rejected a request to archive an article with the title of ${currentDoc.title}, which was submitted by ${currentAuthor}`,
          };
          await logActivity(data);
        } else {
          throw new Error(
            'Failed to reject archivw article: ' +
              response.statusText,
          );
        }
        setIsArchiveRejectSuccess(true);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsRejectBtnClicked(false);
      setIsRequestFailed(true);

      console.log('Error with Rejecting Request: ' + error);
    }
  }
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleConfirmReject(e)}
      >
        Reject Post
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function EditArticleBtn() {
  const {
    isPreview,
    setIsPreview,
    setIsEditBtnPressed,
    isEditBtnPressed,
    isArchiveBtnPressed,
    setIsArchiveBtnPressed,
    isArchiveConfirmed,
    setIsArchiveConfirmed,
    isArchived,
  } = useEditArticleContext();

  function handleClickPreview(e) {
    e.preventDefault();
    setIsPreview(!isPreview);
  }

  function handleSubmitEidt(e) {
    e.preventDefault();
    setIsEditBtnPressed(!isEditBtnPressed);
  }

  function handleArchive(e) {
    e.preventDefault();
    setIsArchiveBtnPressed(!isArchiveBtnPressed);
  }

  console.log(isArchived);

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className={`bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100 ${
          isArchived ? 'pointer-events-none opacity-30' : ''
        }`}
        onClick={(e) => handleArchive(e)}
      >
        Archive Post
      </button>
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleClickPreview(e)}
      >
        {isPreview ? 'Edit Article' : 'Preview Article'}
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleSubmitEidt(e)}
      >
        {isArchived ? 'Resubmit Article' : 'Submit Edit'}
      </button>
    </div>
  );
}

function SubmitArticleBtn() {
  const { isPreview, setIsPreview, setIsSubmitBtnPressed } =
    useCreateArticleContext();

  function handleClickPreview(e) {
    e.preventDefault();
    setIsPreview(!isPreview);
  }

  function handleClickSubmit(e) {
    e.preventDefault();
    setIsSubmitBtnPressed(true);
  }

  return (
    <div className="mt-[2rem] flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleClickPreview(e)}
      >
        {isPreview ? 'Back to Editing' : 'Preview Post'}
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleClickSubmit(e)}
      >
        Submit Post
      </button>
    </div>
  );
}

function SubmitPostModalBtn() {
  const { userInfo } = useUserInfoContext();

  const {
    isSubmitBtnPressed,
    setIsSubmitBtnPressed,
    isSubmitConfirmed,
    setIsSubmitConfirmed,
    articleTitle,
    articleBody,
    articleImageSrc,
    articleImgFile,
    setIsCreateArticleLoading,
    setIsCreateFailed,
  } = useCreateArticleContext();

  function handleGoBackClicked(e) {
    e.preventDefault();
    setIsSubmitBtnPressed(!isSubmitBtnPressed);
  }

  async function handleSubmitClicked(e) {
    e.preventDefault();
    setIsCreateArticleLoading(true);
    setIsSubmitBtnPressed(false);
    setIsSubmitConfirmed(false);
    try {
      const authorName = `${userInfo.firstName} ${userInfo.lastName}`;
      const isSuperAdmin = userInfo.role == 'Super Admin';
      const articleData = new FormData();
      articleData.append('author', authorName);
      articleData.append('title', articleTitle);
      articleData.append('body', articleBody);
      articleData.append('article-image', articleImgFile);
      articleData.append(
        'isApproved',
        Boolean(isSuperAdmin),
      );
      articleData.append('isArchived', false);

      const response = await fetch(
        'http://localhost:5001/add-article',
        {
          method: 'POST',
          body: articleData,
        },
      );
      if (response.status == 200) {
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ARTICLE_ACTION',
          actionSubtype:
            userInfo.role == 'Super Admin'
              ? 'ADD_ARTICLE'
              : 'REQ_ADD_ARTICLE',
          description:
            userInfo.role == 'Super Admin'
              ? `${userInfo.firstName} ${userInfo.lastName} added an article with the title of ${articleTitle}`
              : `${userInfo.firstName} ${userInfo.lastName} sent a article post request for an article with the title ${articleTitle}`,
        };
        await logActivity(data);
        setIsCreateArticleLoading(false);
        setIsSubmitConfirmed(!isSubmitConfirmed);
      } else {
        throw new Error(
          'Failed to add article: ' + response.statusText,
        );
      }
    } catch (error) {
      setIsCreateArticleLoading(false);
      setIsCreateFailed(true);
      console.log('Error in submitting article: ' + error);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleGoBackClicked(e)}
      >
        Go Back
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleSubmitClicked(e)}
      >
        Submit Post
      </button>
    </div>
  );
}

function PostReqSuccessModalBtn() {
  const navigate = useNavigate();
  const {
    setArticleTitle,
    setArticleImageFileName,
    setArticleImageSrc,
    setArticleBody,
    setIsSubmitBtnPressed,
    setIsPreview,
    setIsSubmitConfirmed,
  } = useCreateArticleContext();

  function handleCreateAnother(e) {
    e.preventDefault();
    setArticleTitle('');
    setArticleImageFileName('');
    setArticleImageSrc('');
    setArticleBody('');
    setIsSubmitBtnPressed(false);
    setIsPreview(false);
    setIsSubmitConfirmed(false);
    window.location.reload();
  }

  function handleBackHome() {
    navigate('/home', { replace: true });
  }
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleCreateAnother(e)}
      >
        Create Another
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBackHome(e)}
      >
        Back to Home
      </button>
    </div>
  );
}

function ProceedModalBtn({ type = '' }) {
  const { setIsPostApproveSuccess } =
    useManageContentContext();
  const navigate = useNavigate();

  function handleProceed(e) {
    e.preventDefault(e);
    if (type == 'archive') {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else if (type == 'manage-content') {
      setIsPostApproveSuccess(false);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      navigate('/manage-content', { replace: true });
    }
  }
  return (
    <button
      className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
      onClick={(e) => handleProceed(e)}
    >
      Proceed
    </button>
  );
}

function TryAgainBtn() {
  const navigate = useNavigate();
  const {
    isArchiveConfirmed,
    setIsArchiveConfirmed,
    isArchiveFailed,
    setIsArchiveFailed,
  } = useEditArticleContext();

  function handleTryAgain(e) {
    e.preventDefault(e);
    setIsArchiveFailed(!isArchiveFailed);
  }
  return (
    <button
      className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
      onClick={(e) => handleTryAgain(e)}
    >
      Try Again
    </button>
  );
}

function AddAdminModalBtn() {
  const [isComplete, setIsComplete] = useState(false);

  const {
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    isAddAdminClicked,
    setIsAddAdminClicked,
  } = useSettingsContext();

  const {
    resetAdminFields,
    adminFirstName,
    adminLastName,
    adminEmail,
    adminContactNum,
    adminImgFile,
    adminRole,
    adminPassword,
    isPasswordInvalid,
    isEmailInvalid,
  } = useAdminContext();

  useEffect(() => {
    setIsComplete(
      !!(
        adminFirstName &&
        adminLastName &&
        adminEmail &&
        adminContactNum &&
        adminImgFile &&
        adminRole &&
        adminPassword &&
        isPasswordInvalid === false &&
        isEmailInvalid === false
      ),
    );
  }, [
    adminContactNum,
    adminFirstName,
    adminLastName,
    adminEmail,
    adminImgFile,
    adminRole,
    adminPassword,
    isPasswordInvalid,
    isEmailInvalid,
  ]);

  function handleDiscard(e) {
    e.preventDefault();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsComplete(false);
    resetAdminFields();
  }

  function handleAddAdmin(e) {
    e.preventDefault();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsAddAdminClicked(!isAddAdminClicked);
  }

  return (
    <div className="flex flex-row justify-around gap-3 py-2">
      <button
        className={`bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark  w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100 ${
          isComplete === true
            ? ''
            : 'disabled pointer-events-none opacity-50'
        }`}
        onClick={(e) => handleAddAdmin(e)}
      >
        Add Admin
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleDiscard(e)}
      >
        Discard Changes
      </button>
    </div>
  );
}

function ConfirmAddAdminModalBtn() {
  const {
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    isAddAdminClicked,
    setIsAddAdminClicked,
    isAddAdminSuccessful,
    setIsAddAdminSuccessful,
    isLoading,
    setIsLoading,
  } = useSettingsContext();

  const { userInfo } = useUserInfoContext();

  const {
    adminFirstName,
    adminLastName,
    adminPassword,
    adminEmail,
    adminContactNum,
    adminImgFile,
    adminImageSrc,
    adminRole,
    resetAdminFields,
  } = useAdminContext();

  const { setIsFailed } = useSettingsContext();

  function handleBack(e) {
    e.preventDefault();
    // resetAdminFields();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsAddAdminClicked(!isAddAdminClicked);
  }

  async function handleAdd(e) {
    e.preventDefault();
    setIsLoading(!isLoading);
    setIsAddAdminBtnClicked(false);
    setIsAddAdminClicked(false);
    try {
      const response = await fetch(
        'http://localhost:5001/add-admin-auth',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            contactNumber: adminContactNum,
            email: adminEmail,
            firstName: adminFirstName,
            lastName: adminLastName,
            role: adminRole,
          }),
        },
      );

      if (response.status != 200) {
        throw new Error('Error with adding auth');
      }

      const formData = new FormData();
      formData.append('admin-image', adminImgFile);
      formData.append('contactNumber', adminContactNum);
      formData.append('email', adminEmail);
      formData.append('firstName', adminFirstName);
      formData.append('lastName', adminLastName);
      formData.append('role', adminRole);

      const response2 = await fetch(
        'http://localhost:5001/add-admin-credentials',
        {
          method: 'POST',

          body: formData,
        },
      );

      if (response2.status != 200) {
        throw new Error('Error with adding auth');
      }

      console.log(response, response2);
      if (
        response.status == 200 &&
        response2.status == 200
      ) {
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ADMIN_ACTION',
          actionSubtype: 'ADD_ADMIN',
          description: `${userInfo.firstName} ${userInfo.lastName} added ${adminFirstName} ${adminLastName} as an administrator`,
        };

        await logActivity(data);

        setIsLoading(false);
        setIsAddAdminSuccessful(true);
        resetAdminFields();
      }

      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log('Line 780: ' + error);
      setIsLoading(false);
      setIsFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-3 py-2">
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark  disabled w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100 "
        onClick={(e) => handleAdd(e)}
      >
        Confirm
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function AssignSuperAdminBtn() {
  const { setIsAssignBtnClicked, setIsAddAdminBtnClicked } =
    useSettingsContext();

  async function handleClick(e) {
    e.preventDefault();
    setIsAssignBtnClicked(true);
    setIsAddAdminBtnClicked(false);
  }
  return (
    <button
      className=" bg-brand-input shadow-shadow-db transition-scale rounded-8 hover:bg-brand-yellow mb-3 w-[100%] py-2 text-[1.15rem] font-semibold  duration-100 ease-in hover:scale-105"
      onClick={(e) => handleClick(e)}
    >
      Assign as Super Administrator
    </button>
  );
}

function ConfirmAssignSuperAdminModalBtn() {
  const {
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    isAddAdminClicked,
    setIsAddAdminClicked,
    setIsAssignBtnClicked,
    setIsAssignSuccessful,
    setIsLoading,
    setIsFailed,
  } = useSettingsContext();

  const { currentDocId, adminFirstName, adminLastName } =
    useAdminContext();
  const { userInfo } = useUserInfoContext();

  function handleBack(e) {
    e.preventDefault();
    // resetAdminFields();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    // setIsAddAdminClicked(!isAddAdminClicked);
    setIsAssignBtnClicked(false);
  }

  async function handleAssign(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await assignAsSuperAdmin(
        currentDocId,
        userInfo.id,
      );
      if (response.success) {
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ADMIN_ACTION',
          actionSubtype: 'ASSIGN_SUPER_ADMIN',
          description: `${userInfo.firstName} ${userInfo.lastName} assigned ${adminFirstName} ${adminLastName} as the Super Administrator. `,
        };
        await logActivity(data);
      } else {
        setIsLoading(false);
        throw new Error(
          'Failed to assign as Super Administrator: ' +
            response.statusText,
        );
      }
      setIsAssignBtnClicked(false);
      setIsAssignSuccessful(true);
      setIsLoading(false);
    } catch (error) {
      setIsAssignBtnClicked(false);
      setIsLoading(false);
      console.log(error);
      setIsFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-3 py-2">
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark  disabled w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100 "
        onClick={(e) => handleAssign(e)}
      >
        Confirm
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function ConfirmEditAdminModalBtn() {
  const {
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    isAddAdminClicked,
    setIsAddAdminClicked,
    isAddAdminSuccessful,
    setIsAddAdminSuccessful,
  } = useSettingsContext();

  const { userInfo } = useUserInfoContext();

  const {
    adminFirstName,
    adminLastName,
    adminPassword,
    adminEmail,
    adminContactNum,
    adminImgFile,
    adminImageSrc,
    adminRole,
    resetAdminFields,
    currentDocId,
  } = useAdminContext();

  const { setIsFailed, setIsEditSuccessful } =
    useSettingsContext();

  function handleBack(e) {
    e.preventDefault();
    // resetAdminFields();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsAddAdminClicked(!isAddAdminClicked);
  }

  async function handleAdd(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsAddAdminBtnClicked(false);
    setIsAddAdminClicked(false);

    try {
      const formData = new FormData();
      formData.append('admin-image', adminImgFile);
      formData.append('contactNumber', adminContactNum);
      formData.append('email', adminEmail);
      formData.append('firstName', adminFirstName);
      formData.append('lastName', adminLastName);
      formData.append('role', adminRole);

      const response = await fetch(
        `http://localhost:5001/edit-admin-credentials/${currentDocId}`,
        {
          method: 'POST',

          body: formData,
        },
      );

      if (response.status != 200) {
        throw new Error('Error editing admin credentials');
      }

      if (adminPassword != '' && adminPassword != null) {
        console.log(adminEmail);
        const res = await fetch(
          `http://localhost:5001/updatePasswordByEmail`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: adminEmail,
              newPassword: adminPassword,
            }),
          },
        );
        console.log(res);

        if (res.status != 200) {
          throw new Error('Error updating password');
        }
      }
      const data = {
        user: `${userInfo.firstName} ${userInfo.lastName}`,
        actionType: 'ADMIN_ACTION',
        actionSubtype: 'EDIT_ADMIN',
        description:
          userInfo.email == adminEmail
            ? `${userInfo.firstName} ${userInfo.lastName} edited their own administrator credentials`
            : `${userInfo.firstName} ${userInfo.lastName} edited ${adminFirstName} ${adminLastName}'s administrator credentials'`,
      };

      if (response.status == 200) {
        await logActivity(data);
        setIsEditSuccessful(true);
        setIsLoading(false);

        setTimeout(function () {
          resetAdminFields();
          window.location.reload();
        }, 2000);
        console.log(adminFirstName, adminLastName);
      }
    } catch (error) {
      console.log('1008: ' + error);
      setIsLoading(false);
      setIsFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-3 py-2">
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark  disabled w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100 "
        onClick={(e) => handleAdd(e)}
      >
        Confirm Edit
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-full py-3 text-[1.05rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function SelectAdminRoleBtn() {
  const { adminRole, setAdminRole } = useAdminContext();
  const [isSuperAdmin, setIsSuperAdmin] = useState(null);

  function handleAdminRoleClick(e) {
    e.preventDefault();
    setAdminRole('Admin');
    setIsSuperAdmin(false);
  }

  function handleSuperAdminRoleClick(e) {
    e.preventDefault();
    setAdminRole('Super Admin');
    setIsSuperAdmin(true);
  }

  return (
    <div className="flex justify-between gap-4">
      <button
        className={`shadow-shadow-db rounded-8 hover:bg-brand-blue w-full  p-3 duration-300 ${
          adminRole != 'Admin'
            ? 'bg-white'
            : 'bg-brand-blue'
        }`}
        onClick={(e) => handleAdminRoleClick(e)}
      >
        Administrator
      </button>
      {/* <button
        className={`shadow-shadow-db rounded-8 hover:bg-brand-yellow-dark  w-full  p-3 duration-300 ${
          isSuperAdmin || adminRole == 'Super Admin'
            ? 'bg-brand-yellow'
            : 'bg-white'
        } `}
        onClick={(e) => handleSuperAdminRoleClick(e)}
      >
        Super Administrator
      </button> */}
    </div>
  );
}

function EditAdminModalBtn() {
  const [isComplete, setIsComplete] = useState(false);

  const {
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    isAddAdminClicked,
    setIsAddAdminClicked,
    isEditingAdmin,
  } = useSettingsContext();

  const {
    resetAdminFields,
    adminFirstName,
    adminLastName,
    adminEmail,
    adminContactNum,
    adminImgFile,
    adminRole,
    adminPassword,
    isPasswordInvalid,
    isEmailInvalid,
  } = useAdminContext();

  useEffect(() => {
    setIsComplete(
      !!(
        adminFirstName &&
        adminLastName &&
        adminEmail &&
        adminContactNum &&
        adminImgFile &&
        adminRole &&
        adminPassword &&
        isPasswordInvalid === false &&
        isEmailInvalid === false
      ),
    );
  }, [
    adminContactNum,
    adminFirstName,
    adminLastName,
    adminEmail,
    adminImgFile,
    adminRole,
    adminPassword,
    isPasswordInvalid,
    isEmailInvalid,
  ]);

  function handleDiscard(e) {
    e.preventDefault();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    resetAdminFields();
    setIsComplete(false);
    resetAdminFields();
  }

  function handleEditAdmin(e) {
    e.preventDefault();
    console.log(isComplete);
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsAddAdminClicked(!isAddAdminClicked);
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className={`bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100 ${
          isComplete || isEditingAdmin
            ? ''
            : 'disable opacity-50'
        }`}
        onClick={(e) => handleEditAdmin(e)}
      >
        Edit Admin Details
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleDiscard(e)}
      >
        Discard Changes
      </button>
    </div>
  );
}

function RemoveAdminModalBtn() {
  const {
    isRemoveAdminBtnClicked,
    setIsRemoveAdminBtnClicked,
    isRemoveSuccessful,
    setIsRemoveSuccessful,
    setIsLoading,
    setIsFailed,
  } = useSettingsContext();

  const { userInfo } = useUserInfoContext();

  const { adminEmail, adminFirstName, adminLastName } =
    useAdminContext();

  function handleBack(e) {
    e.preventDefault();
    setIsRemoveAdminBtnClicked(!isRemoveAdminBtnClicked);
  }

  async function handleDelete(e) {
    e.preventDefault();
    setIsRemoveAdminBtnClicked(!isRemoveAdminBtnClicked);
    setIsLoading(true);
    try {
      const response = await fetch(
        'http://localhost:5001/removeAdminCredAndAuth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: adminEmail }),
        },
      );
      if (response.ok) {
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ADMIN_ACTION',
          actionSubtype: 'REMOVE_ADMIN',
          description: `${userInfo.firstName} ${userInfo.lastName} remove ${adminFirstName} ${adminLastName} as an administrator`,
        };
        await logActivity(data);
      } else {
        throw new Error(
          'Failed to remove admin: ' + response.statusText,
        );
      }
      console.log('success! ' + response);
      setIsLoading(false);
      setIsRemoveSuccessful(!isRemoveSuccessful);

      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log('Error Deleting Admin: ' + error);
      setIsLoading(false);
      setIsFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleDelete(e)}
      >
        Delete Admin
      </button>
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
    </div>
  );
}

function SubmitEditModalBtn() {
  const {
    setIsEditBtnPressed,
    isEditBtnPressed,
    setIsEditConfirmed,
    isEditConfirmed,
    isArchiveFailed,
    setIsArchiveFailed,
    isLoading,
    setIsLoading,
    setIsEditFailed,
  } = useEditArticleContext();

  const {
    articleTitle,
    articleBody,
    articleImageSrc,
    articleImgFile,
  } = useCreateArticleContext();
  const { userInfo } = useUserInfoContext();

  const { id } = useParams();

  function handleBack(e) {
    e.preventDefault();
    setIsEditBtnPressed(!isEditBtnPressed);
  }

  async function handleConfirmEdit(e) {
    e.preventDefault(e);

    setIsEditBtnPressed(false);
    setIsLoading(true);

    try {
      const authorName = `${userInfo.firstName} ${userInfo.lastName}`;
      const isSuperAdmin = userInfo.role == 'Super Admin';
      const articleData = new FormData();
      articleData.append('lastEditedBy', authorName);
      articleData.append('title', articleTitle);
      articleData.append('body', articleBody);

      articleData.append(
        'article-image',
        articleImgFile ? articleImgFile : articleImageSrc,
      );

      articleData.append(
        'isApproved',
        Boolean(isSuperAdmin),
      );
      articleData.append('isArchived', false);
      articleData.append('isEdited', true);
      articleData.append('role', userInfo.role);
      const response = await fetch(
        `http://localhost:5001/edit-article-credentials/${id}`,
        {
          method: 'POST',
          body: articleData,
        },
      );

      if (response.ok) {
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ARTICLE_ACTION',
          actionSubtype:
            userInfo.role == 'Super Admin'
              ? 'EDIT_ARTICLE'
              : 'REQ_EDIT_ARTICLE',
          description:
            userInfo.role == 'Super Admin'
              ? `${userInfo.firstName} ${userInfo.lastName} edited an article with the title of ${articleTitle}`
              : `${userInfo.firstName} ${userInfo.lastName} sent a edit article request for an article with the title ${articleTitle}`,
        };
        await logActivity(data);
      } else {
        throw new Error(
          'Failed to edit article: ' + response.statusText,
        );
      }
      setIsLoading(false);
      // await retrieveArticlebyID(id, userInfo.role);
      setIsEditConfirmed(true);
    } catch (error) {
      console.log('Error in submitting article: ' + error);
      setIsLoading(false);
      setIsEditFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
      <button
        className="bg-brand-blue shadow-shadow-db rounded-10 hover:bg-brand-blue-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleConfirmEdit(e)}
      >
        Submit Request
      </button>
    </div>
  );
}

function SubmitDeleteModalBtn() {
  const {
    isDeleteBtnClicked,
    setIsDeleteBtnClicked,
    isDeleteConfirmed,
    setIsDeleteConfirmed,
    currentDocId,
    isDeleteSuccessful,
    setIsDeleteSuccessful,
    isDeleteFailed,
    setIsDeleteFailed,
    setIsLoading,
  } = useArchiveContext();

  const { userInfo } = useUserInfoContext();

  function handleBack(e) {
    e.preventDefault();
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
  }

  async function handleDelete(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsDeleteBtnClicked(false);
    const doc = await fetchArticleById(currentDocId);
    try {
      const response =
        await deleteArticlebyID(currentDocId);
      console.log(response);
      if (response.success) {
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ARTICLE_ACTION',
          actionSubtype: 'DELETE_ARTICLE',
          description: `${userInfo.firstName} ${userInfo.lastName} deleted an article with the title of ${doc.title}`,
        };
        await logActivity(data);
      } else {
        throw new Error(
          'Failed to delete article: ' + response,
        );
      }
      setIsLoading(false);
      setIsDeleteBtnClicked(!isDeleteBtnClicked);
      setIsDeleteSuccessful(true);
    } catch (error) {
      setIsLoading(false);
      setIsDeleteFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleDelete(e)}
      >
        Delete Article
      </button>
    </div>
  );
}

function SubmitArchiveModalBtn() {
  const {
    isArchiveBtnPressed,
    setIsArchiveBtnPressed,
    isArchiveConfirmed,
    setIsArchiveConfirmed,
    setIsLoading,
    setIsArchiveFailed,
  } = useEditArticleContext();

  const { id } = useParams();

  const { userInfo } = useUserInfoContext();

  const currentRole = userInfo.role;

  function handleBack(e) {
    e.preventDefault();
    setIsArchiveBtnPressed(!isArchiveBtnPressed);
  }

  async function handleArchive(e) {
    setIsLoading(true);
    setIsArchiveBtnPressed(false);

    try {
      e.preventDefault();
      const response = await archiveArticlebyID(
        id,
        currentRole,
      );

      if (response.success) {
        const doc = await fetchArticleById(id);
        const data = {
          user: `${userInfo.firstName} ${userInfo.lastName}`,
          actionType: 'ARTICLE_ACTION',
          actionSubtype:
            userInfo.role == 'Super Admin'
              ? 'ARCHIVE_ARTICLE'
              : 'REQ_ARCHIVE_ARTICLE',
          description:
            userInfo.role == 'Super Admin'
              ? `${userInfo.firstName} ${userInfo.lastName} archived an article with the title of ${doc.title}`
              : `${userInfo.firstName} ${userInfo.lastName} sent a archive article request for an article with the title ${doc.title}`,
        };
        await logActivity(data);
      } else {
        throw new Error(
          'Failed to archive article: ' +
            response.statusText,
        );
      }

      setIsArchiveBtnPressed(!isArchiveBtnPressed);
      console.log(currentRole);
      setIsLoading(false);
      setIsArchiveConfirmed(true);
    } catch (error) {
      setIsLoading(false);
      setIsArchiveFailed(true);
      console.log('Error in archiving: ' + error);
      setIsArchiveBtnPressed(!isArchiveBtnPressed);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleArchive(e)}
      >
        Submit Request
      </button>
    </div>
  );
}

function SubmitRetrieveArchiveModalBtn() {
  const { userInfo } = useUserInfoContext();
  const {
    isPutBackBtnClicked,
    setIsPutBackBtnClicked,
    isPutBackSuccessful,
    setIsPutBackSuccessful,
    isPutBackFailed,
    setIsPutBackFailed,
    currentDocId,
    setIsLoading,
  } = useArchiveContext();

  const currentRole = userInfo.role;

  function handleBack(e) {
    e.preventDefault();
    setIsPutBackBtnClicked(!isPutBackBtnClicked);
  }

  async function handleRetrieve(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await retrieveArticlebyID(
        currentDocId,
        currentRole,
      );
      if (res.success) {
        console.log(res);
        setIsLoading(false);
        setIsPutBackBtnClicked(false);
        setIsPutBackSuccessful(true);
      } else {
        throw new Error('Error retrieving');
      }
    } catch (error) {
      setIsLoading(false);
      setIsPutBackBtnClicked(false);
      setIsPutBackFailed(true);
    }
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button
        className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleBack(e)}
      >
        Go Back
      </button>
      <button
        className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100"
        onClick={(e) => handleRetrieve(e)}
      >
        Submit Request
      </button>
    </div>
  );
}

function GenerateReportBtn() {
  return (
    <button className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark px-4 py-2 text-[1rem] font-semibold text-[#FFFFFF] duration-300 md:px-5 md:text-[1.25rem]">
      Generate Report
    </button>
  );
}

function BackBtn() {
  const navigate = useNavigate();
  const { isArchiveEdit } = useArchiveContext();

  function handleBack(e) {
    e.preventDefault();
    console.log(isArchiveEdit);
    if (isArchiveEdit) {
      navigate('/post-archives', { replace: true });
    } else {
      navigate('/manage-content', { replace: true });
    }
  }
  return (
    <button
      className="bg-brand-black shadow-shadow-db rounded-10 hover:bg-brand-light min-w-[200px] max-w-[10%] p-3 text-[1.15rem] font-semibold text-white duration-300 hover:text-black lg:-mb-[2rem]"
      onClick={(e) => handleBack(e)}
    >
      Back
    </button>
  );
}

function PostedSettingsBtn({ id }) {
  const idVal = id;
  const navigate = useNavigate();
  const {
    isPostedSettingsClicked,
    setIsPostedSettingsClicked,
    targetId,
    setTargetId,
  } = useManageContentContext();

  function handleSettingsClick(e, id) {
    e.preventDefault();
    console.log(idVal);
    setIsPostedSettingsClicked(!isPostedSettingsClicked);
    setTargetId(idVal);
  }

  async function handleEditClick(e) {
    e.preventDefault();
    navigate(`/edit-article/${idVal}`, { replace: true });
  }

  return (
    <div className="flex gap-4" id={id}>
      <button
        className={` bg-brand-blue rounded-8 shadow-shadow-db hover:bg-brand-blue-dark ${
          isPostedSettingsClicked && idVal === targetId
            ? 'flex'
            : 'hidden'
        } w-fit items-center gap-4 p-2 duration-300 `}
      >
        <LuPencil
          className=" stroke-brand-light h-auto w-[30px] md:w-[36px] "
          onClick={(e) => handleEditClick(e)}
        />
      </button>
      <button className=" bg-brand-input rounded-8 shadow-shadow-db hover:bg-brand-light active:bg-brand-yellow  w-fit items-center  p-2 duration-300">
        <FaEllipsis
          className="fill-brand-black h-auto w-[30px] md:w-[36px]"
          onClick={(e) => handleSettingsClick(e)}
        />
      </button>
    </div>
  );
}

function EditItemBtn({ id }) {
  const {
    setAdminFirstName,
    setAdminLastName,
    setAdminContactNum,
    setAdminImgFile,
    setAdminEmail,
    setAdminPassword,
    setAdminRole,
    setCurrentDocId,
  } = useAdminContext();

  const {
    AddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    setIsEditingAdmin,
  } = useSettingsContext();

  async function handleClick(e) {
    e.preventDefault();
    setCurrentDocId(id);
    setIsEditingAdmin(true);
    try {
      const data = await fetchAdminById(id);
      console.log(data);
      setAdminFirstName(data.firstName);
      setAdminLastName(data.lastName);
      setAdminEmail(data.email);
      setAdminImgFile(data.image);
      setAdminContactNum(data.contactNumber);
      setAdminRole(data.role);
    } catch (error) {
      console.log(error);
    }

    setIsAddAdminBtnClicked(!AddAdminBtnClicked);
  }

  return (
    <button
      className={`bg-brand-light hover:bg-brand-black rounded-8 shadow-sm-btn items-center p-2 duration-300`}
      onClick={(e) => handleClick(e)}
      title="Edit Admin"
    >
      <LuPencil className="fill-brand-input stroke-brand-black  h-[20px] w-[24px] " />
    </button>
  );
}

function SuperAdminSettingsBtn() {
  const { isSAGearClicked, setIsSAGearClicked } =
    useSettingsContext();

  function handleGearClick(e) {
    e.preventDefault();
    setIsSAGearClicked(!isSAGearClicked);
  }
  return (
    <button
      className="bg-brand-light hover:bg-brand-yellow rounded-8 shadow-sm-btn items-center p-2 duration-300"
      onClick={(e) => handleGearClick(e)}
    >
      <FaGear className="fill-brand-black stroke-brand-black  h-[24px] w-[28px] " />
    </button>
  );
}

function AdminSettingsBtn() {
  const { userInfo } = useUserInfoContext();

  const {
    isAGearClicked,
    setIsAGearClicked,
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    setIsEditingAdmin,
  } = useSettingsContext();

  function handleGearClick(e) {
    e.preventDefault();
    setIsAGearClicked(!isAGearClicked);
  }

  function handleAddAdmin(e) {
    e.preventDefault();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsEditingAdmin(false);
  }

  return (
    <div className="flex items-center justify-evenly gap-2">
      <button
        className={`bg-brand-yellow hover:bg-brand-yellow-dark rounded-8 shadow-sm-btn items-center p-2 duration-300 ${
          isAGearClicked && userInfo.role == 'Super Admin'
            ? ''
            : 'hidden'
        }`}
        onClick={(e) => handleAddAdmin(e)}
        title="Add Admin"
      >
        <FaPlus className="h-[24px]  w-[28px] fill-white " />
      </button>
      <button
        className="bg-brand-light hover:bg-brand-yellow rounded-8 shadow-sm-btn items-center p-2 duration-300"
        onClick={(e) => handleGearClick(e)}
      >
        <FaGear className="fill-brand-black stroke-brand-black  h-[24px] w-[28px] " />
      </button>
    </div>
  );
}

function UploadImageBtn() {
  return (
    <button className="bg-brand-light hover:bg-brand-input rounded-8 shadow-sm-btn w-fit items-center p-2 duration-300">
      <FiUpload className=" stroke-brand-black  h-auto w-[28px] " />
    </button>
  );
}

function RemoveAdminBtn({ id }) {
  const {
    isRemoveAdminBtnClicked,
    setIsRemoveAdminBtnClicked,
  } = useSettingsContext();

  const { userInfo } = useUserInfoContext();

  const {
    setAdminFirstName,
    setAdminLastName,
    setAdminContactNum,
    setAdminImgFile,
    setAdminEmail,
    setAdminPassword,
    setAdminRole,
    setCurrentDocId,
  } = useAdminContext();

  async function handleClick(e) {
    e.preventDefault();

    try {
      const data = await fetchAdminById(id);
      console.log(data);
      setAdminFirstName(data.firstName);
      setAdminLastName(data.lastName);
      setAdminEmail(data.email);
      setAdminImgFile(data.image);
      setAdminContactNum(data.contactNumber);
      setAdminRole(data.role);
      setIsRemoveAdminBtnClicked(!isRemoveAdminBtnClicked);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      className={`bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn items-center p-2 duration-300 ${
        userInfo.role == 'Super Admin' ? '' : 'hidden'
      }`}
      onClick={(e) => handleClick(e)}
      title="Remove Admin"
    >
      <FaXmark className="fill-brand-input h-auto w-[24px]" />
    </button>
  );
}

function VisitWebsiteBtn() {
  return (
    <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark px-6 py-2 text-[1.05rem] font-semibold text-[#FFFFFF] duration-300 lg:text-[1.5rem]">
      Visit our Website
    </button>
  );
}

function DashboardViewAllBtn({ path }) {
  return (
    <nav>
      <NavLink to={path}>
        <div className="view-all bg-brand-yellow hover:bg-brand-yellow-dark  rounded-b-8 w-full cursor-pointer px-2 py-5 text-center text-[1.25rem] font-semibold duration-300 hover:text-white">
          View All
        </div>
      </NavLink>
    </nav>
  );
}

function ForApprovalListItemBtn({ id }) {
  const {
    setTargetId,
    setIsPendingItemClicked,
    setCurrentTitle,
    setCurrentBody,
    setCurrentAuthor,
    setCurrentImage,
    setCurrentSubmittedBy,
    setcurrentTitleEdit,
    setcurrentBodyEdit,
    setcurrentImageEdit,
    setCurrentDoc,
  } = useManageContentContext();

  async function handlePreview(e) {
    e.preventDefault();
    try {
      const article = await fetchArticleById(id);
      setCurrentTitle(article.title);
      setCurrentImage(article.image);
      setCurrentBody(article.body);
      setCurrentAuthor(article.author);
      setCurrentSubmittedBy(article.submittedBy);
      setcurrentTitleEdit(article.titleEdit);
      setcurrentBodyEdit(article.bodyEdit);
      setcurrentImageEdit(article.imageEdit);
      setCurrentDoc(article);
      setTargetId(id);
      setIsPendingItemClicked(true);
      console.log(id);
    } catch (error) {
      console.log('Error fetching article: ' + error);
    }
  }

  return (
    <div className="mt-4 flex flex-row justify-end gap-3">
      <button
        className="bg-brand-blue hover:bg-brand-blue-dark rounded-8 shadow-sm-btn mt-2 items-center p-2 duration-300"
        title="Preview"
        onClick={(e) => handlePreview(e)}
      >
        <MdOutlineRemoveRedEye className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button>
      {/* <button
        className="bg-brand-green hover:bg-brand-green-dark rounded-8 shadow-sm-btn items-center p-2 duration-300"
        title="Accept"
      >
        <FaCheck className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button>
      <button
        className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn items-center p-2 duration-300"
        title="Reject"
      >
        <FaXmark className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button> */}
    </div>
  );
}

function ViewArticleModalBtn({ id, type }) {
  console.log(type);
  const {
    setTargetId,
    setIsPendingItemClicked,
    setCurrentTitle,
    setCurrentBody,
    setCurrentAuthor,
    setCurrentImage,
    setIsApproveBtnClicked,
    setIsRejectBtnClicked,
  } = useManageContentContext();

  function handleBack(e) {
    e.preventDefault();
    setIsPendingItemClicked(false);
  }

  function handleApprove(e) {
    e.preventDefault();
    setIsApproveBtnClicked(true);
    setIsPendingItemClicked(false);
  }

  function handleReject(e) {
    e.preventDefault();
    console.log('here');
    setIsRejectBtnClicked(true);
    setIsPendingItemClicked(false);
  }

  return (
    <div className="mt-4 flex flex-row justify-start gap-4">
      <button
        className="bg-brand-yellow hover:bg-brand-yellow-dark rounded-8 shadow-sm-btn w-full items-center p-3 duration-300"
        title="Back"
        onClick={(e) => handleBack(e)}
      >
        <h1 className="lg:text-[1.25rem text-[1rem] font-medium tracking-wide">
          Go Back
        </h1>
      </button>
      <button
        className="bg-brand-green hover:bg-brand-green-dark rounded-8 shadow-sm-btn w-full items-center p-3 duration-300"
        title="Accept"
        onClick={(e) => handleApprove(e)}
      >
        <h1 className="lg:text-[1.25rem text-[1rem] font-medium tracking-wide text-white">
          Approve
        </h1>
      </button>
      <button
        className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn w-full items-center p-3 duration-300"
        title="Reject"
        onClick={(e) => handleReject(e)}
      >
        <h1 className="lg:text-[1.25rem text-[1rem] font-medium tracking-wide text-white">
          Reject
        </h1>
      </button>
    </div>
  );
}

function ArchivedListItemBtn({ id }) {
  const idVal = id;
  const navigate = useNavigate();

  const {
    isDeleteBtnClicked,
    setIsDeleteBtnClicked,
    setCurrentDocId,
    isPutBackBtnClicked,
    setIsPutBackBtnClicked,
    setIsArchiveEdit,
  } = useArchiveContext();

  function handleDelete(e) {
    e.preventDefault();
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
    setCurrentDocId(idVal);
  }

  function handlePutBack(e) {
    e.preventDefault();
    setCurrentDocId(idVal);
    setIsPutBackBtnClicked(!isPutBackBtnClicked);
  }

  function handleView(e) {
    e.preventDefault();
    setIsArchiveEdit(true);
    navigate(`/edit-article/${idVal}`, { replace: true });
  }

  return (
    <div className="mt-4 flex flex-row justify-start gap-3">
      <button
        className="bg-brand-blue hover:bg-brand-blue-dark rounded-8 shadow-sm-btn items-center p-2 duration-300"
        onClick={(e) => handleView(e)}
      >
        <MdOutlineRemoveRedEye
          className="fill-brand-input h-auto w-[25px] md:w-[30px]"
          title="Preview"
        />
      </button>
      <button
        className="bg-brand-yellow hover:bg-brand-yellow-dark rounded-8 shadow-sm-btn items-center p-2 duration-300"
        onClick={(e) => handlePutBack(e)}
        title="Retrieve"
      >
        <FaShareFromSquare className="fill-brand-input h-auto w-[25px] md:w-[30px]" />
      </button>
      <button
        className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn items-center p-2 duration-300"
        onClick={(e) => handleDelete(e)}
        title="Delete"
      >
        <FaTrash className="fill-brand-input h-auto w-[25px] md:w-[30px]" />
      </button>
    </div>
  );
}

export {
  LoginBtn,
  ResetPasswordBtn,
  ViewAllBtn,
  ApproveModalBtn,
  RejectModalBtn,
  EditArticleBtn,
  SubmitPostModalBtn,
  PostReqSuccessModalBtn,
  ProceedModalBtn,
  AddAdminModalBtn,
  ConfirmAddAdminModalBtn,
  AssignSuperAdminBtn,
  ConfirmEditAdminModalBtn,
  SelectAdminRoleBtn,
  EditAdminModalBtn,
  RemoveAdminModalBtn,
  SubmitEditModalBtn,
  SubmitDeleteModalBtn,
  SubmitArchiveModalBtn,
  GenerateReportBtn,
  BackBtn,
  PostedSettingsBtn,
  EditItemBtn,
  AdminSettingsBtn,
  RemoveAdminBtn,
  VisitWebsiteBtn,
  LogoutBtn,
  DashboardViewAllBtn,
  ForApprovalListItemBtn,
  ArchivedListItemBtn,
  UploadImageBtn,
  SubmitArticleBtn,
  SuperAdminSettingsBtn,
  ConfirmAssignSuperAdminModalBtn,
  TryAgainBtn,
  SubmitRetrieveArchiveModalBtn,
  ViewArticleModalBtn,
};
