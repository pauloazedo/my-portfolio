import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about-me' },
  { label: 'Experience', href: '/experience' },
  { label: 'Tools', href: '/tools' },
  { label: 'Education', href: '/education' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left section: hamburger + name */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none sm:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Site title */}
            <Link href="/" className="text-lg font-bold whitespace-nowrap">
              Paulo Azedo
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex space-x-6">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:underline">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="sm:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block py-2 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Content starts directly below header now */}
      <main className="flex-grow px-4 py-12">
        <div className="max-w-4xl w-full mx-auto">{children}</div>
      </main>

      <footer className="bg-white text-center text-sm py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Paulo Azedo. All rights reserved.
      </footer>
    </div>
  );
}