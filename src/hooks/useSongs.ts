import { useState, useEffect } from 'react';
import type { Song } from '../lib/db/schema';

interface UseSongsProps {
  mood?: string;
}

export function useSongs({ mood }: UseSongsProps = {}) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setLoading(true);
        const url = mood ? `/api/songs?mood=${mood}` : '/api/songs';
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch songs');
        }

        const data = await response.json();
        setSongs(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [mood]);

  const addSong = async (songData: Omit<Song, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(songData),
      });

      if (!response.ok) {
        throw new Error('Failed to add song');
      }

      const newSong = await response.json();
      setSongs((prevSongs) => [newSong, ...prevSongs]);
      return newSong;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add song');
      throw err;
    }
  };

  return {
    songs,
    loading,
    error,
    addSong,
  };
} 