import React, { useState } from "react";
import Link from "next/link";
import Cookies from 'js-cookie';
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/auth";
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";


export default function LargeNavbar({ items }) {
  const { isLoading, isAuthenticated, setIsAuthenticated, user } = useUserContext();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

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
             className="px-4 py-2 rounded-md border-2 border-[#8e8e8e] border-opacity-50 text-[#000000] bg-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-[#000000] hover:text-white hover:border-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
          >
            Loading...
          </Button>
        ) : isAuthenticated ? (
          <>
            {/* Dashboard Button */}
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="px-4 py-2 rounded-md border-2 border-[#8e8e8e] border-opacity-50 text-[#000000] bg-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-[#ededed] hover:text-black hover:border-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                Dashboard
              </Button>
            </Link>

            {/* Profile Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
            >
             <Button
  variant="outline"
        className="px-4 py-2 rounded-md border-2 border-[#8e8e8e] border-opacity-50 text-[#000000] bg-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-[#ededed] hover:text-black hover:border-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
>
<FaUser className="mr-2" /> User 
</Button>
              {profileDropdown && (
                <div className="absolute top-full  right-0 bg-white shadow-md rounded-lg border border-gray-300 w-auto p-4">
                  <p className="text-sm font-medium font-bold text-black uppercase">
                    {user?.firstName || "User"}  {user?.lastName || "."}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    {user?.email || "Email not available"}
                  </p>
                  <div
  className="relative flex items-center justify-center"
  onMouseEnter={() => setProfileDropdown(true)}
  onMouseLeave={() => setProfileDropdown(false)}
>
  {/* Circular Logout Button */}
  <Button
    onClick={handleLogout}
    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5b6cf2] to-[#020035] text-white border-0 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#5b6cf2]/50 flex items-center justify-center"
  >
    <FiLogOut size={18} className="transition-transform duration-300 ease-in-out hover:rotate-180" />
  </Button>

  {/* Logout Text */}
  <div
    className={`absolute left text-sm font-medium text-black bg-white rounded-md shadow-lg px-2 py-1 transform transition-all duration-300 ease-in-out ${profileDropdown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
  >
    Logout
  </div>
</div>


                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link href="/sign-up">
              <Button
                variant="outline"
                  className="px-4 py-2 rounded-md border-2 border-[#8e8e8e] border-opacity-50 text-[#000000] bg-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-black hover:border-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                Sign up
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                 className="px-4 py-2 rounded-md border-2 border-[#8e8e8e] border-opacity-50 text-[#000000] bg-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-black hover:border-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
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
