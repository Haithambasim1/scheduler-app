"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

function NavBar() {
  const path = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  useEffect(() => {
    // Check if the user is logged in by looking for the token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  function handleLogout() {
    // Remove token from localStorage to log out the user
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    setIsLoggedIn(false);
    router.push("/login");
  }

  return (
    <div className=" bg-[oklch(91.6374% .034554 90.51575 / 1)] border-b w-full flex items-center justify-around md:justify-between px-6 md:px-12 py-3">
      <Link href={"/"} className="logo_text flex items-center ">
        <h1 className=" black_gradient ">MediaTime</h1> <span>💩</span>
      </Link>
      <div className="flex items-center ">
        <nav
          className={`hidden md:flex gap-3 ${isMenuOpen ? "block" : "hidden"}`} // Add block class if menu is open
        >
          <Link
            href="/create-post"
            className="hover:underline hover:text-gray-900 transition-all"
          >
            Create Post
          </Link>
          <Link
            href="/posts"
            className="hover:underline hover:text-gray-900 transition-all"
          >
            Posts
          </Link>
          <Link
            href="/pricing"
            className="hover:underline hover:text-gray-900 transition-all"
          >
            Pricing
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 z-10 left-0 w-full bg-white border  p-4 shadow-xl ${
          isMenuOpen ? "flex gap-4" : "hidden"
        } md:hidden`} // Show menu only on mobile when isMenuOpen is true
      >
        <ul className="flex flex-col items-start gap-4">
          <li>
            <Link
              className="text-black font-inter hover:underline"
              href="/"
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-black font-inter hover:underline"
              href="/create-post"
              onClick={toggleMenu} // Close menu on click
            >
              Create Post
            </Link>
          </li>
          <li>
            <Link
              className="text-black font-inter hover:underline"
              href="/posts"
              onClick={toggleMenu} // Close menu on click
            >
              Posts
            </Link>
          </li>
          <div className="flex items-center justify-between gap-2 ">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className=" py-2 px-4 underline transition-all duration-300   text-black hover:bg-black hover:text-white  rounded"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href={"/login"}
                  className="bg-black py-2 px-4 text-white rounded"
                >
                  Login
                </Link>
                <Link
                  href={"/signup"}
                  className="bg-black py-2 px-4 text-white rounded"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>

      <div className=" hidden sm:flex  items-center justify-center gap-2">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className=" py-2 px-4 text-black hover:underline underline-offset-4 font-semibold rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href={"/login"}
              className="bg-black py-2 px-4 text-white rounded"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="bg-black py-2 px-4 text-white rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
      <button
        className="md:hidden text-gray-500 dark:text-white ml-3"
        onClick={toggleMenu}
      >
        <Image
          src="./assets/icons/menu.svg"
          width={22}
          height={22}
          alt="menu"
        />
      </button>
    </div>
  );
}

export default NavBar;
