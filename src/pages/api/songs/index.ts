import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/db/schema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { mood } = req.query;
      
      const songs = await prisma.song.findMany({
        where: mood ? { mood: mood as string } : undefined,
        orderBy: { createdAt: 'desc' },
        take: 10,
      });

      res.status(200).json(songs);
    } catch (error) {
      console.error('Error fetching songs:', error);
      res.status(500).json({ error: 'Failed to fetch songs' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, artist, albumArt, mood, audioUrl, duration } = req.body;

      const song = await prisma.song.create({
        data: {
          title,
          artist,
          albumArt,
          mood,
          audioUrl,
          duration,
        },
      });

      res.status(201).json(song);
    } catch (error) {
      console.error('Error creating song:', error);
      res.status(500).json({ error: 'Failed to create song' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 