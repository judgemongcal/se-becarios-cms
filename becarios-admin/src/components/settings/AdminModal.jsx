import { FiUploadCloud } from 'react-icons/fi';
import {
  AddAdminModalBtn,
  AssignSuperAdminBtn,
  EditAdminModalBtn,
  LoginBtn,
  RemoveAdminModalBtn,
  SelectAdminRoleBtn,
} from '../global/Button';

import { useAdminContext } from '../../hooks/useAdminContext';
import { FaCheck, FaEye } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';

function AdminModal() {
  const [showPassword, setShowPassword] = useState(false);
  const { currentDocId } = useAdminContext();
  const [isDragging, setIsDragging] = useState(false);

  const {
    adminFirstName,
    setAdminFirstName,
    adminLastName,
    setAdminLastName,
    adminContactNum,
    setAdminContactNum,
    adminImgFile,
    setAdminImgFile,
    setAdminImageSrc,
    adminImageSrc,
    adminEmail,
    setAdminEmail,
    adminPassword,
    setAdminPassword,
    isEmailInvalid,
    setIsEmailInvalid,
    isPasswordInvalid,
    setIsPasswordInvalid,
  } = useAdminContext();

  const { isEditingAdmin } = useSettingsContext();
  const { userInfo } = useUserInfoContext();
  const [imgSrc, setImgSrc] = useState(
    '../src/assets/sample_admin.webp',
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleAdminImageSrcChange(files[0]);
    }
  };

  useEffect(() => {
    if (adminImgFile && adminImgFile != '') {
      setImgSrc(adminImgFile);
    } else if (adminImageSrc && adminImageSrc != '') {
      setImgSrc(adminImageSrc);
    } else {
      setImgSrc('../src/assets/sample_admin.webp');
    }
  }, [adminImgFile, adminImageSrc, setImgSrc]);

  // Email Validation
  useEffect(() => {
    if (
      adminEmail.includes('@') &&
      !adminEmail.endsWith('ust.edu.ph')
    ) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  }, [adminEmail, setIsEmailInvalid]);

  // Password Validation
  useEffect(() => {
    const charCount = adminPassword.length;
    const hasNumber = /\d/.test(adminPassword);
    const hasSpecialCharacter =
      /[`!@#$%^&*()_+\-=[{};':"\\|,.<>/?~]/.test(
        adminPassword,
      );

    if (
      adminPassword.length > 0 &&
      !hasNumber &&
      !hasSpecialCharacter &&
      charCount < 8
    ) {
      setIsPasswordInvalid(true);
    } else if (!hasNumber && !hasSpecialCharacter) {
      setIsPasswordInvalid(true);
    } else if (!hasNumber || !hasSpecialCharacter) {
      setIsPasswordInvalid(true);
    } else {
      setIsPasswordInvalid(false);
    }
  }, [adminPassword, setIsPasswordInvalid]);

  function handleAdminImageSrcChange(e) {
    let file;
    if (e.target) {
      // File selected through file input
      console.log(e.target.value);
      file = e.target.files[0];
    } else {
      // File dropped
      file = e;
    }
    console.log(file);
    setAdminImgFile(file);

    if (file) {
      setAdminImageSrc(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdminImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }

    // Validate the phone number format
    const validatePhoneNumber = (phoneNumber) => {
      // Regular expression to match the Philippine phone number format (11 digits starting with 09)
      const phoneNumberPattern = /^(09|\+639)\d{9}$/;
      return phoneNumberPattern.test(phoneNumber);
    };

    const handleContactNumChange = (e) => {
      const inputPhoneNumber = e.target.value;
      setAdminContactNum(inputPhoneNumber);
      setIsValidPhoneNumber(
        validatePhoneNumber(inputPhoneNumber),
      );
    };
  }

  return (
    <div className="modal-bg bg-brand-light md:bg-modal-bg fixed top-0 z-[1000] flex h-[100%] w-[100%] items-start justify-center overflow-scroll">
      <div className="modal-container md:bg-brand-light rounded-10 mx-auto flex w-[100%] flex-col justify-center px-[2rem]  py-[2.25rem] text-center md:my-[3rem]  md:w-[50%] xl:w-[50%] 2xl:w-[700px]">
        <h1 className="mb-[3rem] text-[1.25rem] font-semibold md:text-[1.5rem] lg:mb-[4rem]">
          {isEditingAdmin
            ? `Edit Administrator`
            : `Add New Administrator`}
        </h1>
        <form
          action=""
          method="POST"
          className=" flex flex-col justify-center gap-2 text-left lg:px-[1rem] 2xl:px-[3rem]"
          encType="multipart/form-data"
        >
          <h2 className="mb-2 text-[1.15rem] font-semibold lg:text-[1.35rem]">
            Personal Information
          </h2>
          {/* FIRST NAME */}
          <label
            htmlFor="first-name"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            First Name{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={adminFirstName}
            placeholder="Enter first name"
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            onChange={(e) =>
              setAdminFirstName(e.target.value)
            }
            required
          ></input>

          {/* LAST NAME */}
          <label
            htmlFor="last-name"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Last Name{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={adminLastName}
            placeholder="Enter last name"
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
            onChange={(e) =>
              setAdminLastName(e.target.value)
            }
          ></input>

          {/* CONTACT NUMBER */}
          <label
            htmlFor="contact-num"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Contact Number{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="contact-num"
            name="contact-num"
            value={adminContactNum}
            placeholder="Sample Format: 09123456789"
            // Add number format validation
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
            onChange={(e) =>
              setAdminContactNum(e.target.value)
            }
          ></input>

          {/* DISPLAY IMAGE */}
          <label
            htmlFor="admin-id"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Display Image{' '}
            <span className="text-brand-red">*</span>
          </label>
          <div className="image-upload flex items-center justify-between gap-4">
            <div
              className={`flex w-full items-center ${
                isDragging
                  ? 'border-2 border-dashed border-blue-500'
                  : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label
                htmlFor="dropzone-file"
                className="hover:bg-brand-input rounded-8 shadow-shadow-db flex h-fit w-full cursor-pointer flex-col items-center justify-center bg-white p-2 text-center"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <FiUploadCloud className="mb-[0.5rem] h-auto w-[30px] md:mb-[1rem] md:w-[50px]" />
                  <p className=" mb-1 text-[0.75rem] md:mb-2 xl:text-[0.85rem]">
                    <span className="font-semibold">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </p>
                  <p className="text-[0.75rem] xl:text-[0.75rem]">
                    PNG or JPG files only. (MAX. 5mb)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="admin-image"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) =>
                    handleAdminImageSrcChange(e)
                  }
                />
              </label>
            </div>

            {/* `${
                adminImageSrc
                  ? adminImageSrc
                  : adminImgFile
                    ? adminImgFile
                    : '../src/assets/sample_admin.webp'
              }` */}
            {adminImageSrc || adminImgFile ? (
              <img
                src={adminImageSrc || adminImgFile}
                alt="admin image"
                className="shadow-shadow-db  border-brand-blue  h-[120px] w-[120px] rounded-[80%] border-8 md:h-[150px] md:w-[150px]"
              />
            ) : (
              ''
            )}
          </div>

          {/* ROLE */}
          <label
            htmlFor="admin-role"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Role <span className="text-brand-red">*</span>
          </label>
          <SelectAdminRoleBtn />

          {/* ACCOUNT DETAILS */}

          <h2 className="mb-2 mt-[3rem] text-[1.15rem] font-semibold lg:text-[1.35rem]">
            Account Details
          </h2>

          {/* UST COLLEGE EMAIL */}
          <label
            htmlFor="ust-email"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            UST College Email{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            disabled={isEditingAdmin}
            id="ust-email"
            name="ust-email"
            value={adminEmail}
            placeholder="Enter UST College Email"
            className={`rounded-8 shadow-shadow-db p-2 ${
              isEmailInvalid &&
              'border-brand-invalid border-4'
            } ${isEditingAdmin ? 'opacity-70' : ''}`}
            required
            onChange={(e) =>
              setAdminEmail(e.target.value.toLowerCase())
            }
          ></input>
          <div className="password-reqs mb-2 flex flex-col justify-center gap-0">
            <div
              className={`spec-chars flex flex-row items-center gap-1 ${
                isEmailInvalid != null &&
                adminEmail.includes('@ust.edu.ph')
                  ? 'text-brand-green'
                  : 'opacity-50'
              }`}
            >
              <FaCheck />
              <p>
                Must be your UST College email (@ust.edu.ph)
              </p>
            </div>
          </div>

          {/* PASSWORD */}
          <label
            htmlFor="password"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            {isEditingAdmin
              ? 'Update Password '
              : 'Password '}
            <span className="text-brand-red">*</span>
          </label>
          <div
            className={`rounded-8 shadow-shadow-db flex flex-row items-center justify-between gap-2 bg-white p-2 ${
              isPasswordInvalid &&
              adminPassword.length > 1 &&
              'border-brand-invalid border-4'
            }`}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={adminPassword}
              placeholder="Enter password"
              className="w-full"
              required
              onChange={(e) =>
                setAdminPassword(e.target.value)
              }
            ></input>
            <FaEye
              className={`h-auto w-[20px] ${
                showPassword && 'fill-brand-blue'
              }`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="password-reqs mb-[2rem] flex flex-col justify-center gap-0">
            <div
              className={`chars flex flex-row items-center gap-1 ${
                adminPassword.length >= 8
                  ? 'text-brand-green'
                  : 'opacity-50'
              }`}
            >
              <FaCheck />
              <p>Must have at least 8 characters</p>
            </div>
            <div
              className={`spec-chars flex flex-row items-center gap-1 ${
                isPasswordInvalid === false &&
                isPasswordInvalid != null &&
                adminPassword.length > 0
                  ? 'text-brand-green'
                  : 'opacity-50'
              }`}
            >
              <FaCheck />
              <p>
                Must have contain a number and a special
                character
              </p>
            </div>
          </div>
          {isEditingAdmin &&
            userInfo.role == 'Super Admin' &&
            userInfo.id != currentDocId && (
              <AssignSuperAdminBtn />
            )}
          {isEditingAdmin ? (
            <EditAdminModalBtn />
          ) : (
            <AddAdminModalBtn />
          )}
        </form>
      </div>
    </div>
  );
}

export default AdminModal;
