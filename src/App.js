import React, { useState } from 'react';

export default function App() {
	const questions = [
	
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
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
			questionText: 'Who was the main actor in the movie Iron man?',
			answerOptions: [
				{ answerText: 'Stan lee', isCorrect: false },
				{ answerText: 'Robert Downey jr.', isCorrect: true },
				{ answerText: 'Bill Smitrovich', isCorrect: false },
				{ answerText: 'Mickey Rouke', isCorrect: false },
			],
		},{
			questionText: 'What is the capital of Canada',
			answerOptions: [
				{ answerText: 'Ottawa ', isCorrect: true },
				{ answerText: 'Toronto', isCorrect: false },
				{ answerText: 'Vancouver', isCorrect: false },
				{ answerText: 'Montreal', isCorrect: false },
			],
		},{
			questionText: 'How many bones are there in the human body?',
			answerOptions: [
				{ answerText: '200', isCorrect: false },
				{ answerText: '206', isCorrect: true },
				{ answerText: '201', isCorrect: false },
				{ answerText: '209', isCorrect: false},
			],
		},{
			questionText: 'Fe is a chemical symbol for ?',
			answerOptions: [
				{ answerText: 'Zinc', isCorrect: false },
				{ answerText: 'Hydrogen', isCorrect: false },
				{ answerText: 'Iron', isCorrect: true },
				{ answerText: 'Fluorine', isCorrect:false },
			],
		},
		
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		
		{
			questionText: 'How many blue strips are there on the US flag?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '13', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},

		{
			questionText: 'Who was the only U.S Presidnet to resign?',
			answerOptions: [
				{ answerText: 'Richard Nixon', isCorrect:true},
				{ answerText: 'Herbert Hoover ', isCorrect: false },
				{ answerText: 'Abraham Lincon', isCorrect: false },
				{ answerText: 'George W. Bush', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		
		{
			questionText: 'Which of these Characters is not part of the Friends group',
			answerOptions: [
				{ answerText: 'Racheal', isCorrect: false },
				{ answerText: 'Joey', isCorrect: false },
				{ answerText: 'Brittany', isCorrect: true },
				{ answerText: 'Monica', isCorrect: false },
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
					<p className='Copy' >©Tobias/.......    </p>
				<a href='https://github.com/Oluwatobiloba2905/Random-quiz-generator'>	<p className='Repo'>Github</p></a>
				</div>
			)
			
			: (
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
					</div>
				</>
			)}
		</div>
	);
}
