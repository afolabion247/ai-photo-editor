
import React from 'react';

interface PromptInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // No additional props needed for now
}

const PromptInput: React.FC<PromptInputProps> = (props) => {
  return (
    <textarea
      {...props}
      placeholder="e.g., 'Make the sky a vibrant sunset with purple clouds', 'Add a small, friendly robot in the corner', 'Turn this into a Van Gogh style painting'"
      className="w-full h-full min-h-[120px] p-4 bg-base-100 border-2 border-base-300 rounded-lg text-base-content placeholder-gray-500 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 resize-none"
    />
  );
};

export default PromptInput;
