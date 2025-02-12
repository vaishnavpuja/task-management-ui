import React from "react";

function Header() {
  return (
    <div className="bg-red-500 p-4">
      <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
        <nav>
        <a
  href="/"
  className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
>Task Management</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
