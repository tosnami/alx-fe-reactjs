import React, { useEffect } from 'react';
import useRecipeStore from './store/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    // بيانات وصفات افتراضية لاختبار التطبيق
    const mockRecipes = [
      { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
      { id: 2, title: 'Chicken Curry', description: 'Spicy and creamy Indian-style curry.' },
      { id: 3, title: 'Chocolate Cake', description: 'Rich and moist chocolate cake.' }
    ];
    
    setRecipes(mockRecipes);
    filterRecipes();  // تطبيق الفلترة الأولية
  }, [setRecipes, filterRecipes]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;