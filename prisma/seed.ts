import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const songs = [
  {
    title: 'Peaceful Morning',
    artist: 'Sarah Smith',
    albumArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop',
    mood: 'Calm',
    audioUrl: 'https://example.com/songs/peaceful-morning.mp3',
    duration: 180,
  },
  {
    title: 'Sunny Day',
    artist: 'John Doe',
    albumArt: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&h=500&fit=crop',
    mood: 'Happy',
    audioUrl: 'https://example.com/songs/sunny-day.mp3',
    duration: 240,
  },
  {
    title: 'Rainy Thoughts',
    artist: 'Emma Wilson',
    albumArt: 'https://images.unsplash.com/photo-1501691223387-dd0506c89ac8?w=500&h=500&fit=crop',
    mood: 'Reflective',
    audioUrl: 'https://example.com/songs/rainy-thoughts.mp3',
    duration: 210,
  },
  {
    title: 'Midnight Dreams',
    artist: 'Luna Park',
    albumArt: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?w=500&h=500&fit=crop',
    mood: 'Calm',
    audioUrl: 'https://example.com/songs/midnight-dreams.mp3',
    duration: 195,
  },
  {
    title: 'Dancing in the Sun',
    artist: 'Max Joy',
    albumArt: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500&h=500&fit=crop',
    mood: 'Happy',
    audioUrl: 'https://example.com/songs/dancing-sun.mp3',
    duration: 225,
  },
];

async function main() {
  console.log('Start seeding...');
  
  for (const song of songs) {
    const createdSong = await prisma.song.create({
      data: song,
    });
    console.log(`Created song with id: ${createdSong.id}`);
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 