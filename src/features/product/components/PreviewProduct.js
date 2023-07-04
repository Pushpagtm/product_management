import React from 'react';
import { Link } from 'react-router-dom';
import {
  PencilIcon,TrashIcon
  } from "@heroicons/react/20/solid";
export default function PreviewProduct(props) {
    const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '35',
          color: 'Black',
        },]
    return (
        <div>
             <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>

           
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Product grid */}
              <div className="lg:col-span-3">
        {/* Products */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <Link>
                  <div
                    key={product.id}
                    className="group relative border-solid border-2 p-2 shadow-lg"
                  >
                    <div className="aspect-h-60  w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <div href={product.imageSrc}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </div>
                        </h3>
                      
                      </div>
                      <div>
                       
                        <p className="text-sm block font-medium text-gray-600">
                          $ {product.price}
                        </p>
                      </div>
                    </div>
                    <span className='flex justify-end p-5 gap-3'><PencilIcon className="h-5 w-5" aria-hidden="true" /><TrashIcon className="h-5 w-5" aria-hidden="true"/></span>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
            </div>
          </section>
         
        </main>
        </div>
    );
}

