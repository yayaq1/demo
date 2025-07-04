# VibeSpark - Group Icebreaker Game

A fun, social, and easy-to-launch group icebreaker game designed for meetups, workshops, and team-building sessions.

## Features

- **Simple Setup**: Enter group name and player names to get started
- **Curated Questions**: 25+ dev-focused icebreaker questions across different categories
- **Offline-Friendly**: Works completely offline after initial load
- **Mobile-First**: Responsive design optimized for mobile devices
- **Favorites**: Mark favorite questions for later reference
- **Keyboard Navigation**: Use arrow keys or spacebar to navigate
- **Persistent State**: Game state is saved in browser localStorage

## Question Categories

- **Tech**: Programming habits, tools, and technical opinions
- **Personal**: Non-tech skills and personal preferences
- **Funny**: Light-hearted and humorous questions
- **Deep**: Thoughtful questions about career and aspirations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vibespark
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Network Access

To allow other devices on your network to access the game:

1. The development server is configured to bind to all network interfaces (`0.0.0.0`)
2. Find your network IP address:
```bash
./scripts/get-network-ip.sh
```
3. Share the network URL (e.g., `http://192.168.1.100:3000`) with others on the same WiFi network
4. Everyone can open the same URL on their phones/devices to play together

### Building for Production

```bash
npm run build
npm start
```

### Deployment

This app is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## How to Play

1. **Setup**: One person opens the app and enters the group name and all player names
2. **Start**: Click "Start Game" to begin with shuffled questions
3. **Navigate**: Use the Previous/Next buttons, arrow keys, or spacebar to move between questions
4. **Discuss**: Read each question aloud and let the group discuss
5. **Favorites**: Click the heart icon to save favorite questions
6. **Reset**: Click "New Game" to start over with a new group

## Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **State Management**: React hooks + localStorage
- **Deployment**: Static export ready for Vercel, Netlify, etc.
- **No Backend**: Fully client-side application

## Customization

To add your own questions, edit the `data/questions.ts` file:

```typescript
export const questions: Question[] = [
  {
    id: 'unique-id',
    text: "Your question here?",
    category: 'tech' | 'personal' | 'funny' | 'deep'
  },
  // ... more questions
];
```

## License

MIT License - feel free to use this for your meetups and events! 