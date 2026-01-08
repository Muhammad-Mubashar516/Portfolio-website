import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-yellow-500">Don</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
        Full Stack Web Developer & AI Enthusiast
      </h2>
      <p className="max-w-2xl text-lg text-gray-300 mb-8 leading-relaxed">
        Building robust web applications with **MERN & Django**. 
        Currently integrating Artificial Intelligence into modern web solutions.
      </p>
      
      <div className="flex gap-4">
        <Link href="/projects" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
          View My Work
        </Link>
        <Link href="/contact" className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition">
          Contact Me
        </Link>
      </div>
    </div>
  );
}