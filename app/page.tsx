'use client';

import { useState, useEffect } from 'react';
import GameSetup from '../components/GameSetup';
import GamePlay from '../components/GamePlay';
import { questions, shuffleQuestions, Question } from '../data/questions';

interface GameState {
  groupName: string;
  players: string[];
  questions: Question[];
  isGameStarted: boolean;
}

const HomePage = () => {
  const [gameState, setGameState] = useState<GameState>({
    groupName: '',
    players: [],
    questions: [],
    isGameStarted: false,
  });

  useEffect(() => {
    // Load game state from localStorage on component mount
    const savedGameState = localStorage.getItem('vibespark-game-state');
    if (savedGameState) {
      try {
        const parsedState = JSON.parse(savedGameState);
        setGameState(parsedState);
      } catch (error) {
        console.error('Error loading saved game state:', error);
      }
    }
  }, []);

  const handleStartGame = (groupName: string, players: string[]) => {
    const shuffledQuestions = shuffleQuestions(questions);
    const newGameState = {
      groupName,
      players,
      questions: shuffledQuestions,
      isGameStarted: true,
    };
    
    setGameState(newGameState);
    localStorage.setItem('vibespark-game-state', JSON.stringify(newGameState));
  };

  const handleResetGame = () => {
    const resetState = {
      groupName: '',
      players: [],
      questions: [],
      isGameStarted: false,
    };
    
    setGameState(resetState);
    localStorage.removeItem('vibespark-game-state');
    localStorage.removeItem('vibespark-favorites');
  };

  if (!gameState.isGameStarted) {
    return <GameSetup onStartGame={handleStartGame} />;
  }

  return (
    <GamePlay
      groupName={gameState.groupName}
      players={gameState.players}
      questions={gameState.questions}
      onResetGame={handleResetGame}
    />
  );
};

export default HomePage; 