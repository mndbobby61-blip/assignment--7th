"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`pb-2 font-semibold rounded-lg px-2 py-1 ${
        isActive ? "bg-green-900 text-white" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

export default MyLink;