import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // Object to store validation errors

  // Validate function to check for empty fields
  const validate = () => {
    const newErrors = {};
    
    // Check if title, ingredients, or steps are empty
    if (!title) newErrors.title = 'Title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form inputs
    const validationErrors = validate();

    // If there are errors, update state and return early
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, proceed with form submission logic
    const newRecipe = { title, ingredients, steps };
    console.log(newRecipe); // Log the new recipe data (you can send this to a backend)
    
    // Clear errors and form fields after submission
    setErrors({});
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white shadow-md rounded-lg">
      
      {/* Error messages */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 text-sm">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="mb-2">{error}</p>
          ))}
        </div>
      )}

      {/* Title input */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border-gray-300 rounded-md p-2 ${errors.title ? 'border-red-500' : ''}`}
        />
      </div>

      {/* Ingredients input */}
      <div>
        <label htmlFor="ingredients" className="block text-sm font-semibold">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full border-gray-300 rounded-md p-2 ${errors.ingredients ? 'border-red-500' : ''}`}
        />
      </div>

      {/* Steps input */}
      <div>
        <label htmlFor="steps" className="block text-sm font-semibold">Preparation Steps</label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`w-full border-gray-300 rounded-md p-2 ${errors.steps ? 'border-red-500' : ''}`}
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
