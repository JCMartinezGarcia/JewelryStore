import React, { useEffect, useState } from "react";
import Main from "../views/Main";
import Users from "../views/Users/Users";
import UsersRegister from "../views/Users/UsersRegister";
import UsersEdit from "../views/Users/UsersEdit";
import UsersDetails from "../views/Users/UsersDetails";
import NavigationBar from "./NavigationBar";

const MasterLayOut = ({ view }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    setScreen(false);
    if (view != 'Users') { setScreen(true); }
  }, [view]);

  let viewComponent;
  switch (view) {
    case 'Main':
      viewComponent = <Main />;
      break;
    case 'Users':
      viewComponent = <Users />
      break;
    case 'Users Register':
      viewComponent = <UsersRegister />
      break;
    case 'Users Edit':
      viewComponent = <UsersEdit />
      break;
    case 'Users Details':
      viewComponent = <UsersDetails />
      break;
    default:
      break;
  }
  return (
    <div className={(screen) ? 'flex h-screen' : 'flex'}>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-gray-800 text-white w-64 transition-transform duration-300 lg:translate-x-0 lg:static z-50`}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-700">Admin Panel</div>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="/usuarios" className="hover:bg-gray-700 p-2 rounded">Users</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Logout</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="bg-white shadow-md">
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
          <NavigationBar />
          {/* <h1 className="text-xl font-bold">Administrador</h1> */}
        </header>
        <main className="flex-1 p-6">
          {viewComponent}
        </main>
      </div>

      {/* Overlay modal para móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MasterLayOut;
