import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Protected Route for Profile and nested routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Route>

      {/* Dynamic Route */}
      <Route path="/blog/:postId" element={<BlogPost />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;