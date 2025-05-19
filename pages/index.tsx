import Head from 'next/head'
import EmotionTracker from '../src/components/EmotionTracker'
import SongRecommender from '../src/components/SongRecommender'
import DailyJournal from '../src/components/DailyJournal'
import MoodPicker from '../src/components/MoodPicker'

export default function Home() {
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
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">History</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Settings</a>
            </nav>
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

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="flex justify-around py-3">
          <a href="#" className="text-gray-700 hover:text-pink-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1 block">Home</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs mt-1 block">Stats</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="text-xs mt-1 block">Alerts</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs mt-1 block">Settings</span>
          </a>
        </div>
      </nav>
    </div>
  )
} 