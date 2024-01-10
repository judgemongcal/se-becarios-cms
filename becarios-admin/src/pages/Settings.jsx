import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';

function Settings() {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[3rem]">
        <PageTitle title="Settings" />
        <div className="lists flex flex-col gap-[2rem] xl:flex-row"></div>
      </div>
    </div>
  );
}

export default Settings;
