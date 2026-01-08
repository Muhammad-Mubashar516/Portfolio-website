import { FaGraduationCap, FaUserTie } from "react-icons/fa";

export default function About() {
  return (
    <div className="container-custom py-10">
      <h1 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block mb-10">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-3xl text-yellow-500" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <h3 className="text-xl font-semibold">BS - Information Technology</h3>
          <p className="text-gray-400">University of Education, Lahore</p>
          <p className="text-yellow-500 font-bold mt-2">2024 - 2028</p>
          <p className="mt-4 text-gray-300">
            Focused on Software Engineering, Web Technologies, and Data Structures.
          </p>
        </div>

        {/* Profile */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaUserTie className="text-3xl text-yellow-500" />
            <h2 className="text-2xl font-bold">Professional Summary</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer with a strong command over both 
            **MERN Stack** and **Django**. I specialize in building secure authentication systems, 
            admin dashboards, and complex CRUD applications.
            <br /><br />
            Currently, I am expanding my skillset into **Data Science & AI**, learning how to 
            integrate Machine Learning models into web applications.
          </p>
        </div>
      </div>
    </div>
  );
}