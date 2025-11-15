
import React from 'react';
import { CameraIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-base-200/80 backdrop-blur-sm sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center gap-4">
        <div className="p-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg">
           <CameraIcon className="w-8 h-8 text-white"/>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          AI Photo Editor
        </h1>
        <span className="text-sm font-mono bg-base-300 text-brand-light px-2 py-1 rounded-md">Nano Banana</span>
      </div>
    </header>
  );
};

export default Header;
