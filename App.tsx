
import React, { useState, useCallback } from 'react';
import type { ImageFile } from './types';
import { editImageWithPrompt } from './services/geminiService';
import { fileToGenerativePart } from './utils/fileUtils';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import { WandSparklesIcon } from './components/IconComponents';

export default function App() {
  const [originalImage, setOriginalImage] = useState<ImageFile | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setOriginalImage({
      file: file,
      url: URL.createObjectURL(file),
    });
    setEditedImage(null);
    setError(null);
  };

  const handleEditRequest = useCallback(async () => {
    if (!originalImage || !prompt) {
      setError('Please upload an image and provide a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const imagePart = await fileToGenerativePart(originalImage.file);
      const result = await editImageWithPrompt(imagePart, prompt);
      setEditedImage(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(`An error occurred: ${e.message}`);
      } else {
        setError('An unknown error occurred.');
      }
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, prompt]);

  const canSubmit = originalImage && prompt.trim().length > 0 && !isLoading;

  return (
    <div className="min-h-screen bg-base-100 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">1. Upload Your Photo</h2>
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
          <div className="bg-base-200 p-6 rounded-2xl shadow-lg flex-grow">
            <h2 className="text-xl font-bold mb-4 text-white">2. Describe Your Edit</h2>
            <PromptInput
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleEditRequest}
            disabled={!canSubmit}
            className="w-full flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 ease-in-out disabled:bg-base-300 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-brand-light"
          >
            <WandSparklesIcon />
            {isLoading ? 'Generating...' : 'Enhance Image'}
          </button>
        </div>
        <div className="lg:w-2/3 bg-base-200 p-6 rounded-2xl shadow-lg flex items-center justify-center">
          <ImageDisplay
            originalImageUrl={originalImage?.url}
            editedImageUrl={editedImage}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
}
