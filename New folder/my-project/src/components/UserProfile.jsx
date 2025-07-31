function UserProfile() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-white animate-fade-in">
      <img
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;