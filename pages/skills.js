import Head from "next/head";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white px-6">
        <h1 className="text-5xl font-bold">🚀 My Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl text-center font-semibold text-lg hover:scale-110 transition">
              {skill}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
