import Image from "next/image";

export default function ProductLists({ label = null, products = [] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {label ? (
          <h2
            className={`label mb-10 text-3xl font-bold text-black ${label.style}`}
          >
            {label.content}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <a href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="mt-4 text-lg  text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-green-600 shadow-sm outline hover:bg-green-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    Add to cart
                  </button>
                  <div className="sizes flex items-center justify-end gap-2 text-black">
                    <span className="text-gray-600">Select size:</span>
                    <select
                      defaultValue={10}
                      name="size"
                      id="size"
                      className="w-28"
                    >
                      <option value={10}>Medium 10"</option>
                      <option value={12}>Large 12"</option>
                      <option value={20}>Super Large 20"</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
