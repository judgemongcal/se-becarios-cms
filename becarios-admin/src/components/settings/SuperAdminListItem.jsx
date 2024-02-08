import { LuPencil } from 'react-icons/lu';
import { useSettingsContext } from '../../hooks/useSettingsContext';

export function SuperAdminListItem({ admin }) {
  const { isSAGearClicked } = useSettingsContext();
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
        <div
          className={`hover:bg-brand-black bg-brand-light rounded-8 shadow-sm-btn items-center p-3 duration-300  ${
            isSAGearClicked ? '' : 'hidden'
          }`}
        >
          <LuPencil
            className={`fill-brand-input h-[16px] w-[16px]`}
          />
        </div>
      </div>
    </div>
  );
}
