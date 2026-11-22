import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './App.css';
import Overview from './components/Overview';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Createproduct from './components/Createproduct';

function App() {
  return (


  <>


  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/store" element={<Store/>}/>
        <Route path='/create' element={<Createproduct/>}/>



        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
    

    </div>




    </>
  );
}

export default App;





