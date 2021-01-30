import React, { useState } from 'react';
import data from '../mock';

const DrgDrpOnMosEv = () => {
	const [itemArr, setItemArr] = useState(data);

	const [isMouseDown, setIsMouseDown] = useState(false);
	const [isMouseMove, setIsMouseMove] = useState(false);
	const [currMovingItemId, setCurrMovingItemId] = useState(null);
	const [pointerDiff, setPointerDiff] = useState({ x: 100, y: 100 });
	const [size, setSize] = useState({ width: 100, height: 100 });

	const handleMouseMove = (ev) => {
		if (isMouseDown) {
			const switchWithItemId = ev.target.getAttribute('data-drag');
			setIsMouseMove(true);
			if (switchWithItemId) setPointerDiff({ x: ev.nativeEvent.offsetX - size.width / 2, y: ev.nativeEvent.offsetY - size.height / 2 });
			else setPointerDiff({ x: pointerDiff.x + ev.movementX, y: pointerDiff.y + ev.movementY });
			if (switchWithItemId && switchWithItemId !== currMovingItemId) {
				const currMovingIdx = itemArr.findIndex((item) => item.id === currMovingItemId);
				const currOnIdx = itemArr.findIndex((item) => item.id === switchWithItemId);
				setItemArr(replaceTwoIndexInArray(itemArr, currMovingIdx, currOnIdx));
			}
		}
	};

	const handleMouseDown = (ev) => {
		setCurrMovingItemId(ev.target.getAttribute('data-drag'));
		setIsMouseDown(true);
		setSize({ width: ev.target.offsetWidth, height: ev.target.offsetHeight });
		setPointerDiff({ x: ev.nativeEvent.offsetX - ev.target.offsetWidth / 2, y: ev.nativeEvent.offsetY - ev.target.offsetHeight / 2 });
	};

	const replaceTwoIndexInArray = (arr, fromIndex, toIndex) => {
		let newArr = [...arr];
		newArr.splice(fromIndex, 1);
		newArr.splice(toIndex, 0, arr[fromIndex]);
		return newArr;
	};

	const handleMouseUpOrLeave = () => {
		setIsMouseMove(false);
		setIsMouseDown(false);
		setCurrMovingItemId(null);
	};

	return (
		<div className="DrgDrpOnMosEv" onMouseLeave={handleMouseUpOrLeave} onMouseUp={handleMouseUpOrLeave}>
			<h2>Is Mouse Down: {isMouseDown ? 'True' : 'False'}</h2>
			<div className="grid-drag-drop" onMouseMove={handleMouseMove}>
				{itemArr.map((item) => {
					const isDragging = currMovingItemId === item.id;
					return (
						<div className={`item ${isDragging ? 'dragging' : ''}`} key={item.id} data-drag={item.id} style={{ backgroundColor: `${item.bcColor}` }} onMouseDown={handleMouseDown}>
							<span>{item.name}</span>
							{isMouseDown && isDragging && isMouseMove && (
								<div
									className="item-clone"
									style={{
										height: `${size.height}px`,
										width: `${size.width}px`,
										transform: `translate(${pointerDiff.x}px, ${pointerDiff.y}px)`,
										backgroundColor: `${item.bcColor}`,
									}}
								>
									<span className="item dragging">{item.name}</span>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DrgDrpOnMosEv;
