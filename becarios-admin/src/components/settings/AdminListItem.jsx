import { FaXmark } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';

function AdminListItem() {
  return (
    <div className="bg-brand-blue rounded-8 shadow-shadow-db flex flex-row items-center justify-between gap-2 p-2">
      <div className="admin-name ml-4 font-medium">
        <p>John Doe</p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        <div className="bg-brand-light hover:bg-brand-black rounded-8 shadow-sm-btn items-center p-3 duration-300">
          <LuPencil className="fill-brand-input stroke-brand-black  h-[16px] w-[16px] " />
        </div>

        <div className="bg-brand-red hover:bg-brand-red-dark rounded-8 shadow-sm-btn  items-center p-2 duration-300">
          <FaXmark className="fill-brand-input h-auto w-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default AdminListItem;
