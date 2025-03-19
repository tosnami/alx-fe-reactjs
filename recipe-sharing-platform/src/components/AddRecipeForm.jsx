import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Step field added here
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if fields are empty
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
    } else {
      // Here you would typically send the form data to your backend
      const newRecipe = {
        title,
        ingredients,
        steps,
      };

      console.log(newRecipe); // Log the new recipe data
      setError(''); // Reset error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white shadow-md rounded-lg">
      {/* Error message display */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Title input */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Ingredients input */}
      <div>
        <label htmlFor="ingredients" className="block text-sm font-semibold">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Steps input */}
      <div>
        <label htmlFor="steps" className="block text-sm font-semibold">Preparation Steps</label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
