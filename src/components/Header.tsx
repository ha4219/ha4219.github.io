import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useMemo, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="header"
      className="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center" data-testid="logo">
          <StaticImage src="../images/logoB.png" alt="logo-image" className="sm:h-15 mr-3 h-10" />
          <span className="text-l self-center whitespace-nowrap font-semibold dark:text-white">
            jeongdongha.me
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            data-collapse-toggle="navbar-default"
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-default" hidden={!open ?? false}>
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <Link
                to="/about"
                activeClassName="bg-gray-100 dark:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:text-white md:bg-transparent md:text-blue-700"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                activeClassName="bg-gray-100 dark:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:text-white md:bg-transparent md:text-blue-700"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/posts/All"
                activeClassName="bg-gray-100 dark:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:text-white md:bg-transparent md:text-blue-700"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
