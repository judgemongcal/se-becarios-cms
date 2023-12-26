import { FaXmark } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';

function AdminListItem() {
  return (
    <div className="bg-brand-blue rounded-8 flex flex-row items-center justify-between gap-2 p-2">
      <div className="admin-name ml-2">
        <p>John Doe</p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        <div className="bg-brand-input rounded-8 shadow-sm-btn items-center p-3">
          <LuPencil className="fill-brand-input h-[16px] w-[16px] " />
        </div>

        <div className="bg-brand-red rounded-8 shadow-sm-btn  items-center p-2">
          <FaXmark className="fill-brand-input h-auto w-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default AdminListItem;
