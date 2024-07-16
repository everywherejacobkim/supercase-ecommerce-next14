import React from "react";
import Link from "next/link";

interface MenuItem {
  label: string | JSX.Element;
  path: string;
}

interface HeaderProps {
  menus: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menus }) => {
  return (
    <header className="bg-gray-800 text-white">
      <nav>
        <ul className="flex items-center justify-between p-4">
          {menus.map((menu, index) => (
            <li key={index} className="mx-2">
              <Link href={menu.path}>
                <div className="hover:text-gray-300">{menu.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
