import create from 'zustand';
import { persist } from 'zustand/middleware';
import type { TStore } from './TStore';

const getRandomWord = (words: string[]) => {
	const randomNumber = Math.floor(Math.random() * words.length);
	return words[randomNumber];
};

const getWords = (
	words: string[],
	maxLetters: number,
	maxWords: number,
): string[] => {
	const wordsInScope = words.filter((word) => {
		if (word.length <= maxLetters) {
			if (word.length > 1) {
				return word;
			}

			return false;
		}

		return false;
	});

	const returnableWords = [];

	for (let index = 0; index < maxWords; index++) {
		returnableWords.push(getRandomWord(wordsInScope));
	}

	return returnableWords;
};

const useStore = create<TStore>()(
	persist(
		(set, get) => ({
			highScore: 0,
			currentScore: 0,
			maxWords: 1,
			maxLetters: 3,
			numberOfConfettis: 0,
			allWords: [],
			currentWords: [],
			useLowercase: false,
			showSettings: false,
			setShowSettings(showSettings) {
				set({ showSettings });
			},
			setUseLowercase(useLowercase: boolean) {
				set({ useLowercase });
			},
			increaseScore() {
				set((state) => ({ currentScore: state.currentScore + 1 }));
				if (get().currentScore > get().highScore) {
					set((state) => ({ highScore: state.currentScore }));
				}
			},
			setHighScore(highScore) {
				set({ highScore });
			},
			setNumberOfConfettis(numberOfConfettis) {
				set(() => ({ numberOfConfettis }));
			},
			setMaxWords(change) {
				const maxWords = get().maxWords;

				if (maxWords >= 1) {
					set(() => ({ maxWords: maxWords + change }));
				}

				get().setCurrentWords();
			},
			setMaxLetters(change) {
				const maxLetters = get().maxLetters;
				if (maxLetters > 1) {
					set(() => ({ maxLetters: maxLetters + change }));
				}

				get().setCurrentWords();
			},
			setAllWords(allWords) {
				set(() => ({ allWords }));
				get().setCurrentWords();
			},
			setCurrentWords() {
				const maxLetters = get().maxLetters;
				const maxWords = get().maxWords;
				const words = get().allWords;

				const currentWords = getWords(words, maxLetters, maxWords);

				set(() => ({ currentWords }));
			},
		}),
		{
			name: 'little-reader',
			getStorage: () => localStorage,
			partialize: (state) => ({
				highScore: state.highScore,
				useLowercase: state.useLowercase,
				maxLetters: state.maxLetters,
				maxWords: state.maxWords,
				allWords: state.allWords,
			}),
		},
	),
);

export default useStore;
