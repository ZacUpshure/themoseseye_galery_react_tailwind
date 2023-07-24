import React from 'react'
import { useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' },
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}
const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ModalContent = ({artwork}) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      {/* Product details */}
      <div className="lg:max-w-lg lg:self-end">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            {/* {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center text-sm">
                  <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {breadcrumb.name}
                  </a>
                  {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  ) : null}
                </div>
              </li>
            ))} */}
          </ol>
        </nav>

        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{artwork.name}</h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>

          <div className="flex items-center">
            {/* <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p> */}

            <div className="ml-4 border-l border-gray-300 pl-4">

            </div>
          </div>

          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500">{artwork.description}</p>
          </div>

          <div className="mt-6 flex items-center">
            {/* <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" /> */}
            {/* <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p> */}
          </div>
        </section>
      </div>

      {/* Product image */}
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <img src={artwork.imageSrc} alt={artwork.imageAlt} className="h-full w-full object-cover object-center" />
        </div>
      </div>

      {/* Product form */}
      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" className="sr-only">
            Product options
          </h2>

          <form>
            <div className="sm:flex sm:justify-between">
              {/* Size selector */}
            </div>
            <div className="mt-4">
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                See Service.
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
  )
}

export default ModalContent