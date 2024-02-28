import { useEffect, useState } from 'react';
import {
  AdminSettingsBtn,
  SuperAdminSettingsBtn,
} from '../global/Button';
import { SuperAdminListItem } from './SuperAdminListItem';
import { fetchSuperAdmin } from '../../server/API/SettingsAPI';
import ListSpinner from '../global/ListSpinner';
function SuperAdminList() {
  const [superAdmin, setSuperAdmin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setSuperAdmin(await fetchSuperAdmin());
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2  sm:min-w-[100%] md:max-w-[100%] lg:min-w-[50%] lg:max-w-[100%]">
      <div className="mb-[1rem] flex flex-row items-center justify-between">
        <h2 className=" text-left text-[1.10rem] font-medium md:text-[1.5rem]">
          Super Administrator
        </h2>
        <SuperAdminSettingsBtn />
      </div>
      <div className="items flex flex-col gap-4">
        {superAdmin.length < 1 && <ListSpinner />}
        {superAdmin.map((admin) => (
          <SuperAdminListItem
            key={admin.id}
            admin={admin}
          />
        ))}
      </div>
    </div>
  );
}

export default SuperAdminList;
