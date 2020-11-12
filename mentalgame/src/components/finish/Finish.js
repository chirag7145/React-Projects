import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Finish = ({ score, getGame }) => {
	const [isHigh, setIsHigh] = useState(false);

	const onClick = (e) => {
		getGame(0);
		e.preventDefault();
	};
	let highScore = JSON.parse(localStorage.getItem('score'));
	useEffect(() => {
		console.log(highScore);
		setIsHigh(false);
		if (highScore === null) {
			if (score > 0) {
				setIsHigh(true);
				// eslint-disable-next-line
				highScore = score;
				localStorage.setItem('score', JSON.stringify(highScore));
			}
		} else {
			if (score > highScore) {
				setIsHigh(true);
				highScore = score;
				localStorage.setItem('score', JSON.stringify(highScore));
			}
		}
	}, []);

	return (
		<div className='container'>
			<div className='finish'>
				<h1 className='game-over'>Game Over</h1>
				<h1 className='score-display'>Your Score: {score}</h1>
				{highScore !== null && (
					<h1 className='high-score'>
						{isHigh && <span>New </span>}High Score: {highScore}
					</h1>
				)}
				<button onClick={onClick}>Play Again</button>
			</div>
		</div>
	);
};

Finish.propTypes = {
	score: PropTypes.number.isRequired,
	getGame: PropTypes.func.isRequired,
};

export default Finish;
