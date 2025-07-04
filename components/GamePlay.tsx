'use client';

import { useState, useEffect } from 'react';
import { Question } from '../data/questions';

interface GamePlayProps {
  groupName: string;
  players: string[];
  questions: Question[];
  onResetGame: () => void;
}

const GamePlay = ({ groupName, players, questions, onResetGame }: GamePlayProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('vibespark-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleToggleFavorite = () => {
    const questionId = currentQuestion.id;
    let newFavorites;
    
    if (favorites.includes(questionId)) {
      newFavorites = favorites.filter(id => id !== questionId);
    } else {
      newFavorites = [...favorites, questionId];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('vibespark-favorites', JSON.stringify(newFavorites));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tech': return 'bg-blue-100 text-blue-800';
      case 'personal': return 'bg-green-100 text-green-800';
      case 'funny': return 'bg-yellow-100 text-yellow-800';
      case 'deep': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      handleNextQuestion();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePreviousQuestion();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate">{groupName}</h1>
            <p className="text-xs sm:text-sm text-gray-600">
              {players.length} players • Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <button
            onClick={onResetGame}
            className="px-3 py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors ml-4 flex-shrink-0"
            aria-label="Reset game"
          >
            New Game
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-2xl">
          {/* Question Card */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentQuestion.category)}`}>
                {currentQuestion.category}
              </span>
              <button
                onClick={handleToggleFavorite}
                className={`p-2 rounded-full transition-colors ${
                  favorites.includes(currentQuestion.id)
                    ? 'text-red-500 hover:text-red-600'
                    : 'text-gray-400 hover:text-red-500'
                }`}
                aria-label={favorites.includes(currentQuestion.id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                {favorites.includes(currentQuestion.id) ? '❤️' : '🤍'}
              </button>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 leading-relaxed px-2">
              {currentQuestion.text}
            </h2>
            
            <div className="text-sm text-gray-500 mb-6 sm:mb-8">
              Discuss this question as a group
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 max-w-xs overflow-x-auto px-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                    index === currentQuestionIndex
                      ? 'bg-primary-600'
                      : index < currentQuestionIndex
                      ? 'bg-primary-300'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to question ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePreviousQuestion}
              disabled={isFirstQuestion}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors min-w-[100px] sm:min-w-[120px]"
              aria-label="Previous question"
            >
              <span>←</span>
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="text-center flex-1 px-2">
              <div className="text-sm font-medium text-gray-600">
                {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={isLastQuestion}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors min-w-[100px] sm:min-w-[120px]"
              aria-label="Next question"
            >
              <span className="hidden sm:inline">Next</span>
              <span>→</span>
            </button>
          </div>

          {/* Players List */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Players:</h3>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {players.map((player, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs sm:text-sm"
                >
                  {player}
                </span>
              ))}
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="mt-4 sm:mt-6 text-center text-xs text-gray-400">
            <span className="hidden sm:inline">Use ← → arrow keys or spacebar to navigate</span>
            <span className="sm:hidden">Tap buttons to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay; 