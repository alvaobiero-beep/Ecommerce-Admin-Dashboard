import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





