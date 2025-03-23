import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-center px-4 py-20">
      {/* Avatar */}
      <div className="mx-auto w-32 h-32 relative mb-6">
        <Image
          src="/profile.png"
          alt="Paulo Azedo"
          fill
          className="rounded-full object-cover border-4 border-gray-300 shadow-md"
          sizes="128px"
          priority
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Paulo Azedo</h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
        Senior Systems Engineer & Solutions Architect passionate about infrastructure, automation, and building resilient systems. Focused on secure, scalable, and efficient solutions.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/PauloAzedo_Resume.pdf" target="_blank">
          <span className="inline-block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            View Resume
          </span>
        </Link>
        <Link href="/projects">
          <span className="inline-block border border-gray-900 text-gray-900 px-6 py-2 rounded hover:bg-gray-900 hover:text-white transition">
            View Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="inline-block border border-gray-900 text-gray-900 px-6 py-2 rounded hover:bg-gray-900 hover:text-white transition">
            Get in Touch
          </span>
        </Link>
      </div>
    </section>
  );
}