import React, { useEffect, useState } from "react";
import Main from "../views/Main";
import Users from "../views/Users/Users";
import UsersRegister from "../views/Users/UsersRegister";
import UsersEdit from "../views/Users/UsersEdit";
import UsersDetails from "../views/Users/UsersDetails";
import Clients from "../views/Clients/Clients";
import ClientsRegister from "../views/Clients/ClientsRegister";
import ClientsUpdate from "../views/Clients/ClientsUpdate";
import ClientsDetails from "../views/Clients/ClientsDetails";
import MetalsList from "../views/Metals/MetalsList";
import MetalsRegister from "../views/Metals/MetalsRegister";
import MetalsUpdate from "../views/Metals/MetalsUpdate";
import ProductLines from "../views/Lines/ProductLines";
import ProductLinesRegister from "../views/Lines/ProductLinesRegister";
import ProductLinesUpdate from "../views/Lines/ProductLinesUpdate";
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
    case 'Clients':
      viewComponent = <Clients />
      break;
    case 'Clients Register':
      viewComponent = <ClientsRegister />
      break;
    case 'Clients Update':
      viewComponent = <ClientsUpdate />
      break;
    case 'Clients Details':
      viewComponent = <ClientsDetails />
      break;
    case 'Metals':
      viewComponent = <MetalsList />
      break;
    case 'Metals Register':
      viewComponent = <MetalsRegister />
      break;
    case 'Metals Update':
      viewComponent = <MetalsUpdate />
      break;
    case 'Product Lines':
      viewComponent = <ProductLines />
      break;
    case 'Product Lines Update':
      viewComponent = <ProductLinesUpdate />
      break;
    case 'Product Lines Register':
      viewComponent = <ProductLinesRegister />
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
          <a href="/usuarios" className="hover:bg-gray-700 p-2 rounded">Usuarios</a>
          <a href="/metales" className="hover:bg-gray-700 p-2 rounded">Metales</a>
          <a href="/Lineas" className="hover:bg-gray-700 p-2 rounded">Lineas de producto</a>
          <a href="/Clientes" className="hover:bg-gray-700 p-2 rounded">Clientes</a>
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
