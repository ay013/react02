import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="bg-blue-700 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">

                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="h-8 me-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    Books.bite
                                </span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Resources
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline">
                                          Books.bite
                                        </Link>
                                    </li>
                                 
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Follow us
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/Skg58" className="hover:underline">
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/discord" className="hover:underline">
                                            Discord
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Legal
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to="/privacy" className="hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/terms" className="hover:underline">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2025{" "}
                            <Link to="/" className="hover:underline">
                                Books.bite™
                            </Link>
                            . All Rights Reserved.
                        </span>

                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <Link
                                to="/facebook"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                {/* Facebook Icon */}
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 8 19"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </Link>

                            <Link
                                to="/discord"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                {/* Discord Icon */}
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 21 16"
                                >
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3..." />
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </Link>

                            <Link
                                to="/twitter"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                {/* Twitter Icon */}
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 17"
                                >
                                    <path d="M20 1.892a8.178 8.178 0 0 1-2.355..." />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </Link>

                            <Link
                                to="/github"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                {/* GitHub Icon */}
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65..." />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </Link>

                            <Link
                                to="/dribbble"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                {/* Dribbble Icon */}
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0a10 10 0 1 0 10 10..." />
                                </svg>
                                <span className="sr-only">Dribbble account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
