import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex items-center justify-between px-5 h-14 bg-white border border-gray-100 rounded-xl shadow-sm">
      <h1 className="text-[17px] font-bold tracking-tight text-gray-900">
        Project
      </h1>
      <ul className="flex items-center gap-1 list-none">
        <li>
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3.5 py-1.5 rounded-lg transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3.5 py-1.5 rounded-lg transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3.5 py-1.5 rounded-lg transition-colors"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
