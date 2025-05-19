import React, { useState } from 'react';
import { useSongs } from '../hooks/useSongs';
import type { Song } from '../lib/db/schema';

const SongRecommender: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { songs, loading, error } = useSongs({ mood: currentSong?.mood });

  const handlePlayPause = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
      // Here you would implement actual audio playback logic
    }
  };

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // Here you would implement actual audio playback logic
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-rose-100 to-pink-200 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Song Recommender</h2>
        <div className="animate-pulse">
          <div className="h-48 bg-white/50 rounded-lg mb-4" />
          <div className="h-32 bg-white/50 rounded-lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-rose-100 to-pink-200 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Song Recommender</h2>
        <div className="text-red-600">Error loading songs: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-rose-100 to-pink-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-serif text-gray-800 mb-4">Song Recommender</h2>

      {/* Media Player */}
      <div className="bg-white/50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-4">
          <div 
            className="w-16 h-16 bg-gradient-to-br from-rose-300 to-pink-400 rounded-lg shadow-md"
            style={{
              backgroundImage: currentSong?.albumArt ? `url(${currentSong.albumArt})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">
              {currentSong?.title || 'No song selected'}
            </h3>
            <p className="text-sm text-gray-600">
              {currentSong?.artist || 'Select a song to play'}
            </p>
          </div>
          <button 
            className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
            onClick={handlePlayPause}
            disabled={!currentSong}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isPlaying ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-white/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          {currentSong ? `More ${currentSong.mood} songs` : 'Recommended for your mood'}
        </h3>
        <div className="space-y-3">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => handleSongSelect(song)}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/70 transition"
            >
              <div 
                className="w-10 h-10 bg-gradient-to-br from-rose-200 to-pink-300 rounded-md"
                style={{
                  backgroundImage: `url(${song.albumArt})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-800">{song.title}</p>
                <p className="text-xs text-gray-600">{song.artist}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">
                {song.mood}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongRecommender; 