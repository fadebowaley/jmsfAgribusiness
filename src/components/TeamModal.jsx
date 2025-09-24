import React from "react";

function TeamModal({ isOpen, onClose, name, role, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-[#1fa12e] text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-1 text-[#1fa12e]">{name}</h2>
        <h3 className="text-sm font-semibold text-gray-600 mb-4">{role}</h3>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">{content}</div>
      </div>
    </div>
  );
}

export default TeamModal;
