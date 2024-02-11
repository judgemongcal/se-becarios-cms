import { LuPencil } from 'react-icons/lu';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { EditItemBtn } from '../global/Button';
import { useUserInfoContext } from '../../hooks/useUserInfoContext';

export function SuperAdminListItem({ admin }) {
  const { isSAGearClicked } = useSettingsContext();
  const { userInfo } = useUserInfoContext();
  const { firstName, lastName } = admin.data;
  const id = admin.id;

  return (
    <div
      key={id}
      className="bg-brand-yellow rounded-8 shadow-shadow-db flex w-[100%] flex-row items-center justify-between gap-2 p-2"
    >
      <div className="admin-name ml-4 py-2 font-medium">
        <p>
          {' '}
          {firstName} {lastName}{' '}
        </p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        {isSAGearClicked && (
          <>
            <EditItemBtn id={id} />
          </>
        )}
      </div>
    </div>
  );
}
