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
      imageSrc: images.olibaustoffe,
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
      imageSrc: images.TextAaron,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
      id: 3,
      name: 'FixEnergy Logo',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: images.fixEnergyOne,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
      id: 4,
      name: 'FixEnergy design and colors',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: images.fixEnergyTwo,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    {
      id: 5,
      name: 'FixEnergy Business card',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: images.fixEnergyThree,
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
      imageSrc: images.vw_gti,
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