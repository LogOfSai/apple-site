import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="relative">
      <Scene />
      <section
        id="hero"
        className="h-screen flex items-center justify-center relative"
      >
        <div className="text-center mt-64 z-10">
          <h1 className="text-6xl font-bold mb-5">Welcome to Our 3D World</h1>
          <p className="text-xl">Scroll down to explore</p>
        </div>
      </section>
      <section
        id="section1"
        className="h-screen flex items-center justify-start relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Discover Innovation</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section2"
        className="h-screen flex items-center justify-end relative"
      >
        <div className="container mx-auto px-6">
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
