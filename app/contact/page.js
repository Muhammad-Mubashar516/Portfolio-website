import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container-custom py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block mb-10">Get In Touch</h1>
      
      <div className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-2xl text-center">
        <p className="text-xl text-gray-300 mb-8">
          I am currently available for **Internships** and **Junior Developer** roles.
          Feel free to reach out!
        </p>

        <div className="space-y-6">
          
          {/* Email */}
          <a href="mailto:mubasharmaher686@gmail.com" className="flex items-center justify-center gap-4 text-xl hover:text-yellow-400 transition bg-gray-700 p-4 rounded-lg">
            <FaEnvelope className="text-3xl text-red-500" />
            mubasharmaher686@gmail.com
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/923297766036" target="_blank" className="flex items-center justify-center gap-4 text-xl hover:text-yellow-400 transition bg-gray-700 p-4 rounded-lg">
            <FaWhatsapp className="text-3xl text-green-500" />
            +92 3297766036
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8">
            <a href="https://github.com/Muhammad-Mubashar516" target="_blank" className="text-5xl hover:text-gray-400 transition">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mubashar-ameen-637359397/" target="_blank" className="text-5xl text-blue-500 hover:text-blue-400 transition">
                <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}