const TopBar = () => {
    return (
      <header className="bg-white text-black shadow-md p-4 bg-opacity-60">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img src="/models/logo.jpeg" alt="Logo" className="h-10 w-10" />
            <h1 className="text-xl md:text-2xl font-semibold text-slate-200">MealMap</h1>
          </div>
  
          {/* Navigation Menu */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <li>
                <a href="/" className="hover:text-gray-200 block py-1 md:py-0">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-200 block py-1 md:py-0">About</a>
              </li>
              <li>
                <a href="/menu" className="hover:text-gray-200 block py-1 md:py-0">Menu</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200 block py-1 md:py-0">Contact</a>
              </li>
            </ul>
          </nav>
  
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded w-full md:w-auto">
              Sign In
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded w-full md:w-auto">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default TopBar;
  