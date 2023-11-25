"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserAuth({ className = "" }) {
  const { user, isLoaded } = useUser();

  return (
    <div
      className={`cart mr-5 hidden gap-10 lg:flex lg:flex-1 lg:justify-end ${className}`}
    >
      {user ? (
        <UserInfo />
      ) : isLoaded ? (
        <Link href={"/login"} className="text-black hover:text-gray-600">
          Login <span aria-hidden="true">→</span>
        </Link>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

function UserInfo({ firstName = "" }) {
  return (
    <>
      <UserButton showName afterSignOutUrl="/" />
      <a
        href="#"
        className="relative text-sm font-semibold leading-6 text-gray-900"
      >
        <ShoppingCartIcon className="h-7 w-7" />
        <span className="absolute right-0 top-0 flex h-6 w-6 translate-x-[60%] translate-y-[-50%] items-center justify-center rounded-full border border-black bg-yellow-300 text-lg">
          3
        </span>
      </a>
    </>
  );
}
