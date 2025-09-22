# Who Wants to be a Millionaire Game

A modern, interactive web-based recreation of the classic "Who Wants to be a Millionaire" quiz game built with Next.js, TypeScript, and SCSS.

[Game Demo](.)

## Table of Contents

- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Game Flow](#-game-flow)
- [Development](#-development)
- [Deployment](#-deployment)

## Quick Start

### Prerequisites

- Node.js 18.0 or later 

### Installation

```bash
git clone <repository-url>
cd who-wants-to-be-a-millionaire

npm install
```

### Running the Game

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play the game!

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
who-wants-to-be-a-millionaire/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (game)/                   # Game route group
│   │   │   ├── page.tsx              # Main game page
│   │   ├── layout.tsx                # Root layout
│   │   ├── not-found.tsx             # Redirection to home page
│   ├── modules/                      # Feature modules
│   │   └── game/                     # Game module
│   │       ├── components/           # Game components
│   │       │   ├── EndScreen/        # Game end screen
│   │       │   ├── PrizePanel/       # Prize ladder display
│   │       │   ├── QuestionBlock/    # Question and answers
│   │       │   ├── QuestionScreen/   # QuestionBlock and PrizePanel
│   │       │   └── StartScreen/      # Game start screen
│   │       ├── contexts/             # Game state management
│   │       │   ├── QuestionContext.tsx
│   │       │   ├── ProgressContext.tsx
│   │       └── GameFlow.tsx          # Game flow controller
│   ├── shared/                       # Shared resources
│   │   ├── components/               # Reusable components
│   │   │   ├── ScreenLayout          # Into/outro layout
│   │   │   └── Button/               # Custom button component
│   │   ├── constants/                # Configuration files
│   │   │   └── game.config.json      # Game questions
│   │   └── utils/                    # Utility functions
│   └── styles/                       # Global styles
│       ├── _breakpoints.scss         # Responsive breakpoints
│       ├── _colors.scss              # Color palette
│       ├── _typography.scss          # Typography settings
│       ├── _mixins.scss              # SCSS mixins (partial)
│       ├── global.scss               # Global styles
│       └── index.scss                # Style imports
├── public/                           # Static assets
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
└── README.md                         # This file
```

## Game Flow

The game follows the classic "Who Wants to be a Millionaire" format:

### Game States

1. **Start Screen** (`step: 1`)
   - Welcome message
   - "Start" button to begin

2. **Question Screen** (`step: 2`)
   - Current question display
   - Multiple-choice answers
   - Prize ladder showing progress

3. **End Screen** (`step: 3`)
   - Game result
   - Final prize amount
   - "Play Again" option


## Development

### Available Scripts

```bash
npm run dev          
npm run build        
npm run start        
npm run lint    
npm run husky     
```

### Adding New Questions

1. Edit `src/shared/config/game.config.json`
2. Follow the existing question structure
3. Ensure exactly one `isCorrect: true` per question
4. Test question flow and prize amounts


## Deployment

This project is deployed to [Vercel](https://vercel.com/).
Every time you push changes to the repository, Vercel will create a new deployment automatically.

**Happy Gaming! ** 

