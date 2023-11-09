import logo from "../assets/img/logo-w.png";
import "../assets/css/styles.css";

function NavBar() {
  function handleRefreshClick() {
    window.location.reload();
  }

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen flex items-center justify-between mx-auto py-8 px-8 ">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3 logo" alt="Recipe Logo" />
          <span className="text-3xl font-semibold whitespace-nowrap text-white ml-4">
            Recipe Saver
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/recipes/add"
                className="flex flex-row text-xl text-white p-0 hover:text-blue-700"
                aria-current="page"
              >
                Add New Recipe
              </a>
            </li>

            <li>
              <button
                onClick={handleRefreshClick}
                type="button"
                className="block text-xl p-0 hover:text-blue-700 text-white "
              >
                Refresh Page
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
