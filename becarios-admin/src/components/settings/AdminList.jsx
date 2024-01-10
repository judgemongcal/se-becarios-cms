import { AdminSettingsBtn } from '../global/Button';
import AdminListItem from './AdminListItem';

function AdminList() {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-[1rem] flex flex-row items-center justify-between">
        <h2 className=" text-left text-[1.10rem] font-medium md:text-[1.5rem]">
          Administrator
        </h2>
        <AdminSettingsBtn />
      </div>

      <AdminListItem />
      <AdminListItem />
      <AdminListItem />
    </div>
  );
}

export default AdminList;
