import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: { notifications: boolean; favoriteClub: string };
  onSave: (prefs: { notifications: boolean; favoriteClub: string }) => void;
}

const clubs = ["Grêmio", "Flamengo"];

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, preferences, onSave }) => {
  const [notif, setNotif] = useState(preferences.notifications);
  const [favClub, setFavClub] = useState(preferences.favoriteClub);

  const handleSave = () => {
    onSave({ notifications: notif, favoriteClub: favClub });
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="w-full max-w-md p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300" enterFrom="scale-90 opacity-0" enterTo="scale-100 opacity-100"
              leave="ease-in duration-200" leaveFrom="scale-100 opacity-100" leaveTo="scale-90 opacity-0"
            >
              <Dialog.Panel className="relative bg-zinc-900 rounded-2xl shadow-2xl border-2 border-purple-700/30 p-8 flex flex-col items-center">
                <Dialog.Title className="text-2xl font-extrabold text-purple-400 mb-4">Editar Perfil</Dialog.Title>
                <div className="w-full flex flex-col gap-4">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" checked={notif} onChange={e => setNotif(e.target.checked)} className="accent-purple-500" />
                    Receber notificações
                  </label>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Clube favorito</label>
                    <select
                      className="bg-zinc-800 text-white rounded px-3 py-2 border border-purple-700/30 w-full"
                      value={favClub}
                      onChange={e => setFavClub(e.target.value)}
                    >
                      {clubs.map(club => <option key={club} value={club}>{club}</option>)}
                    </select>
                  </div>
                </div>
                <button
                  className="mt-8 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition-all"
                  onClick={handleSave}
                >
                  Salvar
                </button>
                <button
                  className="mt-2 w-full bg-zinc-800 hover:bg-zinc-700 text-purple-400 py-3 rounded-xl font-bold text-lg border border-purple-700/30 shadow transition-all"
                  onClick={onClose}
                >
                  Cancelar
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditProfileModal;
