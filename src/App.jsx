import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import "./App.css";

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			//const { data } = await axios.get(
			//	"https://jsonplaceholder.cypress.io/todos?_limit=10"
			//);

			const data = JSON.parse(localStorage.getItem("mytodos")) ?? [];

			setTasks(data);
		};

		fetchTasks();
	}, []);

	const handleTaskClick = (taskUuid) => {
		const newTasks = tasks.map((task) => {
			if (task.uuid === taskUuid) {
				return {
					...task,
					completed: !task.completed
				};
			}

			return task;
		});

		setTasks(newTasks);
	};

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [...tasks, {
			title: taskTitle,
			uuid: crypto.randomUUID(),
			completed: false,
		}];

		localStorage.setItem("mytodos", JSON.stringify(newTasks));
		setTasks(newTasks);
	};

	const handleTaskDeletion = (taskUuid) => {
		const newTasks = tasks.filter((task) => task.uuid !== taskUuid);

		localStorage.setItem("mytodos", JSON.stringify(newTasks));
		setTasks(newTasks);
	};

	return (
		<Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<TaskList
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
				<Route path="/:uuid" exact component={TaskDetails} />
			</div>
		</Router>
	);
};

export default App;
