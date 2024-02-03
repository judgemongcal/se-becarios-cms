import { FiUploadCloud } from 'react-icons/fi';
import {
  AddAdminModalBtn,
  RemoveAdminModalBtn,
  SelectAdminRoleBtn,
} from '../global/Button';

import { useAdminContext } from '../../hooks/useAdminContext';

function AdminModal() {
  const {
    setAdminFirstName,
    setAdminLastName,
    setAdminContactNum,
    setAdminImageSrc,
    setAdminRole,
    setAdminEmail,
    setAdminPassword,
  } = useAdminContext();

  return (
    <div className="modal-bg bg-brand-light md:bg-modal-bg fixed top-0 z-[1000] flex h-[100%] w-[100%] items-start justify-center overflow-scroll">
      <div className="modal-container md:bg-brand-light rounded-10 mx-auto flex w-[100%] flex-col justify-center px-[2rem]  py-[2.25rem] text-center md:my-[3rem]  md:w-[50%] xl:w-[50%] 2xl:w-[700px]">
        <h1 className="mb-[3rem] text-[1.25rem] font-semibold md:text-[1.5rem] lg:mb-[4rem]">
          Add New Administrator
        </h1>
        <form
          action=""
          className=" flex flex-col justify-center gap-2 text-left lg:px-[1rem] 2xl:px-[3rem]"
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
            <div className="flex w-full items-center">
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
                  className="hidden"
                  accept="image/*"
                  onChange={(e) =>
                    setAdminImageSrc(e.target.value)
                  }
                />
              </label>
            </div>
            <img
              src="./src/assets/sample_admin.png"
              alt="admin image"
              className="shadow-shadow-db  border-brand-yellow h-[120px] w-auto rounded-[100px] border-4 md:h-36"
            />
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
            id="ust-email"
            name="ust-email"
            placeholder="Enter UST College Email"
            className="rounded-8 shadow-shadow-db mb-4 p-2"
            required
            onChange={(e) => setAdminEmail(e.target.value)}
          ></input>

          {/* PASSWORD */}
          <label
            htmlFor="password"
            aria-required
            className="text-[1rem] font-normal lg:text-[1.15rem]"
          >
            Password{' '}
            <span className="text-brand-red">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="rounded-8 shadow-shadow-db mb-[3rem] p-2"
            required
            onChange={(e) =>
              setAdminPassword(e.target.value)
            }
          ></input>

          <AddAdminModalBtn />
        </form>
      </div>
    </div>
  );
}

export default AdminModal;
