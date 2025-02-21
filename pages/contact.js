import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-red-900 text-white px-6">
        <h1 className="text-5xl font-bold">📞 Get in Touch</h1>
        <form className="mt-8 bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-700 text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded bg-gray-700 text-white"></textarea>
          <button type="submit" className="w-full bg-yellow-400 text-black px-6 py-3 rounded text-lg font-bold hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
