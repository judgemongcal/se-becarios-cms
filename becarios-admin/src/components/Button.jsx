function Button({ action }) {
  return (
    <button className=" w-[100%] rounded-md bg-blue-300 py-4 text-[1.15rem] font-bold">
      {action}
    </button>
  );
}

export default Button;
