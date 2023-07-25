import React from 'react'

// import { useEffect, useState } from "react";

const ProjectCard = ({ id, thumbnail,  imageSrc, imageAlt, name }) => {

    return (
        <li key={id} className="inline-flex w-64 flex-col text-center lg:w-auto">
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
            <img
                src={thumbnail}
                alt={imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
            </div>
            <div className="mt-6">
            {/* <p className="text-sm text-gray-500">{product.color}</p> */}
            <h3 className="mt-1 font-semibold text-gray-900">
                <a href={`/image/${id}`}>
                <span className="absolute inset-0" />
                {name}
                </a>
            </h3>
            {/* <p className="mt-1 text-gray-900">{product.price}</p> */}
            </div>
        </div>
        </li>
    );
};

export default ProjectCard;