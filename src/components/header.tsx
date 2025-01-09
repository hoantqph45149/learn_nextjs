"use client";

import { User } from "@/app/app-provider";
import ButtonLogout from "@/components/button-logout";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const Header = ({ user }: { user: User | null }) => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-2xl font-extrabold text-white">
          <Link href="/">My Shop</Link>
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link
                href="/product"
                className="hover:text-gray-300 transition duration-300"
              >
                Products
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <span>
                    Xin chào <strong>{user.name}</strong>
                  </span>
                </li>
                <li>
                  <ButtonLogout />
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link
                    href="/login"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
