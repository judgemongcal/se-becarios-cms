function Button({ action }) {
  return (
    <button className=" bg-gradient color shadow-shadow-db transition-scale rounded-8 w-[100%] py-4 text-[1.15rem] font-bold text-[#FFFFFF] duration-100 ease-in hover:scale-105">
      {action}
    </button>
  );
}

export default Button;
