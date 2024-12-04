import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { useUserContext } from "@/context/auth";

export default function SmallNavbar({ items }) {
  const { isAuthenticated, user, setIsAuthenticated } = useUserContext();
  const [openMenuId, setOpenMenuId] = useState(null);
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Toggle logic for submenus and third-level items
  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const toggleSubMenu = (id) => {
    setOpenSubMenuId((prevId) => (prevId === id ? null : id));
  };

  // Recursive function to render menu items with multiple levels
  const renderMenuItems = (menuItems, level = 0) => {
    return (
      <ul className={`pl-${level * 4} mt-2`}>
        {menuItems.map((item) => (
          <li key={item.id} className="relative">
            {/* If this item has subitems, create a dropdown */}
            {item.subItems ? (
              <>
                <button
                  className={`flex justify-between items-center w-full text-left py-3 px-4 -ml-1 ${
                    level === 0
                      ? "text-md font-medium hover:text-[#5b6cf2]"
                      : "text-md font-medium hover:text-[#5b6cf2]"
                  }`}
                  onClick={() => toggleMenu(item.id)}
                >
                  {item.name}
                  {openMenuId === item.id ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>

                {/* Render second-level subitems */}
                {openMenuId === item.id && item.subItems && (
                  <ul className="pl-4">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        {/* If this subitem has its own subitems, render recursively */}
                        {subItem.subItems ? (
                          <>
                            <button
                              className="flex justify-between items-center w-full text-left py-2 px-4 text-md font-medium"
                              onClick={() => toggleSubMenu(subItem.id)}
                            >
                              {subItem.name}
                              {openSubMenuId === subItem.id ? (
                                <FiChevronUp />
                              ) : (
                                <FiChevronDown />
                              )}
                            </button>

                            {/* Render third-level subitems */}
                            {openSubMenuId === subItem.id && subItem.subItems && (
                              <ul className="pl-4">
                                {subItem.subItems.map((thirdLevelSubItem) => (
                                  <li key={thirdLevelSubItem.id}>
                                    <Link href={thirdLevelSubItem.path}>
                                      <Button
                                        size="sm"
                                        variant="link"
                                        className="text-md font-medium hover:text-[#5b6cf2] transition-colors duration-300"
                                      >
                                        {thirdLevelSubItem.name}
                                      </Button>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link href={subItem.path}>
                            <Button
                              size="sm"
                              variant="link"
                              className="text-md font-medium hover:text-[#5b6cf2] transition-colors duration-300"
                            >
                              {subItem.name}
                            </Button>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <SheetClose asChild>
                <Link href={item.path}>
                  <Button
                    size="sm"
                    variant="link"
                    className="text-md font-medium hover:text-[#5b6cf2] transition-colors duration-300"
                  >
                    {item.name}
                  </Button>
                </Link>
              </SheetClose>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Sheet>
      {/* Trigger Button for Small Screens */}
      <SheetTrigger asChild className="grid lg:hidden">
        <Button variant="icon" className="py-3 p-2">
          <BiMenu className="text-2xl" />
        </Button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-4">
            <span className="font-semibold text-[#212630] sm:text-xl">
              Contently Writers
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Navigation Menu */}
        <nav>{renderMenuItems(items)}</nav>

        {/* User Authentication Section */}
        {isAuthenticated ? (
          <div className="grid gap-4 mt-6">
         <div className="text-sm text-gray-700">
  <button
    className="flex items-center space-x-2"
    onClick={() => setShowModal(true)} // Toggle state
  >
    <span>Welcome, {user.firstName}</span>
  </button>

  {showModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-4/5 max-w-sm">
        <h2 className="text-lg font-semibold mb-2">User Info</h2>
        <p className="text-gray-700">Name: {user.firstName}</p>
        <p className="text-gray-700">Email: {user.email}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShowModal(false)} // Close modal
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>

            <SheetClose asChild>
              <Button
                variant="outline"
                className="w-full hover:bg-[#5b6cf2] hover:text-white border-[#3c46d5]"
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsAuthenticated(false);
                }}
              >
                Logout
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="w-full hover:bg-[#5b6cf2] hover:text-white border-[#3c46d5]"
                >
                  Dashboard
                </Button>
              </Link>
            </SheetClose>
          </div>
        ) : (
          <div className="grid gap-4 mt-6">
            <SheetClose asChild>
              <Link href="/sign-up">
                <Button
                  variant="outline"
                  className="w-full hover:bg-[#5b6cf2] hover:text-white border-[#3c46d5]"
                >
                  Sign up
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="w-full hover:bg-[#5b6cf2] hover:text-white border-[#3c46d5]"
                >
                  Sign in
                </Button>
              </Link>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
