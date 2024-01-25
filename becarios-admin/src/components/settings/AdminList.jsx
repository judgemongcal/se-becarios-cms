import { useSettingsContext } from '../../hooks/useSettingsContext';
import { AdminSettingsBtn } from '../global/Button';
import AdminListItem from './AdminListItem';

function AdminList() {
  const { isAGearClicked, setIsAGearClicked } =
    useSettingsContext();

  return (
    <div className="flex flex-col gap-2  sm:min-w-[100%] md:max-w-[100%] lg:min-w-[50%] lg:max-w-[100%]">
      <div className="mb-[1rem] flex flex-row items-center justify-between">
        <h2 className=" text-left text-[1.10rem] font-medium md:text-[1.5rem]">
          Administrator
        </h2>
        <AdminSettingsBtn
          isAGearClicked={isAGearClicked}
          setIsAGearClicked={setIsAGearClicked}
        />
      </div>
      <div className="items flex flex-col gap-4">
        <AdminListItem isAGearClicked={isAGearClicked} />
        <AdminListItem isAGearClicked={isAGearClicked} />
        <AdminListItem isAGearClicked={isAGearClicked} />
      </div>
    </div>
  );
}

export default AdminList;
