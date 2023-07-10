import ShoppingCart from './pages/cart/cart';
import { EditProfile } from './pages/admin/editProfile/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//se importa  Routes para rodear las diferentes direcciones que tendra la aplicacion que se definiran con route

function App() {
	return (
		<div className="App">
		<Router>
			<Routes>
				<Route path='/pages/cart/cart' element={<ShoppingCart />}/>
        <Route path='/pages/admin/editProfile/profile' element={<EditProfile />}></Route>
			</Routes>		
		</Router>	
		</div>		
	);
}
export default App;
