import React from 'react';

function App() {
  return (
    <div className="bg-red-500 text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg mb-6">
        This is a simple React app styled with Tailwind CSS.
      </p>
      <button className="bg-white text-red-500 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        Click Me
      </button>
    </div>
  );
}

export default App;