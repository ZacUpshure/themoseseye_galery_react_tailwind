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
        tag: "ux/ui",
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
        tag: "ux/ui",
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