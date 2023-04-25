import { Route, Routes } from 'react-router-dom';
import './Nutshell.css';
import { Authorized } from './components/views/authorized.js';
import { Login } from './components/auth/login.js';
import { Register } from './components/auth/register.js';
import { NavBar } from './components/nav/navBar.js';
import { ApplicationViews } from './components/views/appViews.js';

export const Nutshell = () => {
	return <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
          <NavBar/>
          <ApplicationViews/>
        </>
			</Authorized>


		} />
	</Routes>
}