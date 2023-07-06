/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
            to="/"
          >
            Service Application
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/auth/login"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-blueGray-400"></i>{" "}
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/auth/register"
                >
                  <i className="mr-2 text-sm fas fa-clipboard-list text-blueGray-300"></i>{" "}
                  Register
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              User Datas
            </h6>
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/admin/user"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-blueGray-400"></i>{" "}
                  User
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link
                  className="block text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/admin/category"
                >
                  <i class="fa-solid fa-layer-group mr-2 text-sm text-blueGray-400"></i>
                  Category
                </Link>
              </li>

            </ul>

            <ul className="flex flex-col pt-2 list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link
                  className="block text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/admin/service"
                >
                  <i class="fa-solid fa-square-poll-horizontal mr-2 text-sm text-blueGray-400"></i>
                  Services
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col pt-2 list-none md:flex-col md:min-w-full md:mb-4">
              <li className="items-center">
                <Link
                  className="block text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/admin/servicefeature"
                >
                  <i class="fa-solid fa-list mr-2 text-sm text-blueGray-400"></i>
                  Service Feature
                </Link>
              </li>
            </ul>

           
          </div>
        </div>
      </nav>
    </>
  );
}
