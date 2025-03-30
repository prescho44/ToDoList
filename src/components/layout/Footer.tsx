import { Link } from "react-router";
import useAuthSession from "../../hooks/useAuthSession";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const session = useAuthSession();

  return (
    <div className="z-0 grid items-center justify-center text-center text-white sm:flex sm:h-31 sm:flex-col lg:h-46 bg-violet-100 dark:bg-gray-800">
      <nav
        aria-label="Global"
        className="grid items-center justify-center p-6 sm:flex sm:justify-between lg:px-8"
      >
        <div className="flex justify-center pb-5 sm:pr-6 sm:pb-0">
          <span className="sr-only">Your Company</span>
          <Link to="/" className="relative">
            <span className="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="grid justify-evenly sm:flex">
          <div className="grid gap-y-6 sm:flex sm:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-base font-semibold text-gray-900 hover:text-indigo-600 sm:text-sm dark:text-gray-100 dark:hover:text-indigo-400"
              >
                <span className="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 justify-center gap-x-6">
            {!session && (
              <div className="grid gap-6 pt-6 sm:flex sm:pt-0 sm:pl-10">
                <Link
                  to="/sign-in"
                  className="relative text-base font-semibold text-gray-900 hover:text-indigo-600 sm:text-sm dark:text-gray-100 dark:hover:text-indigo-400"
                >
                  <span className="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="relative text-base font-semibold text-gray-900 hover:text-indigo-600 sm:text-sm dark:text-gray-100 dark:hover:text-indigo-400"
                >
                  <span className="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <footer className="h-20 text-black dark:text-white">
        &copy; {new Date().getFullYear()} Your Company
      </footer>
    </div>
  );
};

export default Footer;
