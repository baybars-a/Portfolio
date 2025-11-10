import React from 'react';
// FIX: Use relative path for import as '@/' alias is not configured.
import { PortfolioData } from '../../types';

interface AboutProps {
  data: PortfolioData['about'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

const About: React.FC<AboutProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <section id="about" className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 mx-auto border-4 border-white/20 shadow-lg">
              <img 
                src="./baybars.png"
                alt="Baybars Al-Zibdeh"
                className="w-full h-full object-cover"
              />
            </div>
             {isEditMode && <input type="text" value={data.imageUrl} onChange={e => onUpdate('about.imageUrl', e.target.value)} className="w-full bg-gray-800 text-white p-1 rounded mt-2 text-xs" aria-label="About Me Image URL" />}
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-mono text-white mb-6">About Me</h2>
            <p 
              className={`text-lg text-gray-300 mb-4 ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => onUpdate('about.text1', e.currentTarget.textContent || '')}
            >
              {data.text1}
            </p>
            <p 
              className={`text-lg text-gray-300 ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => onUpdate('about.text2', e.currentTarget.textContent || '')}
            >
             {data.text2}
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;