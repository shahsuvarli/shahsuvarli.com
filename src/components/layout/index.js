import React from "react";

function Layout({ children }) {
  return (
    <div className="text-gray-300 flex flex-col font-sans">{children}</div>
  );
}

export default Layout;
