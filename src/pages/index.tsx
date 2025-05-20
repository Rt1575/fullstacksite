import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import EmotionTracker from '../components/EmotionTracker';
import SongRecommender from '../components/SongRecommender';
import DailyJournal from '../components/DailyJournal';
import MoodPicker from '../components/MoodPicker';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Head>
        <title>Mind Mosaic - Your Emotional Journey</title>
        <meta name="description" content="Track your emotional well-being with Mind Mosaic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-rose-200 to-pink-200 shadow-lg">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-serif text-xl">MM</span>
              </div>
              <h1 className="ml-3 text-2xl font-serif text-gray-800">Mind Mosaic</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {session?.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="text-gray-700 hover:text-pink-600 transition"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <EmotionTracker />
          </div>
          <div className="md:col-span-1">
            <SongRecommender />
          </div>
          <div className="md:col-span-1">
            <DailyJournal />
          </div>
          <div className="md:col-span-1">
            <MoodPicker />
          </div>
        </div>
      </main>
    </div>
  );
} 