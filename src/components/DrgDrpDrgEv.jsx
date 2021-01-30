import React, { useState } from 'react';
import data from '../mock';

const DrgDrpDrgEv = () => {
	const [itemArr, setItemArr] = useState(data);
	const [currMovingItemId, setCurrMovingItemId] = useState(null);

	const handleDragStart = (ev) => {
		setCurrMovingItemId(ev.target.getAttribute('data-drag'));
	};

	const handleDragEnter = (ev) => {
		const switchWithItemId = ev.target.getAttribute('data-drag');
		if (switchWithItemId && switchWithItemId !== currMovingItemId) {
			const currMovingIdx = itemArr.findIndex((item) => item.id === currMovingItemId);
			const currOnIdx = itemArr.findIndex((item) => item.id === switchWithItemId);
			setItemArr(replaceTwoIndexInArray(itemArr, currMovingIdx, currOnIdx));
		}
	};

	const handleDragOver = (ev) => ev.preventDefault();

	const handleDragEnd = () => setCurrMovingItemId(null);

	const replaceTwoIndexInArray = (arr, fromIndex, toIndex) => {
		let newArr = [...arr];
		newArr.splice(fromIndex, 1);
		newArr.splice(toIndex, 0, arr[fromIndex]);
		return newArr;
	};

	return (
		<div className="DrgDrpDrgEv">
			<h2>Dragging with drag listener</h2>
			<div className="grid-drag-drop">
				{itemArr.map((item) => {
					const isDragging = currMovingItemId === item.id;
					return (
						<div
							className={`item ${isDragging ? 'dragging' : ''}`}
							key={item.id}
							draggable="true"
							data-drag={item.id}
							style={{ backgroundColor: `${item.bcColor}` }}
							onDragStart={handleDragStart}
							onDragEnter={handleDragEnter}
							onDragOver={handleDragOver}
							onDragEnd={handleDragEnd}
						>
							<span>{item.name}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DrgDrpDrgEv;
