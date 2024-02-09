import { useAdminContext } from '../../hooks/useAdminContext';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import {
  RemoveAdminBtn,
  EditItemBtn,
} from '../global/Button';

function AdminListItem({ admin }) {
  const { isAGearClicked } = useSettingsContext();
  const { firstName, lastName } = admin.data;
  const id = admin.id;

  return (
    <div
      key={id}
      className="bg-brand-blue rounded-8 shadow-shadow-db flex flex-row items-center justify-between gap-2 p-2"
    >
      <div className="admin-name ml-4 py-2 font-medium">
        <p>
          {firstName} {lastName}{' '}
        </p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        {isAGearClicked && (
          <>
            <EditItemBtn id={id} />
            <RemoveAdminBtn />{' '}
          </>
        )}
      </div>
    </div>
  );
}

export default AdminListItem;
