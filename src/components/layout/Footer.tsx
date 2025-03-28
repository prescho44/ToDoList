import { Link } from "react-router";
import useAuthSession from "../../hooks/useAuthSession";
import LogoutButton from "../auth/LogoutButton";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const session = useAuthSession();

  return (
    <div className="z-0 flex flex-col items-center justify-center bg-gray-800 text-center text-white sm:h-31 lg:h-46">
      <nav
        aria-label="Global"
        className="grid items-center justify-between p-6 sm:flex lg:px-8"
      >
        <div className="flex justify-center pb-5 sm:pb-0 sm:pr-6">
          <span className="sr-only">Your Company</span>
          <Link to="/">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="grid sm:flex"></div>
        <div className="grid gap-y-3 sm:flex sm:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end gap-x-6">
          {!session ? (
            <>
              <Link
                to="/sign-in"
                className="text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-400"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-400"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex pt-2 sm:pt-0 sm:pl-6">
              <LogoutButton />
            </div>
          )}
        </div>
      </nav>
      <footer className="h-20">&copy; {new Date().getFullYear()} Your Company</footer>
    </div>
  );
};

export default Footer;
