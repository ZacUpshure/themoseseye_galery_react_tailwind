import React from 'react';
import { Dialog } from '@headlessui/react';
import ModalContent from './ModalContent';
import {AiOutlineClose} from 'react-icons/ai';

const Modal = ({ isOpen, onClose, artwork }) => {
  return (
    <Dialog as="div" className="fixed inset-0 z-10" open={isOpen} onClose={onClose}>
      <div className="flex items-start justify-center h-screen pt-7 bg-gray-500/40">
        <Dialog.Overlay className="fixed inset-0" />

        <Dialog.Panel className="z-10 bg-white w-full  rounded-lg shadow-lg">
          {/* <h3 className="text-xl font-semibold ">Hire Us</h3> */}
            <div className=" justify-end pt-4 pl-4">
                <span
                className=""
                onClick={onClose}
                >
                <AiOutlineClose />
                </span>
            </div>
          {/* Add the content for the modal here */}
          <ModalContent artwork={artwork}/>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
