import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// components

import AdminNavbar from "../Navbars/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar.js";
import FooterAdmin from "../Footers/FooterAdmin";

import Dashboard from "../../features/admin/Dashboard";
import FormPage from "../../pages/FormPage";
import PreviewPage from "../../pages/PreviewPage";
// views

export default function Admin() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <FormPage />

        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          <PreviewPage />
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />

            <Route path="/admin/form" element={<FormPage />} />
            <Route path="/admin/preview" element={<PreviewPage />} />
          </Routes>

          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
