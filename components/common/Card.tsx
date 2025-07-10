import React from 'react'
import { ButtonProps } from '../../interfaces'
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  )
}