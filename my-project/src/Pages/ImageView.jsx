import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../constants';
import ModalContent from '../components/ModalContent';

const projects = [
    {
      id: 1,
      name: 'Oli Baustoffe Website',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
    //   imageSrc: 'https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/OliBaustoffe.png',
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
      id: 6,
      name: 'Volkswagen GTI',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: images.vw_gti_long,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "photography",
    },
    {
      id: 7,
      name: 'FixEnergie Corporate Design',
      description: 'Dont compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: images.fixEnergyBehance,
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      tag: "ux/ui",
    },
    // More products...
  ]

const ImageView = () => {
  const { id } = useParams();

  // Find the project with the matching id
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
        <ModalContent id={project.id} name={project.name} imageSrc={project.imageSrc} imageAlt={project.imageAlt} description={project.description} />

    </div>
  );
};

export default ImageView;
