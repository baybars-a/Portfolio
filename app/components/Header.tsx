import React from 'react';
import { Certification } from './../../../portfolio/types';

interface HeaderProps {
  data: { name: string; };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="py-8 md:py-12">
      <nav className="flex justify-between items-center">
        <a 
          href="" 
          className="text-xl md:text-2xl font-bold text-white hover:text-gray-300 transition-colors"
        >
          {data.name}
        </a>
        <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base">
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
             <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;