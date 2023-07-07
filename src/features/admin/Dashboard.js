import React from "react";

// components
import Sidebar from "../../components/Sidebar/Sidebar.js";
import PreviewPage from "../../pages/PreviewPage.js";

export default function Dashboard() {
  return (
    <>
    <Sidebar />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <PreviewPage/>
        </div>
        </div>
       
    </>
  );
}
