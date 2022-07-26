import React from "react";
import Task from "../Task/Task";

const TaskList = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.uuid}
					task={task}
					handleTaskClick={handleTaskClick}
					handleTaskDeletion={handleTaskDeletion}
				/>
			))}
		</>
	);
};

export default TaskList;
