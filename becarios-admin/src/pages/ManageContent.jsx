import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import ContentFilters from '../components/manage-content/ContentFilters';
import SearchField from '../components/global/SearchField';

function ManageContent() {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <PageTitle title="Manage Content" />
        <div className="content flex w-full flex-col justify-evenly gap-3 xl:flex-row">
          <SearchField />
          <ContentFilters />
        </div>
      </div>
    </div>
  );
}

export default ManageContent;
