import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '', // This will store the preparation steps
  });

  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '', // Error for the steps field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!formData.steps) newErrors.steps = 'Steps are required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data (you could send this data to an API or state)
      console.log('Recipe added:', formData);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-3xl font-semibold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label htmlFor="ingredients" className="block text-lg">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps Field */}
        <div>
          <label htmlFor="steps" className="block text-lg">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="6"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
