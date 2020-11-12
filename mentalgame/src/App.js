import React, { useState } from 'react';
import Start from './components/start/Start';
import Operations from './components/operation/Operations';
import Finish from './components/finish/Finish';
import './App.css';

const App = () => {
	const [level, setLevel] = useState(0);
	const [game, setGame] = useState(0);
	const [score, setScore] = useState(0);

	const getLevel = (mode) => {
		setLevel(mode);
	};

	const getGame = (situation) => {
		if (situation === 0) {
			setScore(0);
		}
		setGame(situation);
	};

	const getScore = (points) => {
		setScore(points);
	};

	return (
		<div>
			{game === 0 && <Start getGame={getGame} getLevel={getLevel} />}
			{game === 1 && (
				<Operations
					score={score}
					level={level}
					getGame={getGame}
					getScore={getScore}
				/>
			)}
			{game === 2 && <Finish score={score} getGame={getGame} />}
		</div>
	);
};

export default App;
