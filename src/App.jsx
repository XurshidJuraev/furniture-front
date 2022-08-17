import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home'
import Restaruant from './pages/Food/restaruant/restaruant';
import Product from './pages/Food/product/product';
import Milliy from './pages/Food/milliy/milliy';
import MilliyProduct from './pages/Food/product/milliyProduct/milliyProduct';
import NewRestaran from './pages/new/newRestarunats/newRestarunats';
import NewProduct from './pages/new/newProduct/newProduct';
import DeleteProduct from './pages/delete/deleteProduct/deleteProduct';
import DeleteRest from './pages/delete/deleteRestaruant/deleteRestaruant';
import DelHome from './pages/delete/deleteHome/deleteHome';
import DelRestHome from './pages/delete/deleteRestHome/delrestHome';
import DeleteProductMilliy from './pages/delete/delMilliy/delMilliy';
import DeleteRestMilliy from './pages/delete/deleteMilliyRest/deleteMilliyRest';
import NewProdHome from './pages/new/newProductHome/newProductHome';
import NewMilliyRestaran from './pages/new/newMilliyRest/newMilliyRest';
import NewMilliyProduct from './pages/new/newMilliyProd/newMilliyProd';
import NewREstHome from './pages/new/newRestHome/newProductHome';
import Order from './pages/Home/order/order';

function App() {
  return (
    <main>
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='restaruant' element={<Restaruant />} />
				<Route path='order' element={<Order />} />
				<Route path='product' element={<Product />} />
				<Route path='product/milliy' element={<MilliyProduct />} />
				<Route path='milliy' element={<Milliy />} />
				<Route path='newRest' element={<NewRestaran />} />
				<Route path='newMilRest' element={<NewMilliyRestaran />} />
				<Route path='newMilProd' element={<NewMilliyProduct />} />
				<Route path='newProd' element={<NewProduct />} />
				<Route path='newProdHome' element={<NewProdHome />} />
				<Route path='newRestHome' element={<NewREstHome />} />
				<Route path='delProd' element={<DeleteProduct />} />
				<Route path='delRest' element={<DeleteRest />} />
				<Route path='delRestHome' element={<DelRestHome />} />
				<Route path='delHome' element={<DelHome />} />
				<Route path='delMilliyRest' element={<DeleteRestMilliy />} />
				<Route path='delMilliyProd' element={<DeleteProductMilliy />} />
			</Routes>
		</main>
  );
}

export default App;
