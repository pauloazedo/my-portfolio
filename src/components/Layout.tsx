import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Paulo Azedo</h1>
          <ul className="flex space-x-4 text-sm font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/certifications">Certifications</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
