import { useAdminContext } from '../../hooks/useAdminContext';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';
import {
  RemoveAdminBtn,
  EditItemBtn,
} from '../global/Button';

function AdminListItem({ admin }) {
  const { isAGearClicked } = useSettingsContext();
  const { userInfo } = useUserInfoContext();
  const { firstName, lastName } = admin.data;
  const id = admin.id;

  const { setAdminFirstName, setAdminLastName } =
    useAdminContext();

  return (
    <div
      key={id}
      className={`bg-brand-blue rounded-8 shadow-shadow-db flex flex-row items-center justify-between gap-2 p-2 ${
        userInfo.id === id || userInfo.role == 'Super Admin'
          ? ''
          : 'opacity-60'
      }`}
    >
      <div className="admin-name ml-4 py-2 font-medium">
        <p>
          {firstName} {lastName}{' '}
        </p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        {isAGearClicked &&
          userInfo.firstName === firstName &&
          userInfo.lastName === lastName && (
            <>
              <EditItemBtn id={id} />
              <RemoveAdminBtn id={id} />{' '}
            </>
          )}
        {isAGearClicked &&
          userInfo.role == 'Super Admin' && (
            <>
              <EditItemBtn id={id} />
              <RemoveAdminBtn id={id} />{' '}
            </>
          )}
      </div>
    </div>
  );
}

export default AdminListItem;
