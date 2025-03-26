export const fetchUserData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return await response.json();
  };
  
  export const fetchAdvancedSearchResults = async (username, location, repos) => {
    let query = '';
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>=${repos} `;
  
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`);
    if (!response.ok) {
      throw new Error('Search failed');
    }
    return await response.json();
  };