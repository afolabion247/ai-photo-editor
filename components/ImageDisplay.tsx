
import React from 'react';
import Loader from './Loader';
import { ImageIcon, AlertTriangleIcon } from './IconComponents';

interface ImageDisplayProps {
  originalImageUrl: string | null | undefined;
  editedImageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImageUrl, editedImageUrl, isLoading, error }) => {
  if (!originalImageUrl) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-base-content bg-base-100 rounded-lg p-8">
        <ImageIcon className="w-24 h-24 mb-4 opacity-50" />
        <h2 className="text-2xl font-bold text-white">Your Images Will Appear Here</h2>
        <p className="mt-2">Upload a photo and describe an edit to get started.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold mb-2 text-white">Before</h3>
        <div className="aspect-square w-full bg-base-100 rounded-lg overflow-hidden shadow-inner">
          <img src={originalImageUrl} alt="Original" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold mb-2 text-white">After</h3>
        <div className="aspect-square w-full bg-base-100 rounded-lg overflow-hidden shadow-inner flex items-center justify-center">
          {isLoading && <Loader />}
          {error && !isLoading && (
            <div className="text-center p-4 text-red-400">
               <AlertTriangleIcon className="w-12 h-12 mx-auto mb-2" />
              <p className="font-semibold">Generation Failed</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          {editedImageUrl && !isLoading && !error && (
            <img src={editedImageUrl} alt="Edited" className="w-full h-full object-contain" />
          )}
          {!editedImageUrl && !isLoading && !error && (
             <div className="text-center p-4 text-base-content">
               <p>Your enhanced image will appear here.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
