import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // مصفوفة لتخزين الوصفات
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (recipes) => set({ recipes }), // تعيين الوصفات إذا لزم الأمر
}));

export default useRecipeStore;