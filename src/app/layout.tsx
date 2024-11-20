import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-300 to-blue-300 min-h-screen">
        <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Logo
              </Link>
              <div className="hidden md:flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
