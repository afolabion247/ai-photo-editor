
import React from 'react';
import { WandSparklesIcon } from './IconComponents';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center text-base-content p-8">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <WandSparklesIcon className="w-10 h-10 text-brand-light animate-pulse" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4 text-white">AI is working its magic...</h3>
      <p>Your enhanced image will be ready shortly.</p>
    </div>
  );
};

export default Loader;
