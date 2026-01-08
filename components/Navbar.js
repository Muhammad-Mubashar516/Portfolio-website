import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center h-16">
        {/* Logo Name */}
        <Link href="/" className="text-2xl font-bold text-yellow-500 tracking-wide">
          Mubashar.Dev
        </Link>

        {/* Links */}
        <div className="flex space-x-6 font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/skills" className="hover:text-yellow-400 transition">Skills</Link>
          <Link href="/projects" className="hover:text-yellow-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}