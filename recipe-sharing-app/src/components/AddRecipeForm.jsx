import { useState } from "react";
import { useRecipeStore } from "../recipeStore"; // تأكد من صحة المسار

const AddRecipeForm = () => {
  // استخدام Zustand لجلب دالة إضافة الوصفة
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // تعريف حالات الإدخال
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // دالة معالجة الإرسال
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim()) {
      addRecipe({ id: Date.now(), title, description });

      // إعادة تعيين الحقول بعد الإضافة
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;