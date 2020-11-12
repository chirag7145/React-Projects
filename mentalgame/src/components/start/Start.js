import React from 'react';
import PropTypes from 'prop-types';

const Start = ({ getLevel, getGame }) => {
	const onClick = (e) => {
		const mode = e.target.getAttribute('id');
		if (mode === 'easy') {
			getLevel(0);
		} else if (mode === 'medium') {
			getLevel(1);
		} else {
			getLevel(2);
		}

		e.preventDefault();
	};

	const onSubmit = (e) => {
		getGame(1);
		e.preventDefault();
	};

	return (
		<div className='container'>
			<div className='rows'>
				<div className='levels'>
					<button id='easy' onClick={onClick}>
						Easy
					</button>
					<button id='medium' onClick={onClick}>
						Medium
					</button>
					<button id='hard' onClick={onClick}>
						Hard
					</button>
				</div>
				<button className='levels' id='start-game' onClick={onSubmit}>
					Start Game
				</button>
			</div>
		</div>
	);
};

Start.propTypes = {
	getLevel: PropTypes.func.isRequired,
	getGame: PropTypes.func.isRequired,
};

export default Start;
