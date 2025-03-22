import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md px-4 py-3 sticky top-0 z-10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-xl font-bold">Paulo Azedo</div>
          <div className="space-x-4 hidden md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600 text-sm font-medium">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-grow px-4 py-10 max-w-4xl mx-auto w-full">{children}</main>
      <footer className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Paulo Azedo. All rights reserved.
      </footer>
    </div>
  );
}
