import React from 'react';

const EmotionTracker: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-serif text-gray-800 mb-4">Emotion Tracker</h2>
      
      {/* Timeline View */}
      <div className="bg-white/50 rounded-lg p-4 mb-4">
        <div className="h-48 flex items-end justify-between">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className="w-8 bg-gradient-to-t from-rose-400 to-pink-300 rounded-t-lg"
                style={{ height: `${Math.random() * 100}%` }}
              />
              <span className="text-xs text-gray-600 mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 shadow-sm hover:bg-white/90 transition">
          Week
        </button>
        <button className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 shadow-sm hover:bg-white/90 transition">
          Month
        </button>
        <button className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 shadow-sm hover:bg-white/90 transition">
          Year
        </button>
      </div>

      {/* Mood Indicators */}
      <div className="flex gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-rose-300 mr-2" />
          <span className="text-sm text-gray-700">Happy</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-pink-300 mr-2" />
          <span className="text-sm text-gray-700">Calm</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-rose-400 mr-2" />
          <span className="text-sm text-gray-700">Energetic</span>
        </div>
      </div>
    </div>
  );
};

export default EmotionTracker; 