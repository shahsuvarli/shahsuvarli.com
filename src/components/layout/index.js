import React, { useState } from "react";
import menu from "../../utils/menu.json";
import Link from "next/link";

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-h-max-content overflow-auto text-gray-300 flex flex-col font-sans">
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-opacity-70 bg-gray-900 flex items-center justify-center ${
          showModal ? "flex" : "hidden"
        }`}
        onClick={closeModal}
      >
        <div className="p-6">
          <ul className="text-center">
            {menu.map((item) => (
              <li key={item.id} className="mb-4 text-3xl">
                <Link href={item.link} className="no-underline text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;
