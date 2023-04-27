import { Route, Routes } from 'react-router-dom';
import './Nutshell.css';
import { Authorized } from './components/views/authorized.js';
import { Login } from './components/auth/login.js';
import { Register } from './components/auth/register.js';
import { NavBar } from './components/nav/navBar.js';
import { ApplicationViews } from './components/views/appViews.js';
import { useRef } from 'react';

export const Nutshell = () => {

	const newsRef = useRef(null);
	const chatRef = useRef(null);
	const tasksRef = useRef(null);
	const friendsRef = useRef(null);
	const eventsRef = useRef(null);

	const scrollToNews = () => newsRef.current.scrollIntoView();
	const scrollToChat = () => chatRef.current.scrollIntoView();
	const scrollToTasks = () => tasksRef.current.scrollIntoView();
	const scrollToFriends = () => friendsRef.current.scrollIntoView();
	const scrollToEvents = () => eventsRef.current.scrollIntoView();



	return <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
          <NavBar scrollToNews={scrollToNews} 
					scrollToChat={scrollToChat}
					scrollToTasks={scrollToTasks}
					scrollToFriends={scrollToFriends}
					scrollToEvents={scrollToEvents}
		  />
          <ApplicationViews newsRef={newsRef}
							chatRef={chatRef}
							tasksRef={tasksRef}
							friendsRef={friendsRef}
							eventsRef={eventsRef}
		  />
        </>
			</Authorized>


		} />
	</Routes>
}