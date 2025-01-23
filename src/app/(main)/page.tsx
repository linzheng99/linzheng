export default function Home() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="p-8 rounded-lg bg-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Section {i + 1}</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
