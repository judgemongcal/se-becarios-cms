import { LuPencil } from 'react-icons/lu';

export function SuperAdminListItem() {
  return (
    <div className="bg-brand-yellow rounded-8 shadow-shadow-db flex flex-row items-center justify-between gap-2 p-2">
      <div className="admin-name ml-4 font-medium">
        <p>John Doe</p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        <div className="hover:bg-brand-black bg-brand-light rounded-8 shadow-sm-btn items-center p-3 duration-300">
          <LuPencil className="fill-brand-input h-[16px] w-[16px] " />
        </div>
      </div>
    </div>
  );
}
