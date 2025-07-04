📄 Product Requirements Document (PRD)

Product Name:

VibeSpark – Group Icebreaker Game

⸻

Purpose:

Provide a fun, social, and easy-to-launch group icebreaker game experience that encourages participants to connect, share stories, and break the ice in small groups or meetup settings.

⸻

Target Users:
	•	Meetup attendees (e.g., Cursor meetups, dev communities)
	•	Workshop or hackathon participants
	•	University orientation groups
	•	Team-building sessions

⸻

🔥 Core Game Concept

Gameplay Flow:
	•	A group of people open the same web app on their phones.
	•	One person creates a game room and adds the names of participants.
	•	The app shows one question at a time, which the group discusses together.
	•	Questions are simple, vibe-y, and designed to spark stories or laughter.
	•	No need for live sync or state updates – the app is static per device after load.

⸻

🛠️ Technical Architecture

Stack:
	•	Framework: Next.js (App Router)
	•	Deployment: Vercel
	•	Frontend Only: All logic runs in-browser
	•	State: Stored in browser memory (local state or localStorage)

How it Works:
	1.	Load static web app (no login needed)
	2.	User enters group name and players
	3.	App loads a predefined deck of questions
	4.	Users swipe through questions together in their group
	5.	Optionally: mark favorite questions, copy/share the deck

⸻

💡 Sample Questions
	•	“What’s a weird tech habit you have?”
	•	“What’s the most chaotic bug you’ve ever caused?”
	•	“What non-tech skill are you weirdly good at?”
	•	“Who in this group is most likely to go full indie hacker?”

⸻

✨ Key Features

Feature	Description
Add Players	Users enter a list of names for a personal touch
Group Questions	Static list of pre-curated questions for devs/creatives
Offline-Friendly	No server round-trips after load; 100% static deployment
Minimal UI	Swipe or tap through questions, no scoring or logic
Vercel Deployable	Deploy as a single Next.js frontend project


⸻

✅ Future Enhancements
	•	Theming and categories (e.g., “chaotic”, “deep”, “funny”)
	•	Shareable room codes (read-only, still static)
	•	Add AI-curated custom decks based on themes
	•	Export player list + favorite questions

⸻

📦 Deployment Plan
	•	Step 1: Build the tool using Next.js + Tailwind
	•	Step 2: Create a static question set JSON
	•	Step 3: Host input form → generate local session state
	•	Step 4: Deploy to Vercel as a fully static frontend app