import Link from "next/link";
import { FaDownload } from "react-icons/fa"; // Icon import kiya

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Hi, I'm <span className="text-yellow-500">Don</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
        Full Stack Web Developer & AI Enthusiast
      </h2>
      
      <p className="max-w-2xl text-lg text-gray-300 mb-10 leading-relaxed">
        Building robust web applications with <span className="font-bold text-white">MERN & Django</span>. 
        Currently integrating Artificial Intelligence into modern web solutions.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <Link 
          href="/projects" 
          className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg"
        >
          View My Work
        </Link>
        
        {/* 👇 RESUME DOWNLOAD BUTTON */}
        <a 
          href="/Resume.pdf" 
          download="Don_Developer_Resume.pdf" // Download hone par ye naam aayega
          className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition shadow-lg"
        >
          <FaDownload /> Download CV
        </a>
      </div>

    </div>
  );
}