import { AdminSettingsBtn } from '../global/Button';
import { SuperAdminListItem } from './SuperAdminListItem';
function SuperAdminList() {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-[1rem] flex flex-row items-center justify-between">
        <h2 className=" text-left text-[1.10rem] font-medium md:text-[1.5rem]">
          Super Administrator
        </h2>
        <AdminSettingsBtn />
      </div>
      <SuperAdminListItem />
    </div>
  );
}

export default SuperAdminList;
