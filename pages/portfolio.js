import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white px-6">
        <h1 className="text-5xl font-bold">🎨 My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <h2 className="text-xl font-semibold">Project {project}</h2>
              <p className="text-sm text-gray-300 mt-2">A description of this amazing project.</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
