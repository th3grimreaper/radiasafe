const MyButton = ({ name, type }) => {
  const handleClick = () => {
    alert("Under construction!");
  };

  return (
    <button
      className="border hover:bg-gray-100 border-gray-900 border-solid hover:text-gray-900 bg-gray-900 text-gray-100 pt-2 pb-2 pr-7 pl-7 rounded-md"
      type={type}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default MyButton;
