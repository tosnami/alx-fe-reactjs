import { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  // إدارة حالة النموذج
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [error, setError] = useState("");

  // تحديث البيانات عند تغيير أي حقل
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // معالجة الإرسال
  const handleSubmit = (event) => {
    event.preventDefault();

    // التحقق من صحة المدخلات
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError("يجب ملء جميع الحقول!");
      return;
    }

    if (formData.ingredients.split(",").length < 2) {
      setError("يجب إدخال مكونين على الأقل، مفصولين بفاصلة.");
      return;
    }

    setError(""); // مسح الأخطاء عند الإدخال الصحيح

    // استدعاء دالة الإضافة
    addRecipe({
      title: formData.title,
      ingredients: formData.ingredients.split(","),
      steps: formData.steps,
    });

    // إعادة تعيين الحقول
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">إضافة وصفة جديدة</h2>

      {/* عرض رسالة الخطأ إن وجدت */}
      {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* حقل عنوان الوصفة */}
        <input
          type="text"
          name="title"
          placeholder="عنوان الوصفة"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* حقل المكونات */}
        <textarea
          name="ingredients"
          placeholder="المكونات (افصل بين كل مكون بفاصلة)"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* حقل خطوات التحضير */}
        <textarea
          name="steps"
          placeholder="خطوات التحضير"
          value={formData.steps}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* زر الإرسال */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          إضافة الوصفة
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;