import { FaReact, FaNodeJs, FaPython, FaDatabase, FaBrain } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiMongodb, SiPostgresql, SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";

export default function Skills() {
  return (
    <div className="container-custom py-10">
      <h1 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block mb-10">My Skills</h1>

      {/* WEB DEVELOPMENT */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaReact className="text-blue-400"/> Full Stack Web Development (Expert)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
          ].map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded text-center hover:bg-gray-700 transition">
              <div className="text-4xl mb-2 flex justify-center">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-400 bg-gray-900 p-4 rounded border-l-4 border-green-500">
          Capable of building complete Auth Systems (JWT, Cookies), Admin Dashboards, 
          and Complex CRUD operations with Form Validation.
        </p>
      </div>

      {/* AI & DATA SCIENCE */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaBrain className="text-purple-400"/> AI & Data Science (Learning Phase)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Python", icon: <FaPython /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "Scikit-Learn", icon: <SiScikitlearn /> },
            { name: "SQL", icon: <FaDatabase /> },
          ].map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded text-center hover:bg-gray-700 transition">
              <div className="text-4xl mb-2 flex justify-center">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-400 bg-gray-900 p-4 rounded border-l-4 border-yellow-500">
          Working knowledge of Data Cleaning, Preprocessing, and building Basic Machine Learning Models. 
          Currently integrating these models with Web Backends.
        </p>
      </div>
    </div>
  );
}