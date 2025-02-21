import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 via-pink-600 to-red-500 text-white text-center px-4">
        <h1 className="text-6xl font-extrabold drop-shadow-lg animate-pulse">✨ Welcome to My Portfolio ✨</h1>
        <p className="text-xl mt-6 max-w-2xl">I create amazing digital experiences with modern web technologies.</p>
        <Link href="/portfolio" className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition">
          View My Work
        </Link>
      </main>
    </>
  );
}
