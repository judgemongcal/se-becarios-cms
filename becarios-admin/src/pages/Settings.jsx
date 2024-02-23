import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import AdminList from '../components/settings/AdminList';
import SuperAdminList from '../components/settings/SuperAdminList';
import AdminModal from '../components/settings/AdminModal';
import { useSettingsContext } from '../hooks/useSettingsContext';
import {
  AddAdminModal,
  AssignSuperAdminModal,
  RemoveAdminModal,
  SignOutModal,
} from '../components/global/Modal';
import {
  AddAdminSuccessPopup,
  AssignSuperAdminSuccessPopup,
  RemoveAdminSuccessPopup,
} from '../components/global/Popup';
import { useSignOutContext } from '../hooks/useSignOutContext';
import { useEffect } from 'react';
import Spinner from '../components/global/Spinner';
import Sample from './Sample';

function Settings() {
  const {
    isAddAdminBtnClicked,
    isRemoveAdminBtnClicked,
    isRemoveSuccessful,
    isAddAdminClicked,
    isAddAdminSuccessful,
    setIsAddAdminSuccessful,
    setIsRemoveSuccessful,
    isAssignBtnClicked,
    isAssignSuccessful,
    setIsAssignSuccessful,
    isLoading,
  } = useSettingsContext();

  const { isSignOutClicked } = useSignOutContext();

  useEffect(() => {
    if (isAddAdminSuccessful) {
      const timer = setTimeout(
        () =>
          setIsAddAdminSuccessful(!isAddAdminSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isAddAdminSuccessful, setIsAddAdminSuccessful]);

  useEffect(() => {
    if (isRemoveSuccessful) {
      const timer = setTimeout(
        () => setIsRemoveSuccessful(!isRemoveSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isRemoveSuccessful, setIsRemoveSuccessful]);

  useEffect(() => {
    if (isAssignSuccessful) {
      const timer = setTimeout(
        () => setIsAssignSuccessful(!isAssignSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isAssignSuccessful, setIsAssignSuccessful]);

  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem]">
        <PageTitle title="Settings" />

        <div className="heading">
          {isAddAdminSuccessful && <AddAdminSuccessPopup />}
          {isRemoveSuccessful && (
            <RemoveAdminSuccessPopup />
          )}
          {isAssignSuccessful && (
            <AssignSuperAdminSuccessPopup />
          )}

          <h2 className="pb-2 text-left text-[1.25rem] font-medium md:text-[1.5rem]">
            Manage Accounts
          </h2>
          <div className="rounded-8 bg-brand-gray w-[100%] py-[0.05rem] opacity-[25%]"></div>
        </div>

        <div className="content mx-auto flex w-[95%] flex-col justify-around gap-[4rem] xl:flex-row">
          <SuperAdminList />
          <AdminList />
        </div>
      </div>
      {isAddAdminBtnClicked && <AdminModal />}
      {isAddAdminClicked && <AddAdminModal />}
      {isRemoveAdminBtnClicked && <RemoveAdminModal />}
      {isAssignBtnClicked && <AssignSuperAdminModal />}
      {isLoading ? <Sample /> : ''}
      {isSignOutClicked && <SignOutModal />}
    </div>
  );
}

export default Settings;
