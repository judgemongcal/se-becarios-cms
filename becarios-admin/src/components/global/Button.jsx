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
  archiveArticlebyID,
  deleteArticlebyID,
  fetchArticleById,
  retrieveArticlebyID,
} from '../../server/API/ManageContentAPI';
import { useEditArticleContext } from '../../hooks/useEditArticleContext';
import { useArchiveContext } from '../../hooks/useArchiveContext';

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
  } = useManageContentContext();

  function handleBack(e) {
    e.preventDefault(e);
    setIsPendingItemClicked(true);
    setIsApproveBtnClicked(false);
  }

  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-green shadow-shadow-db rounded-10 hover:bg-brand-green-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
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
  return (
    <div className="flex flex-row justify-around gap-4 py-2">
      <button className="bg-brand-yellow shadow-shadow-db rounded-10 hover:bg-brand-yellow-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
        Reject Post
      </button>
      <button className="bg-brand-red shadow-shadow-db rounded-10 hover:bg-brand-red-dark w-[100%] py-3 text-[1.15rem] font-semibold text-[#FFFFFF] duration-100">
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
  } = useCreateArticleContext();

  function handleGoBackClicked(e) {
    e.preventDefault();
    setIsSubmitBtnPressed(!isSubmitBtnPressed);
  }

  async function handleSubmitClicked(e) {
    e.preventDefault();

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

      await fetch('http://localhost:5001/add-article', {
        method: 'POST',
        body: articleData,
      });
      setIsSubmitConfirmed(!isSubmitConfirmed);
    } catch (error) {
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
    navigate('/dashboard', { replace: true });
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

function ProceedModalBtn({ type }) {
  const navigate = useNavigate();

  function handleProceed(e) {
    e.preventDefault(e);
    if (type == 'archive') {
      window.location.reload();
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
    console.log(isComplete);
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
  } = useSettingsContext();

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

  function handleBack(e) {
    e.preventDefault();
    // resetAdminFields();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsAddAdminClicked(!isAddAdminClicked);
  }

  async function handleAdd(e) {
    e.preventDefault();

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

      console.log(adminRole);
      const formData = new FormData();
      formData.append('admin-image', adminImgFile);
      formData.append('contactNumber', adminContactNum);
      formData.append('email', adminEmail);
      formData.append('firstName', adminFirstName);
      formData.append('lastName', adminLastName);
      formData.append('role', adminRole);

      await fetch(
        'http://localhost:5001/add-admin-credentials',
        {
          method: 'POST',

          body: formData,
        },
      );
      setIsAddAdminBtnClicked(false);
      setIsAddAdminClicked(false);
      setIsAddAdminSuccessful(!isAddAdminSuccessful);
      resetAdminFields();
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
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
  } = useSettingsContext();

  const { currentDocId } = useAdminContext();
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
    try {
      await assignAsSuperAdmin(currentDocId, userInfo.id);
      setIsAssignBtnClicked(false);
      setIsAssignSuccessful(true);
    } catch (error) {
      console.log(error);
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

  function handleBack(e) {
    e.preventDefault();
    // resetAdminFields();
    setIsAddAdminBtnClicked(!isAddAdminBtnClicked);
    setIsAddAdminClicked(!isAddAdminClicked);
  }

  async function handleAdd(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('admin-image', adminImgFile);
      formData.append('contactNumber', adminContactNum);
      formData.append('email', adminEmail);
      formData.append('firstName', adminFirstName);
      formData.append('lastName', adminLastName);
      formData.append('role', adminRole);

      await fetch(
        `http://localhost:5001/edit-admin-credentials/${currentDocId}`,
        {
          method: 'POST',

          body: formData,
        },
      );

      if (adminPassword != '' && adminPassword != null) {
        try {
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
        } catch (error) {
          console.log(
            `Error with updating password: `,
            error,
          );
        }
      }
      setIsAddAdminBtnClicked(false);
      setIsAddAdminClicked(false);
      setIsAddAdminSuccessful(!isAddAdminSuccessful);
      resetAdminFields();
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
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
  } = useSettingsContext();

  const { adminEmail } = useAdminContext();

  function handleBack(e) {
    e.preventDefault();
    setIsRemoveAdminBtnClicked(!isRemoveAdminBtnClicked);
  }

  async function handleDelete(e) {
    e.preventDefault();

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
      console.log('success! ' + response);
      setIsRemoveAdminBtnClicked(!isRemoveAdminBtnClicked);
      setIsRemoveSuccessful(!isRemoveSuccessful);

      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log('Error Deleting Admin: ' + error);
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
    setIsEditConfirmed(!isEditConfirmed);

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
      await fetch(
        `http://localhost:5001/edit-article-credentials/${id}`,
        {
          method: 'POST',
          body: articleData,
        },
      );
      setIsEditConfirmed(!isEditConfirmed);
    } catch (error) {
      console.log('Error in submitting article: ' + error);
      setIsArchiveFailed(!isArchiveFailed);
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
  } = useArchiveContext();

  function handleBack(e) {
    e.preventDefault();
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      await deleteArticlebyID(currentDocId);
      setIsDeleteBtnClicked(!isDeleteBtnClicked);
      setIsDeleteSuccessful(!isDeleteSuccessful);
    } catch (error) {
      setIsDeleteFailed(!isDeleteFailed);
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
        Submit Request
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
  } = useEditArticleContext();

  const { id } = useParams();

  const { userInfo } = useUserInfoContext();

  const currentRole = userInfo.role;

  function handleBack(e) {
    e.preventDefault();
    setIsArchiveBtnPressed(!isArchiveBtnPressed);
  }

  async function handleArchive(e) {
    try {
      e.preventDefault();
      await archiveArticlebyID(id, currentRole);
      setIsArchiveConfirmed(!isArchiveConfirmed);
      setIsArchiveBtnPressed(!isArchiveBtnPressed);
      console.log(currentRole);
    } catch (error) {
      console.log('Error in archiving: ' + error);
      setIsArchiveConfirmed(!isArchiveConfirmed);
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
  } = useArchiveContext();

  const currentRole = userInfo.role;

  function handleBack(e) {
    e.preventDefault();
    setIsPutBackBtnClicked(!isPutBackBtnClicked);
  }

  async function handleRetrieve(e) {
    e.preventDefault();
    try {
      await retrieveArticlebyID(currentDocId, currentRole);
      setIsPutBackBtnClicked(!isPutBackBtnClicked);
      setIsPutBackSuccessful(!isPutBackSuccessful);
    } catch (error) {
      setIsPutBackBtnClicked(!isPutBackBtnClicked);
      setIsPutBackFailed(!isPutBackFailed);
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

function BacktoDashboardBtn() {
  return (
    <button className="bg-brand-black shadow-shadow-db rounded-10 hover:bg-brand-light min-w-[200px] max-w-[10%] p-3 text-[1.15rem] font-semibold text-white duration-300 hover:text-black lg:-mb-[2rem]">
      Back to Dashboard
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
    <div className="mt-4 flex flex-row justify-start gap-3">
      <button
        className="bg-brand-blue hover:bg-brand-blue-dark rounded-8 shadow-sm-btn items-center p-2 duration-300"
        title="Preview"
        onClick={(e) => handlePreview(e)}
      >
        <MdOutlineRemoveRedEye className="fill-brand-input h-auto w-[30px] md:w-[35px]" />
      </button>
      <button
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
      </button>
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
  BacktoDashboardBtn,
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
