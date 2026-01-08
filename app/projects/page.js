export default function Projects() {
  return (
    <div className="container-custom py-10">
      <h1 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block mb-10">Projects</h1>
      
      {/* HIGHLIGHT */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-8 rounded-xl text-center mb-12 shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2">100+ Projects Completed</h2>
        <p className="text-yellow-100 text-lg">
          I have rigorously practiced by building over 100 small to medium scale applications 
          on GitHub to master the core concepts of Web Development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
          <div className="h-40 bg-gray-700 flex items-center justify-center">
            <span className="text-4xl">🔐</span>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Secure Auth System</h3>
            <p className="text-gray-400 text-sm mb-4">
              Full stack authentication using Next.js & Django Djoser. 
              Features: JWT, HttpOnly Cookies, and Admin Dashboard protection.
            </p>
            <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">Next.js</span>
            <span className="text-xs bg-green-900 text-green-200 px-2 py-1 rounded ml-2">Django</span>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
          <div className="h-40 bg-gray-700 flex items-center justify-center">
            <span className="text-4xl">🛒</span>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">E-Commerce Inventory</h3>
            <p className="text-gray-400 text-sm mb-4">
              A CRUD based inventory system with Image & PDF uploads. 
              Includes Search, Filter, and Admin controls.
            </p>
            <span className="text-xs bg-yellow-900 text-yellow-200 px-2 py-1 rounded">MERN Stack</span>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
          <div className="h-40 bg-gray-700 flex items-center justify-center">
            <span className="text-4xl">🏠</span>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">AI House Predictor</h3>
            <p className="text-gray-400 text-sm mb-4">
              An AI-powered web app that predicts house prices based on user input 
              using a Scikit-Learn model trained on real data.
            </p>
            <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded">Python AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}