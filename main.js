const questionsByLevel = [
	// Вопросы уровня 1
	[
		{
			question: "Как это называется?",
			answers: ["Pen", "Paper", "Pencil"],
			correct: 1,
		  },
		  {
			question: "Кто  изображён на картинке?",
			answers: ["Mouse", "Birds", "Cats"],
			correct: 1,
		  },
		  {
			question: "Что изображено на картинке?",
			answers: ["Banana", "Garlic", "Porridge",],
			correct: 2,
		  },
		  {
			question: "Какое слово составили кубики?",
			answers: ["небо", "море", "дом"],
			correct: 3,
		  },
		  {
			  question: "Знают этот фрукт детишки, любят есть его мартышки. Родом он из жарких стран. В тропиках растет…",
			  answers: ["door", "table", "banana"],
			  correct: 3,
		  },
		  {
			  question: " Закончи рифму: мышка - mouse, а кошка - cat, белый - …",
			  answers: ["blue", "pink", "white"],
			  correct: 3,
		  },
		  {
			  question: "А чёрный - …",
			  answers: ["black", "pink", "blue"],
			  correct: 1,
		  },
		  {
			  question: "Мясо жарится, шкварчит. Мясо по-английски - …",
			  answers: ["salt", "water", "meat"],
			  correct: 3,
		  },
		  {
			  question: "Продолжи алфавит: a, b, c",
			  answers: ["j, k", "d, e", "h, i	"],
			  correct: 2,
		  },
		  {
			  question: "2 + 1 =",
			  answers: ["one", "two", "three"],
			  correct: 3,
		  },
		  {
			  question: "Ко мне пришел друг на обед. В английском друг зовётся …",
			  answers: ["kent", "friend", "bread"],
			  correct: 2,
		  },
		  {
			  question: "5 - 2 =",
			  answers: ["three", "tree", "free"],
			  correct: 1,
		  },
		  {
			  question: "Куда идут ребята?",
			  answers: ["factory", "river", "school"],
			  correct: 3,
		  },
		  {
			  question: "Какая буква в английском алфавите - последняя?",
			  answers: ["z", "o", "v"],
			  correct: 1,
		  },
		  {
			  question: "Какое действие изображено?",
			  answers: ["run", "swim", "eat"],
			  correct: 1,
		  },
		  {
			  question: "Mother, father, uncle, brother, son and daughter, а одним словом - это…",
			  answers: ["friends", "animals", "family"],
			  correct: 3,
		  },
		  {
			  question: "Уберите лишнее",
			  answers: ["black", "white", "mother"],
			  correct: 3,
		  },
		  {
			  question: "Уберите лишнее",
			  answers: ["bear", "apple", "tiger"],
			  correct: 2,
		  },
		  {
			  question: "Уберите лишнее",
			  answers: ["two", "five", "red"],
			  correct: 3,
		  },
		  {
			  question: "Заглавная буква “n” выглядит как:",
			  answers: ["H", "P", "N"],
			  correct: 3,
		  },
		  {
			  question: "Что это за цифра?",
			  answers: ["six", "seven", "five"],
			  correct: 2,
		  },
		  {
			  question: "Что это за цифра?",
			  answers: ["four", "one", "two"],
			  correct: 1,
			},
	],
	// Вопросы уровня 2
	[
	  {
		question: "",
		answer: 1,
	  },
	  {
		question: "",
		answer:1 ,
	  },
	 
	],
	// Вопросы уровня 3
	[
	  {
		question: "",
		answer:1 ,
	  },
	  {
		question: "",
		answer: 1,
	  },
	
	],
	// Вопросы уровня 4
	[
	  {
		question: "",
		answer: 1,
	  },
	  {
		question: "",
		answer: 1,
	  },
	  
	],
  ];
  
  let score = 0;
  let questionIndex = 0;
  let userClass = 0;
  
  function clearPage() {
	console.log('clearPage');
  }
  
  function showClassQuestion() {
	console.log('showClassQuestion');
	const userClassInput = prompt('В каком ты классе? (Введите число от 1 до 4)');
  
	userClass = parseInt(userClassInput);
  
	if (isNaN(userClass) || userClass < 1 || userClass > 4) {
	  alert('Некорректный ввод. Пожалуйста, введите число от 1 до 4.');
	  showClassQuestion();
	  return;
	}
  
	questionIndex = 0;
	clearPage();
	showQuestion();
  }
  
  function showQuestion() {
	console.log('showQuestion');
  
	const currentLevelQuestions = questionsByLevel[userClass - 1];
  
	if (questionIndex >= currentLevelQuestions.length) {
	  console.log('Вопросы данного уровня закончились');
	  return;
	}
  
	const currentQuestion = currentLevelQuestions[questionIndex];
	console.log(currentQuestion.question);
  
	const userAnswer = prompt(currentQuestion.question);
	const parsedUserAnswer = parseInt(userAnswer);
  
	if (parsedUserAnswer === currentQuestion.answer) {
	  score++;
	}
  
	questionIndex++;
  
	showQuestion();
  }
  
  function showResults() {
	console.log('showResults started');
	console.log(score);
  
	let title, message;
  
	if (score === questionsByLevel[userClass - 1].length) {
	  title = '✨ Поздравляем! 🥇';
	  message = '✨ Вы ответили верно на все вопросы!😎👍';
	} else if ((score * 100) / questionsByLevel[userClass - 1].length >= 50) {
	  title = '✨ Неплохой результат! 🥈';
	  message = '✨ Вы дали более половины правильных ответов 🎉';
	} else {
	  title = '✨ Стоит постараться 🥉';
	  message = '✨ Пока у Вас меньше половины правильных ответов 🍪';
	}
  
	const result = `${score} из ${questionsByLevel[userClass - 1].length}`;
  
	const resultsTemplate = `
	  %title%
	  %message%
	  %result%
	`;
  
	const finalMessage = resultsTemplate
	  .replace('%title%', title)
	  .replace('%message%', message)
	  .replace('%result%', result);
  
	console.log(finalMessage);
  }