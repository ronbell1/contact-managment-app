const Navbar = () => {
  return (
    <div className="my-4 flex h-[70px] items-center justify-center px-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-70 shadow-lg text-white">
      {/* App Logo and Title */}
      <div className="flex items-center gap-3">
        <img
          src="/firebase.svg"
          alt="Firebase Logo"
          className="h-10 w-10 animate-bounce"
        />
        <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md">
          Firebase Contact App
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
