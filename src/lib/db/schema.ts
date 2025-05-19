import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Song = {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  mood: string;
  audioUrl: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
};

export default prisma; 