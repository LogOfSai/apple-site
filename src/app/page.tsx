import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="relative">
      <Scene />
      <section
        id="hero"
        className="h-screen flex items-end justify-center relative"
      >
        <div id="text-1" className="text-center mb-32 z-10">
          <h1 className="text-6xl font-bold mb-5">Meet the MacBook Pro</h1>
          <p className="text-xl">Power re-imagined.</p>
        </div>
      </section>
      <section
        id="section1"
        className="h-screen flex items-center justify-start relative"
      >
        <div className="container mx-auto px-6">
          <div id="text-2" className="max-w-lg opacity-0">
            <h2 className="text-4xl font-bold mb-4">Retina Display</h2>
            <p className="text-xl">
              Razor-sharp text, breathtaking colors, and lifelike tones for an
              immersive visual experience.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section2"
        className="h-screen flex items-center justify-end relative"
      >
        <div id="text-3" className="container mx-auto px-6 opacity-0">
          <div className="max-w-lg ml-auto text-right">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Embrace the Future
            </h2>
            <p className="text-xl text-gray-600">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
