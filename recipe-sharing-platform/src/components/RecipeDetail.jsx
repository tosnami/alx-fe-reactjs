import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // جلب معرف الوصفة من الرابط
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // البحث عن الوصفة في البيانات الوهمية
    const foundRecipe = recipesData.find((r) => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl mt-10">الوصفة غير موجودة</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-3xl font-bold mt-4">{recipe.name}</h2>
      <p className="text-gray-600 mt-2">{recipe.description}</p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">المكونات:</h3>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">طريقة التحضير:</h3>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700 mt-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;