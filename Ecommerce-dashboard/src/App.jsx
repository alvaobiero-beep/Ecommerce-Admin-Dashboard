 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductsPage';
import DashboardPage from './pages/DashboardPage';
function Dashboard() {
  return <h1>Welcome to the Admin Dashboard</h1>;
}


function App() {
  return (
    <BrowserRouter>
      <div className='app-layout'>
        <Sidebar />

        <main className='main-content' >

          <Routes>
            <Route path = '/' element = {<landingPage/>} /> 
            <Route path= '/dashboard' element = {< DashboardPage/>} />
            <Route path= '/products' element= {<ProductsPage/>} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>

  
    
    
   
  );
}

export default App;



