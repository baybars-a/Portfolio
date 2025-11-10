import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { MailIcon } from './icons/MailIcon';
import { PortfolioData } from '../../types';

interface FooterProps {
  data: PortfolioData['footer'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

const Footer: React.FC<FooterProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <footer id="contact" className="text-center py-16 md:py-24 border-t border-white/20">
      <h2 
        className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdate('footer.title', e.currentTarget.textContent || '')}
      >{data.title}</h2>
      <p 
        className={`text-lg text-gray-300 mb-8 max-w-md mx-auto ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdate('footer.subtitle', e.currentTarget.textContent || '')}
      >
        {data.subtitle}
      </p>
      <a 
        href={`mailto:baybarsbahaa@gmail.com`} 
        className={`text-xl md:text-2xl text-white hover:underline ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdate('footer.email', e.currentTarget.textContent || '')}
      >
        {data.email}
      </a>
      <div className="flex justify-center space-x-6 mt-10">
        <a href='https://www.linkedin.com/in/baybars-alzibdeh/' aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
          <LinkedInIcon className="w-6 h-6" />
        </a>

        <a href={`mailto:baybarsbahaa@gmail.com`} aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
          <MailIcon className="w-6 h-6" />
        </a>
      </div>

      <div className="mt-16 text-sm text-gray-400">
      </div>
    </footer>
  );
};

export default Footer;