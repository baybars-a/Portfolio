import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';

interface ProjectsProps {
  data: Project[];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
  onAdd: (path: string, newItem: any) => void;
  onRemove: (path: string, index: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ data, isEditMode, onUpdate, onAdd, onRemove }) => {
  const handleAddProject = () => {
    onAdd('projects', {
      title: 'New Project',
      description: 'A brief description of the new project.',
      imageUrl: '',
      tags: ['New Tag'],
    });
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-mono text-white-900">
          Projects
        </h2>
        {isEditMode && (
          <button onClick={handleAddProject} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Add Project
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {data.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project}
            isEditMode={isEditMode}
            onUpdate={(field, value) => onUpdate(`projects.${index}.${field}`, value)}
            onRemove={() => onRemove('projects', index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;