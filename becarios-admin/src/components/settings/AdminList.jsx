import { useEffect, useState } from 'react';

import { AdminSettingsBtn } from '../global/Button';
import AdminListItem from './AdminListItem';
import { fetchAllAdmins } from '../../server/API/SettingsAPI';

import ListSpinner from '../global/ListSpinner';

function AdminList() {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAdminList(await fetchAllAdmins());
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-2  sm:min-w-[100%] md:max-w-[100%] lg:min-w-[50%] lg:max-w-[100%]">
      <div className="mb-[1rem] flex flex-row items-center justify-between">
        <h2 className=" text-left text-[1.10rem] font-medium md:text-[1.5rem]">
          Administrator
        </h2>
        <AdminSettingsBtn />
      </div>
      <div className="items flex flex-col gap-4">
        {/* <AdminListItem />
        <AdminListItem />
        <AdminListItem /> */}
        {adminList.length < 1 && <ListSpinner />}
        {adminList.map((admin) => (
          <AdminListItem key={admin.id} admin={admin} />
        ))}
      </div>
    </div>
  );
}

export default AdminList;
