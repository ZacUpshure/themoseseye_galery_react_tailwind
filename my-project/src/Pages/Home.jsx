import React, {useState, useEffect} from 'react'
import data from './../data/images.json'
import ProjectCard from '../components/ProjectCard'
import Modal from '../components/Modal'
import images from '../constants/images'
import { useTagContext } from '../context/TagContext'
import BannerCanvas from '../components/BannerCanvas'

const projects = [
    {
      id: 1,
      name: 'Oli Baustoffe Website',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
    //   imageSrc: 'https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/OliBaustoffe.png',
      thumbnail: images.olibaustoffe,
      imageSrc: images.olibaustoffe_long,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "website",
    },
    {
      id: 2,
      name: 'CGI design moseseye',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      thumbnail:images.TextAaron,
      imageSrc: images.TextAaron,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
      id: 6,
      name: 'Volkswagen GTI',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      thumbnail: images.vw_gti,
      imageSrc: images.vw_gti,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "photography",
    },
    {
      id: 7,
      name: 'FixEngerie Corporate Design',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      thumbnail: images.fixEnergyOne,
      imageSrc: images.fixEnergyBehance,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
      id: 8,
      name: 'Healthpoint Corporate Design',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      thumbnail: images.healthpoint_thumbnail,
      imageSrc: images.healthpoint,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
        id: 9,
        name: 'Seller Corporate Design',
        description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
        color: 'Black',
        price: '$35',
        href: '#',
        thumbnail: images.seller_thumbnail,
        imageSrc: images.seller,
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        tag: "ux/ui",
      },
      {
        id: 10,
        name: 'Web Designs',
        description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
        color: 'Black',
        price: '$35',
        href: '#',
        thumbnail: images.webdesign_thumbnail,
        imageSrc: images.webdesign,
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        tag: "ux/ui",
      },
      {
        id: 11,
        name: 'Cafe Place Design',
        description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
        color: 'Black',
        price: '$35',
        href: '#',
        thumbnail: images.cafeplace_thumbnail,
        imageSrc: images.cafeplace,
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        tag: "ux/ui",
      },
      {
        id: 12,
        name: 'Model Photoschooting',
        description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
        color: 'Black',
        price: '$35',
        href: '#',
        thumbnail: images.model_thumbnail,
        imageSrc: images.model,
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        tag: "photography",
      },
      {
        id: 13,
        name: 'Urban Photoschooting',
        description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
        color: 'Black',
        price: '$35',
        href: '#',
        thumbnail: images.urban_thumbnail,
        imageSrc: images.urban,
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        tag: "photography",
      },
      {
        id: 14,
        name: 'Sports Photoschooting',
        description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
        color: 'Black',
        price: '$35',
        href: '#',
        thumbnail: images.sports_thumbnail,
        imageSrc: images.sports,
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        tag: "photography",
      },
    
    // More products...
  ]

const Home = () => {

    const { selectedTag } = useTagContext();

    const filteredProjects = selectedTag
    ? projects.filter((project) => project.tag === selectedTag)
    : projects;

    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleArtworkClick = (artwork) => {
      setSelectedArtwork(artwork);
      setIsModalOpen(true);
    };
  return (
        <section className='flex-start flex-col mb-16'>
            {/* <h1>Categories</h1> */}
            <div className="bg-white">
        <div className="  lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">See our Previous Work!</h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                See everything
                <span aria-hidden="true"> &rarr;</span>
            </a>
            </div>

            <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <ul
                role="list"
                className="mx-4 gap-y-8 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                >
                {filteredProjects.map((project) => (
                    // <ProjectCard id={project.id} imageSrc={project.imageSrc} imageAlt={project.imageAlt} name={project.name}  />
                    <div key={project.id} onClick={() => handleArtworkClick(project)}>
                        <ProjectCard id={project.id} imageSrc={project.imageSrc} imageAlt={project.imageAlt} name={project.name} thumbnail={project.thumbnail} />
                    </div>
                ))}
                </ul>
            </div>
            </div>

            <div className="mt-12 flex px-4 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                See everything
                <span aria-hidden="true"> &rarr;</span>
            </a>
            </div>
        </div>
        </div>
        <BannerCanvas />
        {selectedArtwork && (
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} artwork={selectedArtwork} />
        )}
    </section>
  )
}

export default Home