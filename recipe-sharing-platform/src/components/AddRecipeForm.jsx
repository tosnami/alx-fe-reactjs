import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    // Format the ingredients as an array
    const ingredientsArray = ingredients.split(",").map((item) => item.trim());

    // Ensure at least two ingredients
    if (ingredientsArray.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(),
      name: title,
      description: "A user-submitted recipe.",
      ingredients: ingredientsArray,
      instructions: instructions.split(".").map((step) => step.trim()),
      image: "https://source.unsplash.com/800x600/?food", // Placeholder image
    };

    // Call the function to add the recipe
    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Instructions */}
        <textarea
          placeholder="Preparation Steps (separated by periods)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;