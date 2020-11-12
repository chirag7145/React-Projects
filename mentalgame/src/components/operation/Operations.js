import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const Operations = ({ score, level, getGame, getScore }) => {
	const operators = ['+', '-', '*', '/', '%'];

	const [operandA, setOperandA] = useState(0);
	const [operandB, setOperandB] = useState(0);
	const [operator, setOperator] = useState(0);
	const [result, setResult] = useState(0);
	const [time, setTime] = useState(120);

	const airthmetic = () => {
		let z = Math.floor(Math.random() * 5);
		let x, y;
		if (level === 0) {
			x = Math.floor(Math.random() * 100 + 1);
			y = Math.floor(Math.random() * 100 + 1);
			if (z === 2) {
				y = Math.floor(Math.random() * 10 + 1);
			} else if (z === 3) {
				x = y * Math.floor(Math.random() * Math.floor(100 / y) + 1);
			}
		} else if (level === 1) {
			x = Math.floor(Math.random() * 1000 + 1);
			y = Math.floor(Math.random() * 1000 + 1);
			if (z === 2) {
				x = Math.floor(Math.random() * 100 + 1);
				y = Math.floor(Math.random() * 100 + 1);
			} else if (z === 3) {
				x = y * Math.floor(Math.random() * Math.floor(1000 / y) + 1);
			}
		} else {
			x = Math.floor(Math.random() * 10000 + 1);
			y = Math.floor(Math.random() * 10000 + 1);
			if (z === 2) {
				x = Math.floor(Math.random() * 1000 + 1);
				y = Math.floor(Math.random() * 100 + 1);
			} else if (z === 3) {
				x = y * Math.floor(Math.random() * Math.floor(10000 / y) + 1);
			}
		}

		let w;
		if (z === 0) w = x + y;
		if (z === 1) w = x - y;
		if (z === 2) w = x * y;
		if (z === 3) w = x / y;
		if (z === 4) w = x % y;
		setOperandA(x);
		setOperandB(y);
		setOperator(z);
		setResult(w);
	};

	useEffect(() => {
		airthmetic();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1);
			if (time === 0) {
				getGame(2);
			}
		}, 1000);
	});

	const handleKeyUp = (e) => {
		// console.log(e.target.value);
		// console.log(result);
		// console.log(e.keyCode);
		if (e.keyCode === 13) {
			// console.log('Hooray');
			if (parseInt(e.target.value) === result) {
				// console.log('Winner');
				getScore(score + 1);
				airthmetic();
			} else {
				// console.log('Looser');
				getGame(2);
			}
			e.target.value = '';
		}
	};

	const minutes =
		Math.floor(time / 60) < 10
			? '0' + Math.floor(time / 60)
			: Math.floor(time / 60);
	const seconds = time % 60 < 10 ? '0' + (time % 60) : time % 60;

	return (
		<Fragment>
			<div className='score-timer'>
				<h1 id='score'>Score: {score}</h1>
				<h1 id='time'>
					Time: {minutes} : {seconds}
				</h1>
			</div>
			<div className='container'>
				<div className='rows'>
					<div>
						<div className='airthmetic'>
							<div className='box' id='operand1'>
								{' '}
								{operandA}
							</div>
							<div className='box' id='operator'>
								{' '}
								{operators[operator]}
							</div>
							<div className='box' id='operand2'>
								{' '}
								{operandB}
							</div>
						</div>

						<div>
							<input
								type='number'
								name='result'
								id='result'
								onKeyUp={handleKeyUp}
							/>{' '}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Operations.propTypes = {
	score: PropTypes.number.isRequired,
	level: PropTypes.number.isRequired,
	getScore: PropTypes.func.isRequired,
	getGame: PropTypes.func.isRequired,
};

export default Operations;
