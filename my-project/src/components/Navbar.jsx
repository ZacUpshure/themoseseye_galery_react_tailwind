import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTagContext } from '../context/TagContext';

const navigation = [
    { name: 'WEBSITE', tag: 'website' }, // Add the tag for each navigation link
    { name: 'UX/UI', tag: 'ux/ui' },
    { name: 'VIDEO', tag: 'videography' },
    { name: 'PHOTO', tag: 'photography' },
    { name: 'ALL', tag: '' },
  ];
  


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { selectedTag, setSelectedTag } = useTagContext();

    const handleTagFilter = (tag) => {
        setSelectedTag(tag);
        setMobileMenuOpen(false); // Close the mobile menu when selecting a tag
      };
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => handleTagFilter(item.tag)}
            className={`rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100`}
          >
            {item.name}
          </button>
        ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="https://www.themoseseye.com/products"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Hire Us!
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="logo"
              />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Hire Us!
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTagFilter(item.tag)}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                    selectedTag === item.tag ? 'text-indigo-600' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar