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
      name: 'Machined Pen',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
    //   imageSrc: 'https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/OliBaustoffe.png',
      imageSrc: images.olibaustoffe,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "website",
    },
    {
      id: 2,
      name: 'Test 1',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
      id: 3,
      name: 'Machined Pen',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "photography",
    },
    {
      id: 4,
      name: 'Machined Pen',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "videography",
    },
    {
      id: 5,
      name: 'Machined Pen',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "website",
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
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                >
                {filteredProjects.map((project) => (
                    // <ProjectCard id={project.id} imageSrc={project.imageSrc} imageAlt={project.imageAlt} name={project.name}  />
                    <div key={project.id} onClick={() => handleArtworkClick(project)}>
                        <ProjectCard id={project.id} imageSrc={project.imageSrc} imageAlt={project.imageAlt} name={project.name} />
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