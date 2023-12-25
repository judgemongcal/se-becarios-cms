function NavBar() {
  return (
    <div className="bg-brand-black flex flex-col items-center justify-evenly gap-[1rem] text-white md:w-[17.5rem]">
      <img
        src="./src/assets/org_logo.png"
        alt=""
        className="mb-10 mt-[80px] w-[50%]"
      />
      <div className="user-details"></div>
      <div className="dashboard">
        <button>Dashboard</button>
      </div>
      <div className="manage-content">
        <button>Manage Content</button>
      </div>
      <div className="post-archives">
        <button>Post Archives</button>
      </div>
      <div className="settings">
        <button>Settings</button>
      </div>
      <div className="sign-out">
        <button>Sign Out</button>
      </div>
    </div>
  );
}

export default NavBar;
