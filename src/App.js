import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Trivia Question: What was the name of the band Lionel Richie was a part of?',
			answerOptions: [
				{ answerText: 'King Harvest', isCorrect: false },
				{ answerText: 'Spectrums', isCorrect: false },
				{ answerText: 'Commodores', isCorrect: true },
				{ answerText: 'The Marshall Tucker Band', isCorrect: false },
			],
		},
		{
			questionText: 'Which country held the 2016 Summer Olympics?',
			answerOptions: [
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Ireland', isCorrect: false },
				{ answerText: 'Brazil', isCorrect: true },
				{ answerText: 'Italy', isCorrect: false },
			],
		},
		{
			questionText: 'Which planeet is the hottest?',
			answerOptions: [
				{ answerText: 'Venus', isCorrect: true },
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Mercury', isCorrect: false },
				{ answerText: 'Mars', isCorrect: false },
			],
		},
		{
			questionText: 'Who was the first  and only American president to resign ?',
			answerOptions: [
				{ answerText: 'Herbert Hoover', isCorrect: false },
				{ answerText: 'Richard Nixon', isCorrect: true },
				{ answerText: 'George W Bush', isCorrect: false },
				{ answerText: 'Abraham Lincoin', isCorrect: true },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

		{
			questionText: 'In which continent are Chile, Argentina and Brazil?',
			answerOptions: [
				{ answerText: 'North America', isCorrect: false },
				{ answerText: 'South America', isCorrect: true },
				{ answerText: 'Euroupe', isCorrect: false },
				{ answerText: 'Australasia', isCorrect: false },
			],
		},

		{
			questionText: 'What other country, besides the US, uses the US dollar as its official currency?',
			answerOptions: [
				{ answerText: 'Ecuador', isCorrect: true },
				{ answerText: 'Canada', isCorrect: false },
				{ answerText: 'Mexico', isCorrect: false },
				{ answerText: 'United Kingdom', isCorrect: false},
			],
		},

		{
			questionText: 'How many sides does a Dodecahedron has?',
			answerOptions: [
				{ answerText: '14', isCorrect: false },
				{ answerText: '24', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '20', isCorrect: false },
			],
		},

		{
			questionText: 'The human body is made up of approximately how much water?',
			answerOptions: [
				{ answerText: '50%', isCorrect: false },
				{ answerText: '60%', isCorrect: true },
				{ answerText: '70%', isCorrect: false },
				{ answerText: '40%', isCorrect: false },
			],
		},

		{
			questionText: 'What measurement scale is used to determine wind speed?',
			answerOptions: [
				{ answerText: 'Beaufort scale', isCorrect: true },
				{ answerText: 'Richter scale', isCorrect: false },
				{ answerText: 'Synoptic scale', isCorrect: false },
				{ answerText: 'Gusting scale', isCorrect: false },
			],
		},

		{
			questionText: 'What is the world’s fastest species of bird??',
			answerOptions: [
				{ answerText: 'Golden eagle', isCorrect: false },
				{ answerText: 'Peregrine falcon', isCorrect: true },
				{ answerText: 'Frigatebird', isCorrect: false },
				{ answerText: 'Penguin', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
						<h5> ©Tobias</h5>
					</div>
				</>
			)}
		</div>
	);
}
