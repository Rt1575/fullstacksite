import React, { useState } from 'react';

const moods = [
  { emoji: '😊', label: 'Happy', color: 'bg-yellow-100' },
  { emoji: '😌', label: 'Calm', color: 'bg-blue-100' },
  { emoji: '😔', label: 'Sad', color: 'bg-gray-100' },
  { emoji: '😡', label: 'Angry', color: 'bg-red-100' },
  { emoji: '😴', label: 'Tired', color: 'bg-purple-100' },
  { emoji: '🤔', label: 'Thoughtful', color: 'bg-green-100' },
];

const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-serif text-gray-800 mb-4">How are you feeling?</h2>

      <div className="relative w-64 h-64 mx-auto mb-4">
        {moods.map((mood, index) => {
          const angle = (index * 360) / moods.length;
          const radius = 100; // Distance from center
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                selectedMood === mood.label
                  ? 'ring-4 ring-yellow-400 scale-110'
                  : 'ring-2 ring-pink-200'
              } ${mood.color}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              aria-label={`Select ${mood.label} mood`}
            >
              <span className="text-2xl">{mood.emoji}</span>
            </button>
          );
        })}

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/50 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-sm text-gray-600 font-medium">
            {selectedMood || 'Select'}
          </span>
        </div>
      </div>

      {/* Selected mood display */}
      {selectedMood && (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-800">
            You're feeling {selectedMood.toLowerCase()}
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodPicker; 