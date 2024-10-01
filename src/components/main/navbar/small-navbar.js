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
  const { isAuthenticated, setIsAuthenticated } = useUserContext();
  const [openMenuId, setOpenMenuId] = useState(null);

  // Handle toggle for opening/closing the dropdown
  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  // Render menu items
  const renderMenuItems = (menuItems, level = 0) => {
    return (
      <ul className={`pl-${level * 4} mt-2`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.subItems ? (
              <>
                <Button
                  variant="link"
                  className={`flex justify-between font-Normal w-full items-center text-left py-3 px-3 hover:text-[#5b6cf2] ${item.name === "Service" || item.name === "Subject" ? 'text-[16px]' : ''}`}
                  onClick={() => toggleMenu(item.id)}
                >
                  {item.name} 
                  {(item.name === "Service" || item.name === "Subject") && 
                    (openMenuId === item.id ? <FiChevronUp /> : <FiChevronDown />)}
                </Button>
                {openMenuId === item.id && renderMenuItems(item.subItems, level + 1)}
              </>
            ) : (
              <SheetClose asChild>
                <Link href={item.path}>
                  <Button
                    size="sm"
                    variant="link"
                    className="text-md font-normal hover:text-[#5b6cf2] transition-colors duration-300"
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
      <SheetTrigger asChild className="grid lg:hidden">
        <Button variant="icon">
          <BiMenu className="text-2xl" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-4">
            <span className="font-semibold text-[#212630] sm:text-xl">
              Contently Writers
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav>
          {renderMenuItems(items)}
        </nav>

        {isAuthenticated ? (
          <div className="grid gap-2">
            <SheetClose asChild>
              <Button
                variant="outline"
                className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5] w-[100px]"
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
                  className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5]"
                >
                  Dashboard
                </Button>
              </Link>
            </SheetClose>
          </div>
        ) : (
          <div className="grid gap-2">
            <SheetClose asChild>
              <Link href="/sign-up">
                <Button
                  variant="outline"
                  className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5]"
                >
                  Sign up
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="hover:bg-[#5b6cf2] hover:text-[#ffffff] border-[#3c46d5]"
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
