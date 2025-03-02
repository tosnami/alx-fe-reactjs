import { useRecipeStore } from "../recipeStore"; // تأكد من صحة المسار

const RecipeList = () => {
  // جلب قائمة الوصفات من Zustand
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;