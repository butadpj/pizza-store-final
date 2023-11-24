import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function CartIcon({ className = "" }) {
  return (
    <div
      className={`cart mr-5 hidden lg:flex lg:flex-1 lg:justify-end ${className}`}
    >
      <a
        href="#"
        className="relative text-sm font-semibold leading-6 text-gray-900"
      >
        <ShoppingCartIcon className="h-7 w-7" />
        <span className="absolute right-0 top-0 flex h-6 w-6 translate-x-[60%] translate-y-[-50%] items-center justify-center rounded-full border border-black bg-yellow-300 text-lg">
          3
        </span>
      </a>
    </div>
  );
}
