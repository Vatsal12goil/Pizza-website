export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-6 pt-16 pb-20">
      <div className="max-w-4xl text-center space-y-10 -translate-y-12">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Welcome to the <span className="text-[#bf0000]">Pizza Hub</span>
        </h1>

        <h2 className="text-3xl font-semibold text-[#ff4c4c]">
          The ultimate place to track, manage, and enjoy your pizza orders!
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          From crispy crusts to gooey cheese—track your orders, manage your preferences, and savor every slice with ease. Secure, sleek, and built for pizza lovers.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/dashboard"
            className="px-8 py-4 bg-[#bf0000] hover:bg-red-700 rounded-lg text-lg font-medium transition"
          >
            Go to Dashboard
          </a>
          <a
            href="/login"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-lg text-lg font-medium transition border border-gray-300"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  );
}
