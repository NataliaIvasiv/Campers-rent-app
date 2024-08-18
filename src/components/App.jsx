import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

function App() {
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const Favourites = lazy(() => import('../pages/Favourites/Favourites'));
  const Catalog = lazy(() => import('../pages/Catalog/Catalog'));

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
