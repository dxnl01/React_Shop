import './App.css';
import Login from './login/app';
import Registration from './register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//se importa  Routes para rodear las diferentes direcciones que tendra la aplicacion que se definiran con route

function App() {
	return (
		<div className="App">
		<Router>
			<Routes>
				<Route path='/login' element={<Login />}/>		
				<Route path='/register' element={<Registration />}/>
			</Routes>		
		</Router>	
		</div>		
	);
}
export default App;
