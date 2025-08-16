export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop and Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPhone</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Watch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirPods</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Music</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple TV+</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Fitness+</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple News+</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Arcade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Apple Store</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find a Store</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Genius Bar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Today at Apple</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Summer Camp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Store App</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple and Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop for Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple and Education</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop for Education</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple and Healthcare</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">Copyright © 2025 Apple Inc. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sales Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Legal</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
