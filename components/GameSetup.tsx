'use client';

import { useState } from 'react';

interface GameSetupProps {
  onStartGame: (groupName: string, players: string[]) => void;
}

const GameSetup = ({ onStartGame }: GameSetupProps) => {
  const [groupName, setGroupName] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddPlayer = () => {
    if (playerInput.trim() && !players.includes(playerInput.trim())) {
      setPlayers([...players, playerInput.trim()]);
      setPlayerInput('');
    }
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddPlayer();
    }
  };

  const handleStartGame = () => {
    if (groupName.trim() && players.length >= 2) {
      onStartGame(groupName.trim(), players);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">VibeSpark</h1>
          <p className="text-gray-600">Group Icebreaker Game</p>
        </div>

        <div className="space-y-6">
          <div>
            <label 
              htmlFor="groupName" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Group Name
            </label>
            <input
              id="groupName"
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="e.g., Cursor Meetup"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              aria-label="Enter group name"
            />
          </div>

          <div>
            <label 
              htmlFor="playerInput" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Add Players
            </label>
            <div className="flex gap-2">
              <input
                id="playerInput"
                type="text"
                value={playerInput}
                onChange={(e) => setPlayerInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter player name"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                aria-label="Enter player name"
              />
              <button
                onClick={handleAddPlayer}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                aria-label="Add player"
              >
                Add
              </button>
            </div>
          </div>

          {players.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Players ({players.length})
              </h3>
              <div className="space-y-2">
                {players.map((player, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg"
                  >
                    <span className="text-gray-800">{player}</span>
                    <button
                      onClick={() => handleRemovePlayer(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label={`Remove ${player}`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleStartGame}
            disabled={!groupName.trim() || players.length < 2}
            className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 disabled:hover:scale-100"
            aria-label="Start the game"
          >
            Start Game
          </button>

          {players.length < 2 && (
            <p className="text-sm text-gray-500 text-center">
              Add at least 2 players to start the game
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSetup; 