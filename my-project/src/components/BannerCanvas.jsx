import React from 'react'
import { videos } from '../constants'

const BannerCanvas = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <video src={videos.video_one} autoPlay loop muted className='video'></video>
            {/* <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            /> */}
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">Our Collection</h2>
              <p className="mt-1 text-sm text-gray-300">
                Here are all our projects that we made for our clients so we can provide an insight for what we can deliver and why our services are ideal for increasing quality of marketing and sales eventually. 
              </p>
            </div>
            <a
              href="https://www.themoseseye.com/"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              Our Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerCanvas