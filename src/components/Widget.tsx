import React from 'react';
import { ChatTeardropDots } from 'phosphor-react';

export const Widget = () => {
  return (
    <div className="absolute bottom-4 right-4">
      <p>Hello World!</p>

      <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden hover:max-w-auto group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
};