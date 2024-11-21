import React, { useState } from "react";
import Link from "next/link";
import Cookies from 'js-cookie';
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/auth";

export default function LargeNavbar({ items, user }) {
  const { isLoading, isAuthenticated, setIsAuthenticated } = useUserContext();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false); // Added state

  // Handle first-level dropdown
  const handleMouseEnter = (id) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    }
  };

  // Handle second-level submenu
  const handleSubMenuMouseEnter = (id) => {
    setOpenSubDropdown(id);
  };

  const handleSubMenuMouseLeave = () => {
    setOpenSubDropdown(null);
  };

  const handleLogout = () => {
    try {
      Cookies.remove("token", { path: "/", domain: ".contentlywriters.com" });
      document.cookie = "token=; Max-Age=0; path=/; domain=contentlywriters.com; Secure";
      localStorage.removeItem("token");
      sessionStorage.removeItem("orderData");
      sessionStorage.removeItem("redirectURL");
      setIsAuthenticated(false);
    } catch (error) {
      alert("Try again later");
    }
  };

  return (
    <>
      <div className="hidden lg:flex justify-center items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <Link href={item.path} className="px-2">
              <Button
                size="sm"
                variant="link"
                className="text-lg font-normal hover:text-[#5b6cf2] transition-colors ease-in-out duration-300"
              >
                {item.name}
              </Button>
            </Link>

            {/* Dropdown for Service or Subject */}
            {item.subItems && openDropdown === item.id && (
              <div className="absolute top-full left-0 pb-1 bg-white shadow-md rounded-lg w-60 border border-gray-300 no-underline">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="relative"
                    onMouseEnter={() => handleSubMenuMouseEnter(subItem.id)}
                    onMouseLeave={handleSubMenuMouseLeave}
                  >
                    <Link href={subItem.path}>
                      <Button
                        size="sm"
                        variant="link"
                        className="text-md font-normal px-5 py-3 hover:bg-gray-100 hover:text-[#5b6cf2] block text-left w-full"
                        style={{ textDecoration: "none" }}
                      >
                        {subItem.name}
                      </Button>
                    </Link>

                    {/* Second-level submenu */}
                    {subItem.subItems && openSubDropdown === subItem.id && (
                      <div className="absolute top-0 left-full mt-2 pb-2 bg-white shadow-md rounded-lg w-60 border border-gray-300">
                        {subItem.subItems.map((secondSubItem) => (
                          <Link key={secondSubItem.id} href={secondSubItem.path}>
                            <Button
                              size="sm"
                              variant="link"
                              className="text-md font-normal px-5 py-3 hover:bg-gray-100 hover:text-[#5b6cf2] block text-left w-full"
                              style={{ textDecoration: "none" }}
                            >
                              {secondSubItem.name}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="gap-4 hidden lg:flex">
        {isLoading ? (
          <Button
            variant="outline"
            className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
          >
            Loading...
          </Button>
        ) : isAuthenticated ? (
          <>
            {/* Profile Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
            >
              <Button
                variant="outline"
                className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
              >
                Welcome {user?.name || "User"}
              </Button>
              {profileDropdown && (
                <div className="absolute top-full right-0 bg-white shadow-md rounded-lg border border-gray-300 w-60 p-4">
                  <p className="text-sm font-medium text-gray-700">
                    {user?.email || "Email not available"}
                  </p>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="mt-2 w-full hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link href="/sign-up">
              <Button
                variant="outline"
                className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
              >
                Sign up
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
              >
                Sign in
              </Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
