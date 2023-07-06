import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import bootstrapImage from "../../assets/img/angular.jpg";

// components

import TableDropdown from "../../components/Dropdowns/TableDropdown.js";
import Delete from "../Dashboard/Common/Delete.js";

export default function CardTable({ color, display, setDisplay }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                User Table
              </h3>
            </div>
            <Link
              to="/admin/user/add"
              className="px-4 py-2 text-white bg-lightBlue-900 "
            >
              Add
            </Link>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Username
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Contact Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Image
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Password
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <img
                    src={bootstrapImage}
                    className="w-12 h-12 bg-white border rounded-full"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Argon Design System
                  </span>
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  $2,500 USD
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i className="mr-2 text-orange-500 fas fa-circle"></i> pending
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex">
                    <img
                      src={
                        require("../../assets/img/team-1-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-2-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-3-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-4-470x470.png").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                        <div
                          style={{ width: "60%" }}
                          className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex justify-center">
                    <Link to="/admin/user/view">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-eye"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#00abfb"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                      </svg>
                    </Link>
                    <Link to="/admin/user/add">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                      </svg>
                    </Link>
                    <button type="button" onClick={() => setShowModal(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  </div>
                </td>
                {/* <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <TableDropdown />
                </td> */}
              </tr>
              <tr>
                <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <img
                    src={require("../../assets/img/angular.jpg").default}
                    className="w-12 h-12 bg-white border rounded-full"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  $1,800 USD
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i className="mr-2 fas fa-circle text-emerald-500"></i>{" "}
                  completed
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex">
                    <img
                      src={
                        require("../../assets/img/team-1-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-2-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-3-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-4-470x470.png").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden text-xs rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex justify-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-eye"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00abfb"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </div>
                </td>
                {/* <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <TableDropdown />
                </td> */}
              </tr>
              <tr>
                <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <img
                    src={require("../../assets/img/sketch.jpg").default}
                    className="w-12 h-12 bg-white border rounded-full"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  $3,150 USD
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i className="mr-2 text-red-500 fas fa-circle"></i> delayed
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex">
                    <img
                      src={
                        require("../../assets/img/team-1-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-2-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-3-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-4-470x470.png").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">73%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                        <div
                          style={{ width: "73%" }}
                          className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex justify-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-eye"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00abfb"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </div>
                </td>
                {/* <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <TableDropdown />
                </td> */}
              </tr>
              <tr>
                <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <img
                    src={require("../../assets/img/react.jpg").default}
                    className="w-12 h-12 bg-white border rounded-full"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  $4,400 USD
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i className="mr-2 text-teal-500 fas fa-circle"></i> on
                  schedule
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex">
                    <img
                      src={
                        require("../../assets/img/team-1-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-2-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-3-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-4-470x470.png").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">90%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden text-xs bg-teal-200 rounded">
                        <div
                          style={{ width: "90%" }}
                          className="flex flex-col justify-center text-center text-white bg-teal-500 shadow-none whitespace-nowrap"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex justify-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-eye"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00abfb"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </div>
                </td>
                {/* <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <TableDropdown />
                </td> */}
              </tr>
              <tr>
                <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <img
                    src={require("../../assets/img/vue.jpg").default}
                    className="w-12 h-12 bg-white border rounded-full"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  $2,200 USD
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i className="mr-2 fas fa-circle text-emerald-500"></i>{" "}
                  completed
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex">
                    <img
                      src={
                        require("../../assets/img/team-1-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-2-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-3-800x800.jpg").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                    <img
                      src={
                        require("../../assets/img/team-4-470x470.png").default
                      }
                      alt="..."
                      className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                    ></img>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden text-xs rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <div className="flex justify-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-eye"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00abfb"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </div>
                </td>
                {/* <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <TableDropdown />
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
        {/*    <Delete /> */}

        {showModal ? (
          <>
            <div className="absolute z-50 flex justify-center w-full overflow-x-hidden overflow-y-auto outline-none left-1/2 top-2 focus:outline-none">
              <div className="w-1/2">
                {/*content*/}
                <div className="relative flex flex-col w-full px-4 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative flex justify-center p-6">
                    <p className="my-4 text-lg leading-relaxed text-slate-500">
                      Are you sure to delete?
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Yes
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-30 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
      {/*  */}
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
