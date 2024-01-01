import {
  DeleteAdminBtn,
  EditItemBtn,
} from '../global/Button';

function AdminListItem() {
  return (
    <div className="bg-brand-blue rounded-8 shadow-shadow-db flex flex-row items-center justify-between gap-2 p-2">
      <div className="admin-name ml-4 font-medium">
        <p>John Doe</p>
      </div>
      <div className="admin-btns flex flex-row gap-2">
        <EditItemBtn />
        <DeleteAdminBtn />
      </div>
    </div>
  );
}

export default AdminListItem;
