import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function LargeNavbar({ items }) {
  const { setIsAuthenticated } = useUserContext();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openThirdDropdown, setOpenThirdDropdown] = useState(null);

  // Handle first-level dropdown
  const handleMouseEnter = (id) => setOpenDropdown(id);
  const handleMouseLeave = () => setOpenDropdown(null);

  // Handle second-level submenu
  const handleSubMenuMouseEnter = (id) => setOpenSubDropdown(id);
  const handleSubMenuMouseLeave = () => setOpenSubDropdown(null);

  // Handle third-level submenu
  const handleThirdMenuMouseEnter = (id) => setOpenThirdDropdown(id);
  const handleThirdMenuMouseLeave = () => setOpenThirdDropdown(null);

  const handleLogout = () => {
    try {
      Cookies.remove("token", { path: "/", domain: ".contentlywriters.com" });
      Cookies.remove("token", { path: "/" });
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
                className="text-lg font-normal text-white hover:text-[#5b6cf2] transition-colors ease-in-out duration-300"
              >
                {item.name}
              </Button>
            </Link>

            {/* First-level Dropdown */}
            {item.subItems && openDropdown === item.id && (
              <div className="absolute top-full left-0 pb-3 bg-white ml-[2px] shadow-md rounded-lg w-60 border border-gray-800">
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
                        className="text-md font-normal px-5 py-3 hover:underline hover:text-[#5b6cf2] block text-left w-full"
                        style={{ textDecoration: "none" }}
                      >
                        {subItem.name}
                      </Button>
                    </Link>

                    {/* Second-level submenu */}
                    {subItem.subItems && openSubDropdown === subItem.id && (
                      <div className="absolute top-0 left-full mt-2 pb-3 bg-white ml-[2px] shadow-md rounded-lg w-60 border border-gray-800">
                        {subItem.subItems.map((secondSubItem) => (
                          <div
                            key={secondSubItem.id}
                            className="relative"
                            onMouseEnter={() =>
                              handleThirdMenuMouseEnter(secondSubItem.id)
                            }
                            onMouseLeave={handleThirdMenuMouseLeave}
                          >
                            <Link href={secondSubItem.path}>
                              <Button
                                size="sm"
                                variant="link"
                                className="text-md font-normal px-5 py-3 hover:underline hover:text-[#5b6cf2] block text-left w-full"
                                style={{ textDecoration: "none" }}
                              >
                                {secondSubItem.name}
                              </Button>
                            </Link>

                            {/* Third-level submenu */}
                            {secondSubItem.subItems &&
                              openThirdDropdown === secondSubItem.id && (
                                <div className="absolute top-0 left-full mt-2 ml-[2px] pb-3 bg-white shadow-md rounded-lg w-60 border border-gray-800">
                                  {secondSubItem.subItems.map((thirdSubItem) => (
                                    <Link
                                      key={thirdSubItem.id}
                                      href={thirdSubItem.path}
                                    >
                                      <Button
                                        size="sm"
                                        variant="link"
                                        className="text-md font-normal px-5 py-3 hover:underline hover:text-[#5b6cf2] block text-left w-full"
                                        style={{ textDecoration: "none" }}
                                      >
                                        {thirdSubItem.name}
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
            )}
          </div>
        ))}
      </div>
    </>
  );
}
