import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/auth";

export default function LargeNavbar({ items }) {
  const { isLoading, isAuthenticated, setIsAuthenticated } = useUserContext();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [subDropdownTimeout, setSubDropdownTimeout] = useState(null);

  // Handle first-level dropdown
  const handleMouseEnter = (id) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(id); 
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null); 

    }, 450);

    setDropdownTimeout(timeout);
  };

  // Handle second-level submenu
  const handleSubMenuMouseEnter = (id) => {
    if (subDropdownTimeout) {
      clearTimeout(subDropdownTimeout);
      setSubDropdownTimeout(null);
    }
    setOpenSubDropdown(id); 
  };

  const handleSubMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenSubDropdown(null); 
    }, 8000);
    setSubDropdownTimeout(timeout);
  };

  const handleLogout = () => {
    try {
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
            onMouseLeave={handleMouseLeave}
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
              <div className="absolute top-full left-0 mt-2 pb-1 bg-white shadow-md rounded-lg w-64 border border-gray-300 no-underline">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="relative"
                    onMouseEnter={() => handleSubMenuMouseEnter(subItem.id)}
                    onMouseLeave={handleSubMenuMouseLeave} // Add delay only when mouse leaves submenu
                  >
                    <Link href={subItem.path}>
                      <Button
                        size="sm"
                        variant="link"
                        className="text-md font-normal px-5 py-3 hover:bg-gray-100 hover:text-[#5b6cf2] block text-left w-full "
                        style={{ textDecoration: "none" }}
                      >
                        {subItem.name}
                      </Button>
                    </Link>

                    {/* Second-level submenu */}
                    {subItem.subItems && openSubDropdown === subItem.id && (
                      <div className="absolute top-0 left-full mt-2 ml-2 pb-2 bg-white shadow-md rounded-lg w-64 border border-gray-300">
                        {subItem.subItems.map((secondSubItem) => (
                          <Link key={secondSubItem.id} href={secondSubItem.path}>
                            <Button
                              size="sm"
                              variant="link"
                              className="text-md font-normal px-5 py-3 hover:bg-gray-100 hover:text-[#5b6cf2] block text-left w-full "
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
            <Button
              onClick={handleLogout}
              variant="outline"
              className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
            >
              Logout
            </Button>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100"
              >
                Dashboard
              </Button>
            </Link>
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
