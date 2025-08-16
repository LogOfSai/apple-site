"use client";

import { Scene } from "@/components";
import { Footer } from "@/components/Footer";

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
        className="h-screen flex items-center justify-start relative"
      >
        <div className="container mx-auto px-6">
          <div id="text-4" className="max-w-lg opacity-0">
            <h2 className="text-7xl font-medium mb-4">iPhone 15 Pro</h2>
            <p className="text-3xl font-light text-gray-500">
              Titanium. So strong. So light. So Pro.
            </p>
          </div>
        </div>
      </section>
      
      <section
        id="section4"
        className="h-screen flex items-center justify-end relative"
      >
        <div className="container mx-auto px-6">
          <div id="text-5" className="max-w-lg ml-auto text-right opacity-0">
            <h2 className="text-7xl font-medium mb-4">AirPods Pro</h2>
            <p className="text-3xl font-light text-gray-500">
              Adaptive Audio. Now playing.
            </p>
          </div>
        </div>
      </section>
      
      <section
        id="section5"
        className="h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 to-purple-900"
      >
        <div className="container mx-auto px-6 text-center">
          <div id="text-6" className="opacity-0">
            <h2 className="text-8xl font-medium mb-8 text-white">Innovation</h2>
            <p className="text-4xl font-light text-gray-300 max-w-4xl mx-auto">
              At Apple, we believe that technology should enhance the human experience. 
              Every product we create is designed with intention, precision, and care.
            </p>
            <div className="mt-12">
              <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-gray-100 transition-colors">
                Explore Our Products
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <Scene />
    </main>
  );
}
