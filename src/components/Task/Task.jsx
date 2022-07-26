import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const history = useHistory();

	const handleTaskDetailsClick = () => {
		history.push(`/${task.uuid}`);
	};

	return (
		<div
			className="task-container"
			style={task.completed ? { borderLeft: "6px solid #bd93f9" } : {}}
		>
			<div className="task-title" onClick={() => handleTaskClick(task.uuid)}>
				{task.title}
			</div>

			<div className="buttons-container">
                <button
					className="see-task-details-button"
					onClick={handleTaskDetailsClick}
                    title="View"
				>
					<CgInfo />
				</button>
				<button
					className="remove-task-button"
					onClick={() => handleTaskDeletion(task.uuid)}
                    title="Delete"
				>
					<CgClose />
				</button>
			</div>
		</div>
	);
};

export default Task;
