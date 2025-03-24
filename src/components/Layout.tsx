import { useState } from 'react';
import Link from 'next/link';
import ProfileBanner from './ProfileBanner';

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
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none lg:hidden"
            >
              ☰
            </button>
            <span className="font-bold text-lg">Paulo Azedo</span>
          </div>

          <nav className="hidden lg:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="hover:text-blue-600 cursor-pointer">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="lg:hidden px-4 pb-4">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="block hover:text-blue-600">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <ProfileBanner />

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white shadow-inner mt-8">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Paulo Azedo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}