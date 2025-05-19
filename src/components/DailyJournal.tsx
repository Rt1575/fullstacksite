import React, { useState } from 'react';

const DailyJournal: React.FC = () => {
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setIsSaving(true);
    // Simulate autosave
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-serif text-gray-800 mb-4">Daily Journal</h2>

      {/* Date Selection */}
      <div className="mb-4">
        <label htmlFor="journal-date" className="block text-sm font-medium text-gray-700 mb-1">
          Select Date
        </label>
        <input
          id="journal-date"
          type="date"
          className="bg-white/50 border border-pink-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Formatting Toolbar */}
      <div className="flex gap-2 mb-4 p-2 bg-white/50 rounded-lg">
        <button className="p-2 text-gray-600 hover:text-pink-600 transition" aria-label="Bold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h8a4 4 0 100-8H6v8zm0 0h8a4 4 0 110 8H6v-8z" />
          </svg>
        </button>
        <button className="p-2 text-gray-600 hover:text-pink-600 transition" aria-label="Italic">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l-4 4-4-4" />
          </svg>
        </button>
        <button className="p-2 text-gray-600 hover:text-pink-600 transition" aria-label="List">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Journal Text Area */}
      <div className="relative">
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full h-48 bg-white/50 border border-pink-200 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
          placeholder="How are you feeling today?"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {content.length} characters
          </span>
          {isSaving && (
            <span className="text-sm text-pink-600 animate-pulse">
              Saving...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyJournal; 