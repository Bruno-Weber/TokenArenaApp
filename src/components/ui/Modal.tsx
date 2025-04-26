import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, children, actions }) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
        leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-70" />
      </Transition.Child>
      <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
        <div className="w-full max-w-lg p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="scale-90 opacity-0" enterTo="scale-100 opacity-100"
            leave="ease-in duration-200" leaveFrom="scale-100 opacity-100" leaveTo="scale-90 opacity-0"
          >
            <Dialog.Panel className="relative bg-zinc-900 rounded-2xl shadow-2xl border-2 border-purple-700/30 p-8 flex flex-col items-center">
              {title && <Dialog.Title className="text-2xl font-extrabold text-purple-400 mb-2">{title}</Dialog.Title>}
              {description && <p className="mb-4 text-gray-300 text-center">{description}</p>}
              <div className="w-full">{children}</div>
              {actions && <div className="w-full mt-6 flex gap-4">{actions}</div>}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;
