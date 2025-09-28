"use client";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function SmallNavbar({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [openSubMenuId, setOpenSubMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const toggleSubMenu = (id) => {
    setOpenSubMenuId((prevId) => (prevId === id ? null : id));
  };

  const renderMenuItems = (menuItems, level = 0) => (
    <ul className={`pl-${level * 4} mt-2`}>
      {menuItems.map((item) => (
        <li key={item.id} className="relative ">
          {item.subItems ? (
            <>
              <button
                className={`flex justify-between items-center w-full py-3 px-4 text-lg tracking-wide text-black hover:tex[#5b6cf2] transition-all`}
                onClick={() => toggleMenu(item.id)}
              >
                <span className="drop-shadow-[0_0_6px_#5b6cf2]">{item.name}</span>
                {openMenuId === item.id ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              <AnimatePresence>
                {openMenuId === item.id && (
                  <motion.ul
                    className="pl-6 border-l border-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        {subItem.subItems ? (
                          <>
                            <button
                              className="flex justify-between items-center w-full py-2 px-4 text-md text-black hover:text-[#5b6cf2]"
                              onClick={() => toggleSubMenu(subItem.id)}
                            >
                              {subItem.name}
                              {openSubMenuId === subItem.id ? (
                                <FiChevronUp />
                              ) : (
                                <FiChevronDown />
                              )}
                            </button>

                            <AnimatePresence>
                              {openSubMenuId === subItem.id && (
                                <motion.ul
                                  className="pl-6 border-l border-gray-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {subItem.subItems.map((third) => (
                                    <li key={third.id}>
                                      <Link
                                        href={third.path}
                                        className="block py-2 px-4 text-md text-black hover:text-[#5b6cf2] transition-colors"
                                      >
                                        {third.name}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={subItem.path}
                            className="block py-2 px-4 text-md text-black hover:text-[#5b6cf2] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              href={item.path}
              className="block py-3 px-4 text-lg text-black hover:text-[#5b6cf2] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="lg:hidden">
      {/* Hamburger */}
      <button
        className="p-2 text-3xl text-[#5b6cf2]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
       <motion.div
  initial={{ x: "100%", opacity: 0 }}      
  animate={{ x: 0, opacity: 1 }}        
  exit={{ x: "100%", opacity: 0 }}     
  transition={{ duration: 0.2, ease: "easeInOut" }}
  className="fixed top-0 right-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-full bg-white/95 backdrop-blur-sm shadow-xl z-50 overflow-y-auto"
>
  {/* Header */}
  <div className="px-6 py-5 flex justify-between items-center border-b border-gray-200">
    <h2 className="font-bold text-2xl bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
      Contently Writers
    </h2>
    <button
      className="text-3xl text-gray-800 hover:text-[#5b6cf2]"
      onClick={() => setIsOpen(false)}
    >
      <BiX />
    </button>
  </div>

  {/* Menu Items */}
  <nav className="px-4 py-6">
    {items.map((item) => (
      <div key={item.id} className="mb-2">
        {item.subItems ? (
          <>
            <button
              className={`flex justify-between items-center w-full py-3 px-4 text-lg text-gray-900 hover:text-[#5b6cf2] relative`}
              onClick={() => toggleMenu(item.id)}
            >
              <span>{item.name}</span>
              {openMenuId === item.id ? <FiChevronUp /> : <FiChevronDown />}
              {/* Side Indicator */}
              {openMenuId === item.id && (
                <span className="absolute left-0 top-0 h-full w-1 bg-[#5b6cf2] rounded-r"></span>
              )}
            </button>

            <AnimatePresence>
              {openMenuId === item.id && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-6 border-l border-gray-200 overflow-hidden"
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} className="relative">
                      {subItem.subItems ? (
                        <>
                          <button
                            className="flex justify-between items-center w-full py-2 px-4 text-md text-gray-800 hover:text-[#5b6cf2] relative"
                            onClick={() => toggleSubMenu(subItem.id)}
                          >
                            {subItem.name}
                            {openSubMenuId === subItem.id ? <FiChevronUp /> : <FiChevronDown />}
                            {openSubMenuId === subItem.id && (
                              <span className="absolute left-0 top-0 h-full w-1 bg-[#5b6cf2] rounded-r"></span>
                            )}
                          </button>

                          <AnimatePresence>
                            {openSubMenuId === subItem.id && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="pl-6 border-l border-gray-200 overflow-hidden"
                              >
                                {subItem.subItems.map((third) => (
                                  <li key={third.id}>
                                    <Link
                                      href={third.path}
                                      className="block py-2 px-4 text-md text-gray-700 hover:text-[#5b6cf2] transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {third.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={subItem.path}
                          className="block py-2 px-4 text-md text-gray-700 hover:text-[#5b6cf2] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        ) : (
          <Link
            href={item.path}
            className="block py-3 px-4 text-lg text-gray-900 hover:text-[#5b6cf2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        )}
      </div>
    ))}
  </nav>
</motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}
