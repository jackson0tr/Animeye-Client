"use client";

import { useTheme } from "@/lib/helpers/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHeart, FaTrash, FaSearch, FaArrowRight } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import logo from "../../../public/imgs/logo.svg";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import {
  FaUser,
  FaSun,
  FaHome,
  FaImage,
  FaInfoCircle,
  FaPhone,
  FaCog,
  FaBoxOpen,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { usePathname } from "@/services/navigation";
// import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const pathname = usePathname();
  const routeSegment = pathname.split("/")[1];

  const sidebarItems = [
    { label: "Profile", icon: <FaUser />, action: () => {} },
    { label: "Sun Mode", icon: <FaSun />, action: toggleTheme },
    { label: "Home", icon: <FaHome />, action: () => {} },
    { label: "Gallery", icon: <FaImage />, action: () => {} },
    { label: "About Animeye", icon: <FaInfoCircle />, action: () => {} },
    { label: "Contact", icon: <FaPhone />, action: () => {} },
    { label: "Settings", icon: <FaCog />, action: () => {} },
    { label: "My Orders", icon: <FaBoxOpen />, action: () => {} },
    { label: "Help", icon: <FaQuestionCircle />, action: () => {} },
    { label: "Log/Sign out", icon: <FaSignOutAlt />, action: () => {} },
  ];

  return (
    <>
      <motion.nav className="sticky top-0 z-50 pt-4 md:pt-7 px-7 w-full bg-[var(--background)] border-b border-gray-200">
        <div className="flex items-center justify-between h-20 md:p-6">
          <div className="flex items-center gap-1 md:gap-8">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="w-20 h-20 rounded-full"
              />
            </div>

            <div className="hidden md:flex gap-8 items-center">
              {["Home", "Gallery"].map((item) => (
                <Link
                  key={item}
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className="relative !text-[var(--accent)] text-sm font-semibold uppercase hover:text-pink-700"
                >
                  {item}
                  <span className="block h-1 w-4 mx-auto bg-[var(--pink)] mt-1" />
                </Link>
              ))}
            </div>

            <div className="md:hidden flex items-center flex-1  justify-start px-2">
              <div className="relative w-[50%] max-w-sm">
                <FaSearch className="absolute top-2.5 left-3 text-[var(--pink)] text-sm" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-1.5 rounded-full border border-[var(--accent)] focus:outline-none text-sm !text-[var(--pink)] w-full"
                />
              </div>

              <div className="md:hidden flex gap-4 items-center text-[var(--pink)]">
                <IoMdPerson
                  size={20}
                  className="cursor-pointer hover:text-[var(--secondary)]"
                />
                <MdFavorite
                  size={20}
                  className="cursor-pointer hover:text-[var(--secondary)]"
                />
                <FaCartShopping
                  size={20}
                  className="cursor-pointer hover:text-[var(--secondary)]"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center flex-1 justify-center px-6">
            <div className="relative w-full max-w-sm">
              <FaSearch className="absolute top-2.5 left-3 text-[var(--pink)] text-sm" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-1.5 rounded-full border border-[var(--accent)] focus:outline-none text-sm text-[var(--pink)] w-full"
              />
            </div>
          </div>

          <div className="hidden lg:flex gap-4 items-center text-[var(--pink)]">
            <IoMdPerson
              size={20}
              className="cursor-pointer hover:text-[var(--secondary)]"
            />
            <MdFavorite
              size={20}
              className="cursor-pointer hover:text-[var(--secondary)]"
            />
            <FaCartShopping
              size={20}
              className="cursor-pointer hover:text-[var(--secondary)]"
            />
          </div>
        </div>

        <div className="p-2 flex flex-row gap-4">
          <div className="flex items-center gap-2 relative h-16 w-full">
            {!isOpen && (
              <div className="z-10  pt-6">
                <FiMenu
                  onClick={() => setIsOpen(true)}
                  className="text-[var(--pink)] cursor-pointer hover:scale-105 transition-transform"
                  size={40}
                />
              </div>
            )}

            <div className="relative w-full h-full">
              {routeSegment ? (
                <div className="flex flex-wrap items-center gap-2 pt-7 md:pt-7">
                  <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px]">
                    <Image
                      src={theme === 'dark' ? '/imgs/home-icon-dark.svg' : '/imgs/home-icon.svg'}
                      alt={`Home icon ${theme}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="text-sm md:text-xl text-gray-700">
                    <Link
                      href="/"
                      className={` ${theme === 'dark' ? '!text-[var(--pink)] hover:!text-[var(--purple)]' : 'text-[var(--pink)] hover:!text-[var(--pink)]'} transition-colors`}
                    >
                      Home
                    </Link>{" "}
                    <span className={`${theme === 'dark' ? '!text-[var(--pink)]' : ''}`}>
                    &gt;{" "}
                    </span>
                    <span className={` border-b-2 border-[var(--pink)] ${theme === 'dark' ? '!text-[var(--success)]' : 'text-[var(--pink)]'}`}>
                      {routeSegment.charAt(0).toUpperCase() +
                        routeSegment.slice(1)}
                    </span>
                  </span>
                </div>
              ) : (
                <Image
                  src="/imgs/banner.svg"
                  alt="Website banner"
                  fill
                  className="object-contain object-left"
                  priority
                />
              )}
            </div>
          </div>

          <div className="md:hidden flex gap-8 items-center">
            {["Home", "Gallery"].map((item) => (
              <Link
                key={item}
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="relative !text-[var(--accent)] text-sm font-semibold uppercase hover:text-pink-700"
              >
                {item}
                <span className="block h-1 w-4 mx-auto bg-[var(--pink)] mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsOpen(false)}
          >
            <FiX
              size={26}
              className="absolute top-8 left-67   bg-white rounded-full text-[var(--pink)] z-53 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="h-full w-64 bg-[var(--background)] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4">
                {sidebarItems.map((item, index) => {
                  const isLogout = item.label === "Log/Sign out";
                  const prevIsNotLogout =
                    sidebarItems[index - 1]?.label !== "Log/Sign out";

                  return (
                    <motion.div key={item.label} whileHover={{ x: 10 }}>
                      {/* Add a border above the "Log/Sign out" item */}
                      {isLogout && prevIsNotLogout && (
                        <div className="border-t border-[var(--secondary)] my-2"></div>
                      )}

                      <div
                        className="w-full text-left p-2 text-[var(--pink)] hover:text-[var(--secondary)] flex items-center justify-between"
                        onClick={() => {
                          if (item.label !== "Sun Mode") {
                            item.action();
                            setIsOpen(false);
                          }
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-lg ${
                              isLogout
                                ? "text-[var(--secondary)]"
                                : "text-[var(--pink)]"
                            }`}
                          >
                            {item.icon}
                          </span>
                          <span
                            className={`${
                              isLogout
                                ? "!text-[var(--secondary)]"
                                : "!text-[var(--pink)]"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>

                        {item.label === "Gallery" && (
                          <FaArrowRight className="text-[var(--pink)]" />
                        )}

                        {item.label === "Sun Mode" && (
                          <label className="relative inline-flex items-center cursor-pointer ml-2">
                            <input
                              type="checkbox"
                              checked={
                                typeof window !== "undefined" &&
                                localStorage.getItem("theme") === "light"
                              }
                              onChange={() => item.action()}
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--white)] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--pink)] relative"></div>
                          </label>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
