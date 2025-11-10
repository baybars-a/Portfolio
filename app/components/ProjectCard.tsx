import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps extends Project {
  isEditMode: boolean;
  onUpdate: (field: string, value: any) => void;
  onRemove: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, isEditMode, onUpdate, onRemove }) => {
  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    onUpdate('tags', newTags);
  };
  
  const handleAddTag = () => {
    onUpdate('tags', [...tags, 'New Tag']);
  }
  
  const handleRemoveTag = (index: number) => {
    onUpdate('tags', tags.filter((_: string, i: number) => i !== index));
  }


  return (
    <div className={`group cursor-pointer p-4 rounded-lg transition-all ${isEditMode ? 'bg-gray-800/50 ring-1 ring-yellow-400' : ''}`}>
      {isEditMode && (
        <button onClick={onRemove} className="float-right bg-red-500 text-white px-2 py-1 text-xs rounded-full hover:bg-red-600 -mt-2 -mr-2" aria-label={`Remove ${title} project`}>
          &times;
        </button>
      )}
      <div className="overflow-hidden rounded-lg mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-75 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
         {isEditMode && <input type="text" value={imageUrl} onChange={e => onUpdate('imageUrl', e.target.value)} className="w-full bg-gray-800 text-white p-1 rounded mt-2 text-xs" aria-label="Project Image URL" />}
      </div>
      <h3 
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdate('title', e.currentTarget.textContent || '')}
        className={`text-xl md:text-2xl font-bold text-white mb-2 ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
      >{title}</h3>
      <p 
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdate('description', e.currentTarget.textContent || '')}
        className={`text-gray-300 mb-4 ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
      >{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string, index: number) => (
          <div key={index} className="flex items-center">
            <span 
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTagChange(index, e.currentTarget.textContent || '')}
              className={`bg-white/10 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full ${isEditMode ? 'outline-dashed outline-1 outline-yellow-400 p-1' : ''}`}
            >
              {tag}
            </span>
            {isEditMode && <button onClick={() => handleRemoveTag(index)} className="ml-1 text-red-500" aria-label={`Remove ${tag} tag`}>&times;</button>}
          </div>
        ))}
         {isEditMode && <button onClick={handleAddTag} className="text-green-500 text-xs ml-2">+ Tag</button>}
      </div>
    </div>
  );
};

export default ProjectCard;