import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import SingleProductPage from './pages/SingleProductPage';
import AllSales from './pages/AllSales';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from './requests/categories_req';



function App() {

  const dispatch = useDispatch()

  useEffect(() => dispatch(getAllCategories), [])

  const theme = useSelector(state => state.theme.value);
console.log(theme);

  return (
    <div className={theme === 'dark' ? 'dark_theme' : ''} >
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/sales' element={<AllSales />}/>
        <Route path='/categories/:id' element={<ProductsByCategoriesPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
