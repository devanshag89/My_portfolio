// SuccessModal.js
import React from 'react';

const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"></div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg z-10 text-center transform transition-transform duration-300 scale-100 sm:scale-110">
        <h2 className="text-2xl text-white font-bold mb-4">Form submitted successfully!</h2>
        <button
          onClick={onClose}
          className="transition-all duration-300 hover:scale-105 bg-gradient-to-t from-orange-600 to-yellow-600 text-lg font-semibold py-2 px-4 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
