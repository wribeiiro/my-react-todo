import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../Button/Button";
import "./TaskDetails.css";

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();
	const [task, setTaskData] = useState({});

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem("mytodos")) ?? [];
		const selectedTask = tasks.filter((task) => task.uuid === params.uuid);

		setTaskData(selectedTask[0]);
	}, []);

	const handleBackButtonClick = () => {
		history.goBack();
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Back</Button>
			</div>
			<div className="task-details-container">
				<h2>{task.title}</h2>
				<p>{task.uuid}</p>
			</div>
		</>
	);
};

export default TaskDetails;
