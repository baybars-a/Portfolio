import React from 'react';
import { PortfolioData, Experience as ExperienceType } from '../../types';
import Certifications from './Certifications';

interface ExperienceProps {
  data: PortfolioData['experience'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

const Experience: React.FC<ExperienceProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="bg-black/20 backdrop-blur-md p-8 md:p-16 rounded-lg border border-white/10 text-white">
        <h2 className="text-2xl md:text-3xl font-mono font-bold tracking-widest uppercase mb-8">
            Certifications
        </h2>
        <hr className="border-white/20 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {data.columns.map((column: ExperienceType[], colIndex: number) => (
            <div key={colIndex} className="space-y-10">
              {column.map((exp: ExperienceType, expIndex: number) => (
                <div key={expIndex}>
                  <h3 
                    className={`font-bold text-lg text-white ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdate(`experience.columns.${colIndex}.${expIndex}.role`, e.currentTarget.textContent || '')}
                  >{exp.role}</h3>
                  <p 
                    className={`text-gray-300 ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdate(`experience.columns.${colIndex}.${expIndex}.company`, e.currentTarget.textContent || '')}
                  >{exp.company}</p>
                </div>
              ))}
              {colIndex === 0 && (
                 <div className="pt-2">
                    <a href={data.resumeUrl} className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
                        RESUME
                    </a>
                    {isEditMode && <input type="text" value={data.resumeUrl} onChange={e => onUpdate('experience.resumeUrl', e.target.value)} className="w-full bg-gray-800 text-white p-1 rounded mt-2 text-xs" aria-label="Resume URL" />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;