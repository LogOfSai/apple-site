"use client";

import { Scene, Footer } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <section
        id="hero"
        className="h-screen flex items-end justify-center relative"
      >
        <div id="text-1" className="text-center mb-64 z-10">
          <h1 className="text-8xl font-medium mb-5">Meet the MacBook Pro M4</h1>
          <p className="text-4xl font-light text-gray-500">
            Power re-imagined.
          </p>
        </div>
      </section>
      <section
        id="section1"
        className="h-screen flex items-center justify-start relative"
      >
        <div className="container mx-auto px-6">
          <div id="text-2" className="max-w-lg opacity-0">
            <h2 className="text-7xl font-medium mb-4">Retina Display</h2>
            <p className="text-3xl font-light text-gray-500">
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
            <h2 className="text-7xl font-medium mb-4 text-gray-800">
              Top of Class Performance
            </h2>
            <p className="text-3xl font-light text-gray-500">
              Handle the most computationally intensive tasks with ease.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section3"
        className="h-screen flex items-center justify-center relative"
      >
        <div id="text-4" className="container mx-auto px-6 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-7xl font-medium mb-6">M4 Chip</h2>
            <p className="text-3xl font-light text-gray-500 mb-8">
              The most advanced chip ever built for a personal computer.
            </p>
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-medium mb-3">CPU Performance</h3>
                <p className="text-lg text-gray-600">Up to 1.8x faster than M1</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-3">GPU Performance</h3>
                <p className="text-lg text-gray-600">Up to 2.2x faster than M1</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section4"
        className="h-screen flex items-center justify-start relative"
      >
        <div id="text-5" className="container mx-auto px-6 opacity-0">
          <div className="max-w-lg">
            <h2 className="text-7xl font-medium mb-4">All-Day Battery</h2>
            <p className="text-3xl font-light text-gray-500">
              Up to 22 hours of video playback. Work, create, and play longer than ever.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section5"
        className="h-screen flex items-center justify-end relative"
      >
        <div id="text-6" className="container mx-auto px-6 opacity-0">
          <div className="max-w-lg ml-auto text-right">
            <h2 className="text-7xl font-medium mb-4">Connectivity</h2>
            <p className="text-3xl font-light text-gray-500">
              Multiple Thunderbolt 4 ports, HDMI, and advanced wireless capabilities.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section6"
        className="h-screen flex items-center justify-center relative bg-black text-white"
      >
        <div id="text-7" className="container mx-auto px-6 opacity-0 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-8xl font-medium mb-6">Pro. Beyond.</h2>
            <p className="text-4xl font-light text-gray-300">
              The ultimate laptop for professionals.
            </p>
          </div>
        </div>
      </section>
      <Scene />
      <Footer />
    </main>
  );
}
