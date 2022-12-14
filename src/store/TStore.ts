export type TStore = {
	highScore: number;
	useLowercase: boolean;
	currentScore: number;
	maxLetters: number;
	maxWords: number;
	numberOfConfettis: number;
	currentWords: string[];
	allWords: string[];
	showSettings: boolean;
	setShowSettings: (showSettings: boolean) => void;
	setUseLowercase: (useLowercase: boolean) => void;
	increaseScore: () => void;
	setNumberOfConfettis: (numberOfConfettis: number) => void;
	setHighScore: (highScore: number) => void;
	setMaxLetters: (change: 1 | -1) => void;
	setMaxWords: (change: 1 | -1) => void;
	setAllWords: (words: string[]) => void;
	setCurrentWords: () => void;
};
