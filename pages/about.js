export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <div className="w-40 h-40 rounded-full border-4 border-blue-400 overflow-hidden">
          <img
            src="/images/profile.jpg" 
            alt="Profile Picture" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-blue-400 mt-6">About Me</h1>
        <p className="text-lg text-gray-300 mt-2">Halo, Saya Sabila Nadjah Ma'ripah</p>
        <p className="text-center text-gray-300 max-w-2xl mt-4">
          Saya adalah seorang developer yang memiliki pengalaman dalam membangun
          website dan aplikasi dengan fokus pada desain yang menarik dan
          fungsionalitas yang optimal.
        </p>
      </div>
    );
  }