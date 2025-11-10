'use client';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { initialData } from '../constants/constants';

const Home: React.FC = () => {
  const data = initialData;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 bg-gray-900/50 backdrop-blur-sm">
        <Header data={data.header} />
        <main>
          <Hero name={data.name} data={data.hero} />
          <Projects data={data.projects} isEditMode={false} onUpdate={function (path: string, value: any): void {
            throw new Error('Function not implemented.');
          } } onAdd={function (path: string, newItem: any): void {
            throw new Error('Function not implemented.');
          } } onRemove={function (path: string, index: number): void {
            throw new Error('Function not implemented.');
          } } />
          <About data={data.about} isEditMode={false} onUpdate={function (path: string, value: any): void {
            throw new Error('Function not implemented.');
          } } />
          <Experience data={data.experience} isEditMode={false} onUpdate={function (path: string, value: any): void {
            throw new Error('Function not implemented.');
          } } />
          <Certifications data={data.certifications} isEditMode={false} onUpdate={function (path: string, value: any): void {
            throw new Error('Function not implemented.');
          } } onAdd={function (path: string, newItem: any): void {
            throw new Error('Function not implemented.');
          } } onRemove={function (path: string, index: number): void {
            throw new Error('Function not implemented.');
          } } />
        </main>
        <Footer data={data.footer} isEditMode={false} onUpdate={function (path: string, value: any): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
    </div>
  );
};

export default Home;