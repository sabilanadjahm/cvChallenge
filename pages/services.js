import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-900 text-white px-6">
        <h1 className="text-5xl font-bold">💎 My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {["Web Development", "UI/UX Design", "SEO Optimization", "Mobile App Development"].map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <h2 className="text-xl font-semibold">{service}</h2>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
