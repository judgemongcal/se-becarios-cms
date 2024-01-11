import { AdminSettingsBtn } from '../global/Button';
import { SuperAdminListItem } from './SuperAdminListItem';
function SuperAdminList() {
  return (
    <div className="flex flex-col gap-2  sm:min-w-[100%] md:max-w-[100%] lg:min-w-[50%] lg:max-w-[100%]">
      <div className="mb-[1rem] flex flex-row items-center justify-between">
        <h2 className=" text-left text-[1.10rem] font-medium md:text-[1.5rem]">
          Super Administrator
        </h2>
        <AdminSettingsBtn />
      </div>
      <div className="items flex flex-col gap-4">
        <SuperAdminListItem />
      </div>
    </div>
  );
}

export default SuperAdminList;